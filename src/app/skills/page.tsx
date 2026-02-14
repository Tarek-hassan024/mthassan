import Container from "@/components/Container";
import Card from "@/components/Card";
import { certifications, skillsSections } from "@/data/skillsPage";

export default function SkillsPage() {
  return (
    <Container className="pt-10">
      <h1 className="text-2xl font-semibold">Skills</h1>
      <p className="mt-2 text-sm text-white/70">
        A structured overview of tools, platforms, and certifications.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {skillsSections.map((sec) => (
          <Card key={sec.title}>
            <div className="text-sm font-semibold">{sec.title}</div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              {sec.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <h2 className="mt-10 text-xl font-semibold">Certifications & Courses</h2>
      <div className="mt-4 space-y-4">
        {certifications.map((c) => (
          <Card key={c.title}>
            <div className="text-sm font-semibold">{c.title}</div>
            {c.note ? <div className="mt-2 text-sm text-white/70">{c.note}</div> : null}
            <a
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75 hover:bg-white/10 hover:text-white transition"
            >
              Open link →
            </a>
          </Card>
        ))}
      </div>
    </Container>
  );
}
