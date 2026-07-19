import { Link } from "react-router-dom";
import { ArrowRight, User } from "lucide-react";

export default function DeveloperCTA() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-emerald-500/5" />

          <div className="relative p-10 text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-sm font-medium text-green-400">
              <User className="h-4 w-4" />
              About the Developer
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Meet the{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Creator
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Passionate about software development, artificial intelligence,
              and building practical solutions that make technology useful for
              everyone.
            </p>

            {/* Button */}
            <Link
              to="/developer"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 px-7 py-4 font-semibold text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:scale-105 hover:shadow-green-500/40"
            >
              Meet the Developer
              <ArrowRight className="h-5 w-5" />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}