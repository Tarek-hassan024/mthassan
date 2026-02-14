import Container from "@/components/Container";
import Card from "@/components/Card";
import { education } from "@/data/education";

export default function EducationPage() {
  return (
    <Container className="pt-10">
      <h1 className="text-2xl font-semibold">Education</h1>
      <p className="mt-2 text-sm text-white/70">
        Academic background with research focus and CGPA highlights.
      </p>

      <div className="mt-6 space-y-5">
        {education.map((e) => (
          <Card key={e.degree}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-sm text-white/60">{e.school}</div>
                <div className="mt-1 text-lg font-semibold">{e.degree}</div>
                <div className="mt-1 text-sm text-white/70">{e.location}</div>
              </div>
              <div className="text-sm text-white/70 sm:text-right">{e.dates}</div>
            </div>

            {e.cgpa && (
              <div className="mt-4 text-sm text-white/80">
                <span className="font-semibold">CGPA:</span>{" "}
                <span className="font-semibold text-white">{e.cgpa}</span>
              </div>
            )}

            {e.researchTitle && (
              <div className="mt-4">
                <div className="text-sm font-semibold">Research Title</div>
                <div className="mt-1 text-sm text-white/75 leading-relaxed">{e.researchTitle}</div>
              </div>
            )}

            {e.specialization?.length ? (
              <div className="mt-4">
                <div className="text-sm font-semibold">Skills / Specialization</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {e.specialization.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </Card>
        ))}
      </div>
    </Container>
  );
}
