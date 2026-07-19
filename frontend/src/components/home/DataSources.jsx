import {
  Database,
  Globe2,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

const sources = [
  {
    icon: Database,
    title: "IFCT 2017",
    subtitle: "Indian Food Composition Tables",
    description:
      "Primary source for nutrient composition of Indian foods, developed by ICMR-NIN.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: Globe2,
    title: "USDA FoodData Central",
    subtitle: "Global Nutrition Database",
    description:
      "Comprehensive international food composition database maintained by the United States Department of Agriculture.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: HeartHandshake,
    title: "ICMR-NIN RDA",
    subtitle: "Recommended Dietary Allowances",
    description:
      "Official dietary recommendations used to compare nutrient intake and evaluate meal quality.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
];

export default function DataSources() {
  return (
    <section id="datasources" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
            📚 Trusted Data Sources
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Built on
            <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Trusted Nutrition Science
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Our nutrition analysis combines authoritative food composition
            databases and dietary guidelines to deliver reliable nutritional
            insights.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {sources.map((source) => {
            const Icon = source.icon;

            return (
              <div
                key={source.title}
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
                  className={`inline-flex rounded-2xl p-4 ${source.bg}`}
                >
                  <Icon className={`h-8 w-8 ${source.color}`} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {source.title}
                </h3>

                <p className="mt-2 font-medium text-green-400">
                  {source.subtitle}
                </p>

                <p className="mt-5 leading-7 text-slate-400">
                  {source.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Bottom Trust Banner */}

        <div
          className="
            mt-16
            rounded-3xl
            border border-green-500/20
            bg-gradient-to-r
            from-green-500/10
            via-emerald-500/10
            to-green-500/10
            p-8
            backdrop-blur-xl
          "
        >
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-green-500/20 p-4">
                <ShieldCheck className="h-8 w-8 text-green-400" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Trusted Nutrition Analysis
                </h3>

                <p className="mt-1 text-slate-400">
                  Nutrition values are derived from established food databases
                  and dietary guidelines to support informed meal analysis.
                </p>
              </div>

            </div>

            <div className="rounded-full border border-green-500/20 bg-green-500/10 px-5 py-3 text-sm font-semibold text-green-400">
              Reliable • Science-Based • Transparent
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}