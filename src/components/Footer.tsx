import Container from "./Container";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-white/90">{profile.name}</div>
            <div className="mt-1 text-xs text-white/60">
              {profile.location} •{" "}
              <a className="underline decoration-white/30 hover:decoration-white" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-xs">
            {Object.entries(profile.links).map(([k, v]) => (
              <a
                key={k}
                href={v}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/75 hover:text-white hover:bg-white/10 transition"
              >
                {k}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-xs text-white/40">
          © {new Date().getFullYear()} • Built with Next.js + Tailwind
        </div>
      </Container>
    </footer>
  );
}
