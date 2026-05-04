"use client";

import { useEffect, useState } from "react";

export default function CalendarWidget() {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setDate(new Date()));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!date) return <div className="h-24 w-32 animate-pulse rounded-xl bg-white/5" />;

  const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
  const day = date.getDate();
  const weekday = date.toLocaleString('default', { weekday: 'long' });

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-xl w-32">
      <div className="w-full bg-cyan-500 py-1 text-center text-xs font-bold uppercase tracking-widest text-slate-950">
        {month}
      </div>
      <div className="flex w-full flex-col items-center bg-white/5 py-3">
        <span className="text-4xl font-black text-white">{day}</span>
        <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-white/50">{weekday}</span>
      </div>
    </div>
  );
}
