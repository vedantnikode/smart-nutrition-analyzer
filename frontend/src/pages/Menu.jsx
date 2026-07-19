import { useEffect, useState } from "react";
import { getFoods, searchFoods } from "../api/foods";
import FoodCard from "../components/FoodCard";
import MealSidebar from "../components/MealSidebar";
import { calculateNutrition } from "../api/nutrition";
import { calculateHealth } from "../api/health";
import { useNavigate } from "react-router-dom";
import MessMenu from "../components/MessMenu";

export default function Menu() {
  const [foods, setFoods] = useState([]);          // All foods
  const [filteredFoods, setFilteredFoods] = useState([]); // Search results
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const [meal, setMeal] = useState([]);
  const [quantities, setQuantities] = useState({});

  const [nutrition, setNutrition] = useState(null);
  const [health, setHealth] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);

  const navigate = useNavigate();

  const [day, setDay] = useState("Monday");
  const [source, setSource] = useState("mess");
  

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    setLoading(true);

    try {
      const data = await getFoods();
      setFoods(data);
      setFilteredFoods(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (value) => {
    setSearch(value);

    if (value.trim() === "") {
      fetchFoods();
      return;
    }

    try {
      const data = await searchFoods(value);
      setFilteredFoods(data);
    } catch (error) {
      console.error(error);
    }
  };

  const increaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const removeFromMeal = (id) => {
    setMeal((prev) => prev.filter((item) => item.id !== id));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  const addToMeal = (food) => {
    const qty = quantities[food.id] || 1;

    setMeal((prev) => {
      const existing = prev.find((item) => item.id === food.id);

      if (existing) {
        return prev.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }

      return [
        ...prev,
        {
          id: food.id,
          quantity: qty,
        },
      ];
    });
  };

  const analyzeMeal = async () => {
    if (meal.length === 0) return;

    try {
      setAnalyzing(true);

      const nutritionResult = await calculateNutrition(meal, "male");
      setNutrition(nutritionResult);

      const healthResult = await calculateHealth(meal, "male");
      setHealth(healthResult);

      navigate("/dashboard", {
        state: {
          nutrition: nutritionResult,
          health: healthResult,
        },
      });

    } catch (error) {
      console.error(error);
      alert("Failed to analyze meal.");
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <>
    <div className="max-w-7xl mx-auto px-6 pt-6">
      <button
        onClick={() => navigate("/")}
        className="mb-6 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
      >
        ← Back to Home
      </button>
    </div>
    
    
    <section className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">

      <h1 className="mb-8 text-4xl font-bold">
        🍽️ Daily Diet Planner
      </h1>

      {/* Day & Food Source */}
      <div className="mb-8 flex flex-col gap-4 rounded-xl bg-slate-900 p-4 md:flex-row md:items-center md:justify-between">

        {/* Day Selector */}
        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Select Day
          </label>

          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2"
          >
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>
        </div>

        {/* Choose Food Source */}
        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Choose Food Source
          </label>

          <div className="flex gap-6">

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="mess"
                checked={source === "mess"}
                onChange={() => setSource("mess")}
              />
              College Mess Menu
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="outside"
                checked={source === "outside"}
                onChange={() => setSource("outside")}
              />
              Search Food Database
            </label>

          </div>
        </div>

      </div>

      {/* Show search only for Outside Food */}
      {source === "outside" && (
        <input
          type="text"
          placeholder="Search foods..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="mb-8 w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 outline-none focus:border-green-500"
        />
      )}

        {loading && <p>Loading...</p>}

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">

          {/* LEFT */}

          <div>

            {source === "mess" ? (

              <MessMenu
                day={day}
                quantities={quantities}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onAdd={addToMeal}
              />

            ) : (

              <div className="grid gap-6 sm:grid-cols-2">

                {filteredFoods.map((food) => (
                  <FoodCard
                    key={food.id}
                    food={food}
                    quantity={quantities[food.id] || 1}
                    onIncrease={increaseQuantity}
                    onDecrease={decreaseQuantity}
                    onAdd={addToMeal}
                  />
                ))}

              </div>

            )}

          </div>

          {/* RIGHT */}

          <div>
            <MealSidebar
              meal={meal}
              foods={foods}
              onAnalyze={analyzeMeal}
              onRemove={removeFromMeal}
            />
          </div>

        </div>

      </div>
    </section>
    </>
  );
}