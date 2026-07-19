import DeveloperCTA from "../components/DeveloperCTA";

export default function About() {
  return (
    <main className="pt-28">

      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            About the Project
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Smart Nutrition Analyzer helps users analyze their daily diet
            by calculating calories, nutrients, and a health score based on trusted
            nutritional data. It provides actionable insights to support healthier
            eating habits.
            
          </p>
        </div>

        {/* Why this project */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8">
            <h2 className="text-2xl font-semibold text-white">
              🎯 Purpose
            </h2>

            <p className="mt-4 text-slate-400">
              The goal of this project is to simplify nutrition analysis by
              combining AI with trusted food composition databases, making
              healthy eating more accessible and understandable.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8">
            <h2 className="text-2xl font-semibold text-white">
              ⚡ Tech Stack
            </h2>

            <p className="mt-4 text-slate-400">
              React • Vite • Tailwind CSS • AI Models • IFCT 2017 • USDA FoodData
              Central • ICMR-NIN RDA
            </p>
          </div>

        </div>

      </section>

      <DeveloperCTA />

    </main>
  );
}