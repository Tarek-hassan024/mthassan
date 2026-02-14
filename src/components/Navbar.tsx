"use client";

import { BASE_PATH } from "@/lib/basePath";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/education", label: "Education" },
  { href: "/research", label: "Research" },
  { href: "/skills", label: "Skills" },
  { href: "/teaching", label: "Teaching" },
  { href: "/publications", label: "Publications" },
  { href: "/others", label: "Others" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Route change হলে menu auto-close
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // ESC চাপলে menu close
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur relative">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
          <span className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white">
            Tarek Hassan
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden gap-1 md:flex">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "relative rounded-full px-3 py-2 text-sm transition",
                  active ? "text-white font-semibold" : "text-white/70 hover:text-white",
                ].join(" ")}
              >
                {item.label}
                <span
                  className={[
                    "absolute inset-x-3 -bottom-[10px] h-[2px] rounded-full transition",
                    active
                      ? "bg-gradient-to-r from-fuchsia-400 to-cyan-300 opacity-100"
                      : "opacity-0",
                  ].join(" ")}
                />
              </Link>
            );
          })}

          <a
            // href="/cv.pdf"
            href={`${BASE_PATH}/cv.pdf`}
            className="ml-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90 transition"
            >
            CV
        </a>

        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
          Menu
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {open ? (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-white/10 bg-slate-950/90 backdrop-blur"
        >
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            <div className="grid gap-1">
              {NAV.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "rounded-2xl px-4 py-3 text-sm transition border",
                      active
                        ? "border-white/15 bg-white/10 text-white font-semibold"
                        : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <a
                href="/cv.pdf"
                className="mt-2 rounded-2xl bg-gradient-to-r from-fuchsia-400 to-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 hover:opacity-90 transition"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
