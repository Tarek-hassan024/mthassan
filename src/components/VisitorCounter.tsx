"use client";

import { useEffect, useMemo, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";

const COUNTER_URL = "https://tarek-hassan024.github.io/mthassan";

function parseCounterTotal(svg: string) {
  const label = svg.match(/(?:aria-label|<title>)=["']?VISITORS:\s*([^"'<]+)/i)?.[1];
  if (!label) return null;

  const numbers = label.match(/\d+/g);
  if (!numbers?.length) return null;

  return Number(numbers[numbers.length - 1]);
}

export default function VisitorCounter() {
  const [total, setTotal] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);

  const counterSrc = useMemo(() => {
    const params = new URLSearchParams({
      url: COUNTER_URL,
      label: "VISITORS",
      icon: "eye-fill",
      color: "#0ea5e9",
    });

    return `https://hitscounter.dev/api/hit?${params.toString()}`;
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadCounter() {
      try {
        const response = await fetch(counterSrc, { cache: "no-store" });
        if (!response.ok) throw new Error("Counter request failed");

        const svg = await response.text();
        const parsedTotal = parseCounterTotal(svg);
        if (parsedTotal == null) throw new Error("Counter value not found");

        if (!cancelled) setTotal(parsedTotal);
      } catch {
        if (!cancelled) setFailed(true);
      }
    }

    loadCounter();

    return () => {
      cancelled = true;
    };
  }, [counterSrc]);

  if (failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={counterSrc} alt="Homepage visitor counter" className="rounded-md" />
    );
  }

  return (
    <div className="flex min-h-16 flex-col items-center justify-center">
      <div className="text-4xl font-semibold text-white">
        {total == null ? <span className="text-white/35">0</span> : <AnimatedCounter end={total} duration={1400} />}
      </div>
      <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/45">Total visits</div>
    </div>
  );
}
