import { NavLink } from "react-router-dom";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Top */}

        <div className="grid gap-10 md:grid-cols-2">

          {/* Brand */}

          <div>
            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-green-500 p-3 shadow-lg shadow-green-500/20">
                <Leaf className="h-5 w-5 text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Smart Nutrition Analyzer
                </h3>

                <p className="text-slate-400">
                  Helping people make healthier food choices
                  using trusted nutrition databases.
                </p>
              </div>

            </div>
          </div>

          {/* Navigation */}

          <div className="flex items-center justify-start md:justify-end">

            <div className="flex flex-wrap gap-8 text-slate-400">

              <NavLink
                to="/"
                className="transition hover:text-green-400"
              >
                Home
              </NavLink>

              <a
                href="#features"
                className="transition hover:text-green-400"
              >
                Features
              </a>

              <a
                href="#datasources"
                className="transition hover:text-green-400"
              >
                Data Sources
              </a>

              <a
                href="#about"
                className="transition hover:text-green-400"
              >
                About
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

        {/* Bottom */}

        <div className="space-y-4 text-center">

          <p className="text-lg font-semibold text-white">
            ✨ Crafted with ❤️ by{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Vedant Nikode
            </span>
          </p>

          <p className="font-medium tracking-wider text-green-400">
            ⚡ TEAM • LONE WOLF
          </p>

          <p className="text-sm text-slate-500">
            © 2026 Smart Nutrition Analyzer
            <br />
            All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}