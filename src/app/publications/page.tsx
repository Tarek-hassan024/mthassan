import Container from "@/components/Container";
import Card from "@/components/Card";
import { doiUrl, publications } from "@/data/publications";

export default function PublicationsPage() {
  const accepted = publications.filter((p) => p.status === "Accepted");
  const published = publications.filter((p) => p.status === "Published");
  const underReview = publications.filter((p) => p.status === "Under Review");

  return (
    <Container className="pt-10">
      <h1 className="text-2xl font-semibold">Publications Record</h1>
      <p className="mt-2 text-sm text-white/70">
        Conferences, colloquium papers, and journal submissions (DOI links included where available).
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card>
          <div className="text-xs text-white/60">Accepted</div>
          <div className="mt-1 text-2xl font-semibold">{accepted.length}</div>
        </Card>
        <Card>
          <div className="text-xs text-white/60">Published</div>
          <div className="mt-1 text-2xl font-semibold">{published.length}</div>
        </Card>
        <Card>
          <div className="text-xs text-white/60">Under Review</div>
          <div className="mt-1 text-2xl font-semibold">{underReview.length}</div>
        </Card>
      </div>

      <div className="mt-8 space-y-4">
        {publications
          .slice()
          .sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
          .map((p, idx) => (
            <Card key={`${p.titleLine}-${idx}`}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                  {p.type}
                </span>
                <span
                  className={[
                    "rounded-full px-3 py-1 text-xs font-semibold",
                    p.status === "Published"
                      ? "bg-emerald-400/15 text-emerald-200 border border-emerald-300/20"
                      : p.status === "Accepted"
                      ? "bg-cyan-400/15 text-cyan-200 border border-cyan-300/20"
                      : "bg-amber-400/15 text-amber-200 border border-amber-300/20",
                  ].join(" ")}
                >
                  {p.status}
                </span>
                {p.year ? (
                  <span className="text-xs text-white/60">• {p.year}</span>
                ) : null}
              </div>

              <p className="mt-3 text-sm text-white/80 leading-relaxed">{p.titleLine}</p>

              {p.doi ? (
                <a
                  href={doiUrl(p.doi)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75 hover:bg-white/10 hover:text-white transition"
                >
                  DOI: {p.doi}
                </a>
              ) : null}
            </Card>
          ))}
      </div>
    </Container>
  );
}
