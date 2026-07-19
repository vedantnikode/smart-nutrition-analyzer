import { ArrowRight, BookOpen } from "lucide-react";
import ClockCard from "./ClockCard";
import DashboardPreview from "./DashboardPreview";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (

    <section className="relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-250px] top-0 h-[450px] w-[450px] rounded-full bg-green-500/10 blur-[170px]" />
        <div className="absolute right-[-150px] top-40 h-[350px] w-[350px] rounded-full bg-emerald-400/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:gap-16 xl:gap-20 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT */}
          <div className="min-w-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-sm font-medium text-green-400 backdrop-blur-xl">
              🥗 Smart Meal Analysis Platform
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-white">
                Know What's
              </span>

              <br />

              <span className="bg-gradient-to-r from-green-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                On Your Plate
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
              Analyze meals using trusted nutrition databases from
              <span className="font-semibold text-green-400">
                {" "}
                IFCT 2017
              </span>
              {" "}
              and
              {" "}
              <span className="font-semibold text-green-400">
                USDA FoodData Central
              </span>
              .
              {" "}
              Track calories, proteins, vitamins and compare them against
              <span className="font-semibold text-green-400">
                {" "}
                ICMR-NIN
              </span>
              {" "}
              recommendations.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-5">
              <button
                onClick={() => navigate("/menu")}
                className="
                  w-full
                  sm:w-auto
                  rounded-2xl
                  bg-gradient-to-r
                  from-green-500
                  to-emerald-500
                  px-8
                  py-4
                  text-lg
                  font-semibold
                  text-white
                  shadow-[0_0_30px_rgba(34,197,94,.25)]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_45px_rgba(34,197,94,.45)]
                "
              >
                <span className="flex items-center gap-2">
                  Analyze Today's Diet
                  <ArrowRight size={20} />
                </span>
              </button>

              <button
                onClick={() => navigate("/about")}
                className="
                  w-full
                  sm:w-auto
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  px-8
                  py-4
                  text-lg
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-green-500/30
                  hover:bg-white/10
                "
              >
                <span className="flex items-center gap-2">
                  <BookOpen size={19} />
                  Learn More
                </span>
              </button>
            </div>

            {/* Trusted Sources */}
            <div className="mt-10">
              <p className="mb-5 text-sm uppercase tracking-[4px] text-slate-500">
                Nutrition Data Sourced From
              </p>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">
                {[
                  "IFCT 2017",
                  "USDA FoodData Central",
                  "ICMR-NIN RDA",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-2
                      text-sm
                      text-slate-300
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:border-green-500/30
                      hover:text-white
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="mt-10 flex flex-col items-center gap-6 lg:mt-0">
            <ClockCard />
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}