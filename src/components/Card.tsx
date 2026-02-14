import React from "react";

export default function Card({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={[
        "rounded-2xl border border-white/10",
        "bg-slate-900/55 p-6",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
