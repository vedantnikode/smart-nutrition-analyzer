import {
  Salad,
  Flame,
  Beef,
  Wheat,
  Droplets,
  HeartPulse,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <div
      className="
        w-[380px]
        rounded-[30px]
        border border-white/10
        bg-white/5
        backdrop-blur-2xl
        p-7
        shadow-[0_15px_60px_rgba(0,0,0,.45)]
        transition-all
        duration-300
        hover:border-green-500/20
        hover:shadow-[0_0_50px_rgba(34,197,94,.12)]
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-slate-400">
            Sample Meal Analysis
          </p>

          <h3 className="mt-1 text-2xl font-bold text-white">
            Today's Lunch
          </h3>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/15">
          <Salad className="h-7 w-7 text-green-400" />
        </div>

      </div>

      {/* Meal Items */}

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">

        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
          Meal Items
        </p>

        <div className="grid grid-cols-2 gap-3">

          <Meal name="🍚 Rice" />
          <Meal name="🥣 Dal" />
          <Meal name="🥗 Salad" />
          <Meal name="🥛 Curd" />

        </div>

      </div>

      {/* Nutrition */}

      <div className="mt-8 space-y-5">

        <Stat
          icon={<Flame className="text-orange-400" />}
          label="Calories"
          value="620 kcal"
        />

        <Stat
          icon={<Beef className="text-red-400" />}
          label="Protein"
          value="24 g"
        />

        <Stat
          icon={<Wheat className="text-yellow-400" />}
          label="Carbohydrates"
          value="82 g"
        />

        <Stat
          icon={<Droplets className="text-sky-400" />}
          label="Fat"
          value="12 g"
        />

      </div>

      {/* Health Score */}

      <div className="mt-10 rounded-2xl border border-green-500/20 bg-green-500/10 p-5">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <HeartPulse className="text-green-400" />

            <span className="font-medium text-white">
              Health Score
            </span>

          </div>

          <span className="text-2xl font-bold text-green-400">
            92
          </span>

        </div>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
            style={{ width: "92%" }}
          />

        </div>

        <p className="mt-4 text-sm leading-6 text-slate-400">
          Excellent nutritional balance with sufficient protein,
          fibre and essential vitamins.
        </p>

      </div>

    </div>
  );
}

function Meal({ name }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white">
      {name}
    </div>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">

        <div>{icon}</div>

        <span className="text-slate-300">
          {label}
        </span>

      </div>

      <span className="font-semibold text-white">
        {value}
      </span>

    </div>
  );
}