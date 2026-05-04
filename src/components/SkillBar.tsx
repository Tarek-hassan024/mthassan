"use client";

import { useEffect, useState } from "react";

export default function SkillBar({ name, level }: { name: string; level: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Slight delay to ensure transition triggers after initial render
    const timer = setTimeout(() => setWidth(level), 100);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between text-xs font-medium text-white/80">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
