import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Microscope,
  Presentation,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";
import Container from "@/components/Container";
import { publications } from "@/data/publications";
import { site } from "@/data/site";
import { BASE_PATH } from "@/lib/basePath";

const researchThemes = [
  "6G and Beyond Wireless Networks",
  "RIS-Assisted Localization",
  "Integrated Sensing and Communication",
  "Machine Learning for Wireless Networks",
  "mmWave Channel Modeling",
  "Mobile Edge Computing",
  "Radio Resource Management",
  "Simulation-to-Reality Validation",
];

const serviceHighlights = [
  {
    title: "Reviewer Activities",
    desc: "IEEE TCOM, IEEE TWC, Journal of Networks and Computer Applications, Journal of Computer Communications, and COMS2.",
  },
  {
    title: "Academic Service",
    desc: "PSAC/BAETE accreditation, ETE syllabus editing, ICECTE publication committee, and course advising.",
  },
  {
    title: "Teaching & Supervision",
    desc: "Communication-focused courses, thesis supervision, project mentoring, and lab/sessionals at RUET.",
  },
];

const quickLinks = [
  { href: "/research", label: "Research", icon: Microscope },
  { href: "/publications", label: "Publications", icon: BookOpen },
  { href: "/teaching", label: "Teaching", icon: Presentation },
  { href: "/academic-profile", label: "Extended Profile", icon: BriefcaseBusiness },
];

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/55">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-white">{value}</div>
    </div>
  );
}

function HighlightedName({ text }: { text: string }) {
  return text.split(/(M\. T\. Hassan|Md Tarek Hassan|T\. Hassan)/g).map((part, idx) =>
    part === "M. T. Hassan" || part === "Md Tarek Hassan" || part === "T. Hassan" ? (
      <strong key={`${part}-${idx}`} className="font-semibold text-white">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function HomePage() {
  const published = publications.filter((p) => p.status === "Published");
  const accepted = publications.filter((p) => p.status === "Accepted");
  const submitted = publications.filter((p) => p.status === "Submitted" || p.status === "Under Review");
  const recentPublications = publications
    .slice()
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
    .slice(0, 3);

  return (
    <Container className="pt-10">
      <section className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
            PhD Researcher at Queen&apos;s University Belfast
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-3 text-base text-white/70 sm:text-lg">
            Lecturer, ETE, RUET (On Leave) • 6G Wireless • RIS • ISAC • Machine Learning
          </p>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80">
            Md Tarek Hassan is pursuing his PhD in Electrical and Electronic Engineering at Queen&apos;s
            University Belfast. His research focuses on intelligent AI electromagnetic environments for
            communication and sensing within 6G, with emphasis on RIS-assisted localization, mmWave
            networks, ISAC, and learning-driven wireless system design.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/academic-profile"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90 transition"
            >
              <BriefcaseBusiness size={16} />
              View Academic Profile
            </Link>
            <a
              href={`${BASE_PATH}/cv.pdf`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
            >
              <Mail size={16} />
              Contact
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {researchThemes.map((theme) => (
              <span
                key={theme}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>

        <Card className="h-fit">
          <div className="flex items-center gap-4">
            <Image
              src={`${BASE_PATH}/profile.jpg`}
              alt={site.name}
              width={128}
              height={128}
              className="h-32 w-32 rounded-3xl border border-white/15 object-cover"
              priority
            />
            <div>
              <div className="text-sm font-semibold text-white">{site.name}</div>
              <div className="mt-1 text-xs text-white/60">{site.location}</div>
              <a className="mt-2 block text-xs text-white/75 underline decoration-white/20" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2">
            <StatCard label="Published" value={published.length} />
            <StatCard label="Accepted" value={accepted.length} />
            <StatCard label="Submitted" value={submitted.length} />
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs text-white/55">Current Focus</div>
            <div className="mt-1 text-sm font-semibold text-white">RIS and ISAC for 6G Networks</div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={site.links.scholar}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75 hover:bg-white/10 hover:text-white transition"
            >
              <GraduationCap size={15} />
              Scholar
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75 hover:bg-white/10 hover:text-white transition"
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75 hover:bg-white/10 hover:text-white transition"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
          </div>
        </Card>
      </section>

      <section className="mt-10 grid gap-3 md:grid-cols-4">
        {quickLinks.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <Icon size={18} className="text-cyan-200" />
            <div className="mt-3 font-semibold">{label}</div>
          </Link>
        ))}
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-200/80">
              <Microscope size={16} />
              Research
            </div>
            <h2 className="mt-2 text-xl font-semibold">Research Highlights</h2>
          </div>
          <Link href="/research" className="text-sm text-white/70 hover:text-white underline decoration-white/20">
            Full details
          </Link>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "RIS-Assisted Localization",
              desc: "Learning-based beam sweeping, near-field localization, and beam-domain fingerprinting.",
            },
            {
              title: "6G and ISAC",
              desc: "Intelligent electromagnetic environments for communication and sensing.",
            },
            {
              title: "Simulation and Measurement",
              desc: "Wireless system evaluation through simulation, channel modeling, and experimental validation.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <div className="text-sm font-semibold">{item.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-200/80">
              <BookOpen size={16} />
              Publications
            </div>
            <h2 className="mt-2 text-xl font-semibold">Recent Publication Record</h2>
          </div>
          <Link href="/publications" className="text-sm text-white/70 hover:text-white underline decoration-white/20">
            View all
          </Link>
        </div>

        <div className="mt-5 space-y-4">
          {recentPublications.map((publication, idx) => (
            <Card key={`${publication.titleLine}-${idx}`} className="p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  {publication.type}
                </span>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                  {publication.status}
                </span>
                {publication.year ? <span className="text-xs text-white/50">{publication.year}</span> : null}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/78">
                <HighlightedName text={publication.titleLine} />
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-200/80">
              <ShieldCheck size={16} />
              Service
            </div>
            <h2 className="mt-2 text-xl font-semibold">Professional Service</h2>
          </div>
          <Link href="/others" className="text-sm text-white/70 hover:text-white underline decoration-white/20">
            More details
          </Link>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {serviceHighlights.map((item) => (
            <Card key={item.title}>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Award size={16} className="text-cyan-200" />
                {item.title}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold">Quick Contact</div>
            <div className="mt-1 text-sm text-white/70">
              Email:{" "}
              <a className="underline decoration-white/30 hover:decoration-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={site.links.pure}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75 hover:bg-white/10 hover:text-white transition"
            >
              <ExternalLink size={15} />
              QUB Pure
            </a>
            <a
              href={site.links.ruet}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75 hover:bg-white/10 hover:text-white transition"
            >
              <ExternalLink size={15} />
              RUET Profile
            </a>
          </div>
        </Card>
      </section>
    </Container>
  );
}
