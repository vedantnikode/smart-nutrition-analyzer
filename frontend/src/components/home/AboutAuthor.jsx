import {
  GraduationCap,
  Mail,
  Camera,
  MapPin,
  Code2,
  User,
} from "lucide-react";

export default function AboutAuthor() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
            👨‍💻 About the Developer
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Meet the
            <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Creator
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Passionate about software development, artificial intelligence, and
            building practical solutions that make technology useful for
            everyone.
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">

          <div className="grid items-center gap-10 lg:grid-cols-[220px_1fr]">

            {/* Avatar */}
            <div className="flex flex-col items-center">

              <div className="flex h-44 w-44 items-center justify-center rounded-full border-4 border-green-500/20 bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                <User size={80} className="text-green-400" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Vedant Nikode
              </h3>

              <p className="mt-2 text-green-400">
                Bioengineering Undergraduate
              </p>

            </div>

            {/* Details */}
            <div>

              <p className="text-lg leading-8 text-slate-300">
                I'm a Bioengineering undergraduate at IIT Mandi with a strong
                interest in software engineering, machine learning, and
                artificial intelligence. This Smart Nutrition Analyzer was built
                to help users understand their meals using trusted nutritional
                databases and make healthier food choices.
              </p>

              {/* Info Cards */}
              <div className="mt-10 grid gap-4 md:grid-cols-2">

                <InfoCard
                  icon={<GraduationCap className="text-green-400" />}
                  title="Institution"
                  value="IIT Mandi"
                />

                <InfoCard
                  icon={<Code2 className="text-green-400" />}
                  title="Project"
                  value="Smart Nutrition Analyzer"
                />

                <InfoCard
                  icon={<MapPin className="text-green-400" />}
                  title="Team"
                  value="LONE WOLF"
                />

                <InfoCard
                  icon={<Mail className="text-green-400" />}
                  title="Email"
                  value="vedantnikode1@gmail.com"
                />

              </div>

              {/* Social Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">

                <SocialButton
                  icon={<Camera size={20} />}
                  text="Camera"
                  href="https://www.instagram.com/vedant._.2107/"
                />

                <SocialButton
                  icon={<Mail size={20} />}
                  text="Email"
                  href="mailto:vedantnikode1@gmail.com"
                />

              </div>

            </div>

          </div>

          {/* Footer */}
          <div className="mt-12 border-t border-white/10 pt-8 text-center">

            <p className="text-lg font-semibold text-white">
              ✨ Crafted with ❤️ by Vedant Nikode
            </p>

            <div className="mt-4 inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-400">
              ⚡ TEAM • LONE WOLF
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function InfoCard({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="rounded-xl bg-green-500/10 p-3">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-400">{title}</p>
        <p className="font-medium text-white">{value}</p>
      </div>
    </div>
  );
}

function SocialButton({ icon, text, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-slate-300 transition hover:border-green-500/30 hover:bg-green-500/10 hover:text-white"
    >
      {icon}
      {text}
    </a>
  );
}