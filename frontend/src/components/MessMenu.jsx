import { useEffect, useState } from "react";
import { getMealMenu } from "../api/menu";
import FoodCard from "./FoodCard";

export default function MessMenu({
  day,
  quantities,
  onIncrease,
  onDecrease,
  onAdd,
}) {
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);

  useEffect(() => {
    const loadMenu = async () => {
      try {
        const [b, l, d] = await Promise.all([
          getMealMenu(day, "Breakfast"),
          getMealMenu(day, "Lunch"),
          getMealMenu(day, "Dinner"),
        ]);

        setBreakfast(b);
        setLunch(l);
        setDinner(d);
      } catch (err) {
        console.error(err);
      }
    };

    loadMenu();
  }, [day]);

  const MealSection = ({ title, foods }) => (
    <div className="mb-8">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            quantity={quantities[food.id] || 1}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onAdd={onAdd}
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <MealSection title="🍳 Breakfast" foods={breakfast} />
      <MealSection title="🍛 Lunch" foods={lunch} />
      <MealSection title="🌙 Dinner" foods={dinner} />
    </>
  );
}