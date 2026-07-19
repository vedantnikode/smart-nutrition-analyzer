export default function FoodCard({
  food,
  quantity,
  onIncrease,
  onDecrease,
  onAdd,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

      <h2 className="text-xl font-semibold">
        {food.name}
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        {food.category}
      </p>

      <div className="mt-4 space-y-1 text-sm text-slate-400">
        <p>
          Calories : {food.nutrition.calories_kcal} kcal
        </p>

        <p>
          Protein : {food.nutrition.protein_g} g
        </p>

        <p>
          Carbs : {food.nutrition.carbohydrates_g} g
        </p>

        <p>
          Fat : {food.nutrition.fat_g} g
        </p>
      </div>

      {/* Quantity */}

      <div className="mt-5 flex items-center justify-between">

        <button
          onClick={() => onDecrease(food.id)}
          className="h-9 w-9 rounded-lg bg-slate-800 hover:bg-slate-700"
        >
          −
        </button>

        <span className="font-medium">

          {quantity} {food.default_serving.unit}

          {quantity > 1 ? "s" : ""}

        </span>

        <button
          onClick={() => onIncrease(food.id)}
          className="h-9 w-9 rounded-lg bg-slate-800 hover:bg-slate-700"
        >
          +
        </button>

      </div>

      <button
        onClick={() => onAdd(food)}
        className="mt-5 w-full rounded-xl bg-green-500 py-2 font-semibold transition hover:bg-green-600"
      >
        Add to Meal
      </button>

    </div>
  );
}