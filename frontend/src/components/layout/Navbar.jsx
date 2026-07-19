import { NavLink } from "react-router-dom";
import { Leaf } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex justify-center px-6 pt-5">

      <nav
        className="
          flex
          w-full
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-8
          py-4
          backdrop-blur-2xl
          shadow-[0_8px_35px_rgba(0,0,0,.35)]
        "
      >

        {/* Logo */}

        <NavLink
          to="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-[0_0_25px_rgba(34,197,94,.35)]">

            <Leaf className="h-6 w-6 text-white" />

          </div>

          <div>

            <h1 className="text-lg font-bold text-white">
              Smart Nutrition
            </h1>

            <p className="text-xs text-slate-400">
              Analyzer
            </p>

          </div>
        </NavLink>

        {/* Links */}

        <div className="hidden items-center gap-2 md:flex">

          {links.map((link) => (

            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-green-500/15 text-green-400"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>

          ))}

        </div>

        {/* CTA */}

        

      </nav>

    </header>
  );
}