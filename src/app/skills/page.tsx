import Container from "@/components/Container";
import Card from "@/components/Card";
import { certifications, skillsSections } from "@/data/skillsPage";
import { ExternalLink } from "lucide-react";

export default function SkillsPage() {
  return (
    <Container className="pt-10">
      <h1 className="text-2xl font-semibold">Skills</h1>
      <p className="mt-2 text-sm text-white/70">
        A structured overview of tools, platforms, and certifications.
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {skillsSections.map((sec) => (
          <Card key={sec.title} className="p-4">
            <div className="text-sm font-semibold">{sec.title}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {sec.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/75"
                >
                  {it}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <h2 className="mt-10 text-xl font-semibold">Certifications & Courses</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((c) => (
          <Card key={c.title} className="p-4">
            <div className="text-sm font-semibold">{c.title}</div>
            {c.note ? <div className="mt-2 text-xs leading-relaxed text-white/65">{c.note}</div> : null}
            <a
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-white/75 hover:bg-white/10 hover:text-white transition"
            >
              <ExternalLink size={13} />
              Open
            </a>
          </Card>
        ))}
      </div>
    </Container>
  );
}
