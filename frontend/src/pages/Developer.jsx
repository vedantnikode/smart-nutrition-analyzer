import { Mail } from "lucide-react";

export default function Developer() {
  return (
    <section className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 p-10">

        <h1 className="text-5xl font-bold">
          Meet the <span className="text-green-400">Developer</span>
        </h1>

        <p className="mt-6 text-lg text-slate-400">
          Hi! I'm <span className="font-semibold text-white">Vedant Nikode</span>,
          a Bioengineering undergraduate at IIT Mandi passionate about AI,
          software development, and solving real-world problems using technology.
        </p>

        <div className="mt-10 space-y-4">
          <p>🎓 IIT Mandi</p>
          <p>💻 Software Development & AI</p>
          <p>🚀 Smart Nutrition Analyzer Creator</p>
        </div>

            <div className="mt-10 flex flex-wrap gap-4">

            <a
                href="https://instagram.com/vedant._.2107"
                target="_blank"
                rel="noreferrer"
                className="
                rounded-full
                border
                border-pink-500/30
                bg-pink-500/10
                px-6
                py-3
                text-sm
                font-semibold
                text-pink-400
                transition-all
                duration-300
                hover:scale-105
                hover:bg-pink-500/20
                hover:border-pink-400
                "
            >
                @vedant._.2107
            </a>

            <a
                href="vedantnikode1@gmail.com"
                className="
                rounded-full
                border
                border-slate-600
                bg-slate-800/50
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:bg-slate-700
                "
            >
                vedantnikode1@gmail.com
            </a>

            </div>

      </div>
    <p className="mt-10 text-center text-sm text-slate-500">
        Made with <span className="text-red-500">❤️</span> by{" "}
        <span className="font-semibold text-green-400">
            Vedant Nikode
        </span>
    </p>
    </section>
  );
}