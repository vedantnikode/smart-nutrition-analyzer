import { useLocation, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return <Navigate to="/menu" replace />;
  }

  const { nutrition, health } = state;

  const totals = nutrition.total_nutrition;
  const rda = nutrition.rda_percentage;

  const nutrientLabels = {
    calories_kcal: {
      icon: "🔥",
      label: "Calories",
      unit: "kcal",
    },
    protein_g: {
      icon: "🥩",
      label: "Protein",
      unit: "g",
    },
    carbohydrates_g: {
      icon: "🍚",
      label: "Carbohydrates",
      unit: "g",
    },
    fat_g: {
      icon: "🥑",
      label: "Fat",
      unit: "g",
    },
    fiber_g: {
      icon: "🥗",
      label: "Fiber",
      unit: "g",
    },
    iron_mg: {
      icon: "🩸",
      label: "Iron",
      unit: "mg",
    },
    calcium_mg: {
      icon: "🥛",
      label: "Calcium",
      unit: "mg",
    },
    vitamin_c_mg: {
      icon: "🍊",
      label: "Vitamin C",
      unit: "mg",
    },
    potassium_mg: {
      icon: "🍌",
      label: "Potassium",
      unit: "mg",
    },
    sodium_mg: {
      icon: "🧂",
      label: "Sodium",
      unit: "mg",
    },
  };  

  const recommendationMap = {
    "Increase protein_g intake.": "🥩 Increase Protein-rich foods",
    "Increase fat_g intake.": "🥑 Add healthy fats",
    "Increase fiber_g intake.": "🥗 Eat more vegetables & fruits",
    "Increase iron_mg intake.": "🩸 Increase Iron-rich foods",
    "Increase calcium_mg intake.": "🥛 Add milk or dairy products",
    "Increase vitamin_c_mg intake.": "🍊 Eat oranges, lemons or amla",
    "Increase potassium_mg intake.": "🍌 Eat bananas & leafy vegetables",
    "Increase sodium_mg intake.": "🧂 Slightly increase sodium intake",

    "Reduce protein_g intake.": "🥩 Reduce excess protein",
    "Reduce fat_g intake.": "🥑 Reduce oily foods",
    "Reduce carbohydrates_g intake.": "🍚 Reduce refined carbohydrates",
    "Reduce iron_mg intake.": "🩸 Reduce iron-rich foods",
    "Reduce calcium_mg intake.": "🥛 Reduce excess dairy intake",
    "Reduce vitamin_c_mg intake.": "🍊 Reduce Vitamin C supplements",
    "Reduce potassium_mg intake.": "🍌 Reduce potassium-rich foods",
    "Reduce sodium_mg intake.": "🧂 Reduce salt intake",
  };

  return (
    
    <section className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mb-6">
        <button
          onClick={() => navigate("/menu")}
          className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition"
        >
          ← Back to Menu
        </button>
      </div>
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-8 text-4xl font-bold">
          📊 Nutrition Dashboard
        </h1>

        {/* Nutrition */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <h2 className="mb-5 text-2xl font-semibold">
            Nutrition Summary
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">

            {Object.entries(totals).map(([key, value]) => (
              <div
                key={key}
                className="rounded-xl bg-slate-800 p-4"
              >
                <div className="flex items-center gap-2 text-slate-300">
                  <span>{nutrientLabels[key].icon}</span>
                  <span>{nutrientLabels[key].label}</span>
                </div>

                <p className="text-xl font-bold">
                  {value} {nutrientLabels[key].unit}
                </p>

                <p className="text-sm text-green-400">
                  {rda[key]}% of Daily Need
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Health */}

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <div className="text-center">

            <h2 className="text-3xl font-bold">
              Health Score
            </h2>

            <div className="mt-6">

              <div className="text-7xl">
                {
                  health.grade === "A"
                    ? "🟢"
                    : health.grade === "B"
                    ? "🟡"
                    : health.grade === "C"
                    ? "🟠"
                    : "🔴"
                }
              </div>

              {/* <p className="mt-3 text-7xl font-extrabold text-green-400"> */}
              <p  className={`mt-3 text-7xl font-extrabold ${
                    health.grade === "A"
                      ? "text-green-400"
                      : health.grade === "B"
                      ? "text-yellow-400"
                      : health.grade === "C"
                      ? "text-orange-400"
                      : "text-red-400"
                  }`}>


                {health.health_score}
              </p>

              <p className="mt-2 text-3xl font-bold">
                Grade {health.grade}
              </p>

              <p className="mt-3 text-lg text-slate-400">
                {
                  health.grade === "A"
                    ? "Excellent Balanced Meal 🎉"
                    : health.grade === "B"
                    ? "Healthy Meal 👍"
                    : health.grade === "C"
                    ? "Needs Improvement"
                    : "Needs Improvement"
                }
              </p>

            </div>

          </div>

          <div className="mt-6">

            <h3 className="mb-3 text-xl font-semibold">
              Recommendations
            </h3>

            <ul className="list-disc space-y-2 pl-5">

              {health.recommendations.length === 0 ? (
                <li>Excellent balanced meal 🎉</li>
              ) : (
                health.recommendations.map((rec, index) => (
                  <li key={index}>
                    {recommendationMap[rec] || rec}
                  </li>
                ))
              )}

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}