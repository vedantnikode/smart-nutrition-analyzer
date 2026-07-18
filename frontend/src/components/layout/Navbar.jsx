import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-2xl font-bold text-green-700">
          🥗 Smart Nutrition Analyzer
        </h1>

        <div className="flex gap-8 text-lg font-medium">

          <Link
            to="/"
            className="hover:text-green-700 transition"
          >
            Home
          </Link>

          <Link
            to="/menu"
            className="hover:text-green-700 transition"
          >
            Menu
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-green-700 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/about"
            className="hover:text-green-700 transition"
          >
            About
          </Link>

        </div>

      </div>
    </nav>
  );
}