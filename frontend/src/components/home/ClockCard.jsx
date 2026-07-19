import { useEffect, useState } from "react";

export default function ClockCard() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );

      setDate(
        now.toLocaleDateString("en-IN", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-xl">
      <p className="text-xs uppercase tracking-[0.3em] text-green-400">
        LIVE TIME
      </p>

      <h2 className="mt-4 text-4xl font-bold text-white">
        {time}
      </h2>

      <p className="mt-2 text-slate-400">
        {date}
      </p>

      <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">
        <span className="h-2 w-2 rounded-full bg-green-400"></span>
        Indian Standard Time
      </div>
    </div>
  );
}