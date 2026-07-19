import {
  UtensilsCrossed,
  BarChart3,
  HeartPulse,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Analyze Any Meal",
    description:
      "Search or enter meal items to instantly calculate calories, protein, carbohydrates, fats, vitamins, and minerals.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: BarChart3,
    title: "Detailed Nutrition",
    description:
      "Get a comprehensive nutritional breakdown using trusted IFCT 2017 and USDA FoodData Central databases.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: HeartPulse,
    title: "Health Score",
    description:
      "Compare your meal with ICMR-NIN dietary recommendations and receive an easy-to-understand health score.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    icon: Sparkles,
    title: "Smart Insights",
    description:
      "Receive personalized nutritional insights and practical suggestions to build healthier eating habits.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
            ✨ Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Everything You Need for
            <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Smarter Nutrition Analysis
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Analyze meals, understand nutritional values, compare with dietary
            recommendations, and make healthier food choices—all in one place.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  rounded-3xl
                  border border-white/10
                  bg-gradient-to-br
                  from-white/10
                  via-white/5
                  to-transparent
                  backdrop-blur-xl
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-green-500/30
                  hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)]
                "
              >
                <div
                  className={`inline-flex rounded-2xl p-4 ${feature.bg}`}
                >
                  <Icon className={`h-8 w-8 ${feature.color}`} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}