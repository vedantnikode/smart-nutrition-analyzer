export default function MealSidebar({
  meal,
  foods,
  onAnalyze,
  onRemove,
}) {
  const getFood = (id) => foods.find((food) => food.id === id);

  return (
    <div className="sticky top-24 rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-5 text-2xl font-bold">
        🥗 Today's Diet
      </h2>

      {meal.length === 0 ? (
        <p className="text-slate-400">
          No food added yet.
        </p>
      ) : (
        <>
          <div className="space-y-3">

            {meal.map((item) => {
              const food = getFood(item.id);

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-slate-700 pb-2"
                >
                  <div>
                    <p className="font-medium">
                      {food?.name}
                    </p>

                    <p className="text-xs text-slate-400">
                      {item.quantity} {food?.default_serving.unit}
                      {item.quantity > 1 ? "s" : ""}
                    </p>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="mt-2 rounded-lg bg-red-600 px-3 py-1 text-xs text-white hover:bg-red-700"
                    >
                        Remove
                    </button>
                  </div>
                </div>
              );
            })}

          </div>

          <p className="mt-5 text-sm text-slate-400">
            Selected Foods : {meal.length}
          </p>
        </>
      )}

      <button
        onClick={onAnalyze}
        disabled={meal.length === 0}
        className="mt-8 w-full rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-50"
      >
        Analyze Meal
      </button>

    </div>
  );
}