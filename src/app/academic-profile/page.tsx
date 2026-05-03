import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  Microscope,
  Network,
  Presentation,
  ScrollText,
  ShieldCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ElementType } from "react";
import Card from "@/components/Card";
import Container from "@/components/Container";
import { cv } from "@/data/cv";
import { education } from "@/data/education";
import { publications } from "@/data/publications";
import { site } from "@/data/site";
import { BASE_PATH } from "@/lib/basePath";

const researchThemes = [
  "6G wireless networks",
  "Reconfigurable intelligent surfaces",
  "Integrated sensing and communication",
  "Machine learning for wireless systems",
  "mmWave channel modeling",
  "Mobile edge computing",
];

const collaborationAreas = [
  "RIS-assisted localization",
  "Beam sweeping and beam-domain fingerprinting",
  "Near-field mmWave measurements",
  "Simulation-to-reality validation",
  "Learning-driven radio resource management",
  "ISAC-aware intelligent environments",
];

const academicHighlights = [
  "Lecturer in the Department of Electronics and Telecommunication Engineering (ETE), RUET, since 12 Dec. 2021",
  "On leave from RUET while pursuing PhD research at Queen's University Belfast",
  "Secured First Class 1st position in both MSc and BSc Engineering in ETE at RUET",
  "Recipient of the ETE Association Student of the Year Award for outstanding BSc academic performance",
];

const taughtCourses = [
  "ETE 3111: Random Signal Processing",
  "ETE 3215: Digital Communication",
  "ETE 4115: Wireless and Mobile Communication",
  "ETE 4139: Graph Theory",
  "ETE 4215: Telecommunication Engineering",
  "EEE 2253 / ETE 2211: Industrial Electronics / Power Electronics",
];

const labTeaching = [
  "ETE 2214: Sessional Based on Communication Theory",
  "ETE 3114: Sessional Based on Microwave Engineering",
  "ETE 3216: Sessional Based on Digital Communication",
  "ETE 4116: Sessional Based on Wireless and Mobile Communication",
  "ETE 4216: Sessional Based on Telecommunication Engineering",
  "EEE 2254 / ETE 2212: Sessional Based on Industrial Electronics / Power Electronics",
];

const academicService = [
  "Member, Program Self-Assessment Committee (PSAC), BAETE Accreditation",
  "Editor, Undergraduate and Postgraduate Syllabus of ETE, 2020 Version",
  "Editor, Publication Committee, 4th International Conference on Electrical, Computer and Telecommunication Engineering (ICECTE), 2022",
  "Course Advisor, 2018-19 session students",
  "Official Member and Fellow of Information System Engineering",
];

const reviewerActivities = [
  "IEEE Transactions on Communications (IEEE TCOM)",
  "IEEE Transactions on Wireless Communications (IEEE TWC)",
  "Journal of Networks and Computer Applications",
  "Journal of Computer Communications",
  "Springer International Conference on Computing Science, Communication and Security (COMS2)",
];

const supervisedWorks = [
  "End-to-End learning for active and passive RIS-integrated MIMO wireless communication networks",
  "Statistical millimeter-wave channel modeling for spatial consistency and O2I penetration loss",
  "IoT-based weather station with real-time online monitoring",
  "IoT-based smart health monitoring and management system",
  "Arduino and GSM based electronic notice board and online class routine",
];

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

function SectionHeading({
  icon: Icon,
  title,
  kicker,
}: {
  icon: ElementType;
  title: string;
  kicker?: string;
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-200/80">
          <Icon size={16} />
          {kicker}
        </div>
        <h2 className="mt-2 text-xl font-semibold text-white">{title}</h2>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/55">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-white">{value}</div>
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function AcademicProfilePage() {
  const published = publications.filter((p) => p.status === "Published");
  const accepted = publications.filter((p) => p.status === "Accepted");
  const submitted = publications.filter((p) => p.status === "Submitted" || p.status === "Under Review");
  const recentPublications = publications
    .slice()
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
    .slice(0, 5);

  return (
    <Container className="pt-10">
      <section className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
            Extended Academic Profile
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {site.name}
          </h1>
          <p className="mt-2 text-base text-white/70">{site.role}</p>
          <p className="mt-1 text-sm text-white/55">{site.location}</p>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80">
            PhD researcher at Queen&apos;s University Belfast working on intelligent AI electromagnetic
            environments for communication and sensing within 6G. His research connects RIS-assisted
            localization, mmWave systems, ISAC, machine learning, and simulation-backed wireless network
            design, with prior academic service as a Lecturer in ETE at RUET.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`${BASE_PATH}/cv.pdf`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90 transition"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
            >
              <Mail size={16} />
              Email
            </a>
            <a
              href={site.links.scholar}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
            >
              <ExternalLink size={16} />
              Google Scholar
            </a>
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
            >
              <ScrollText size={16} />
              Publications
            </Link>
          </div>
        </div>

        <Card className="h-fit">
          <div className="flex items-center gap-4">
            <Image
              src={`${BASE_PATH}/profile.jpg`}
              alt={site.name}
              width={112}
              height={112}
              className="h-28 w-28 rounded-2xl border border-white/15 object-cover"
            />
            <div>
              <div className="text-sm font-semibold text-white">{site.name}</div>
              <div className="mt-1 text-xs text-white/60">QUB PhD Researcher</div>
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
            <div className="text-xs text-white/55">RUET Status</div>
            <div className="mt-1 text-sm font-semibold text-white">Lecturer, On Leave</div>
          </div>
        </Card>
      </section>

      <section className="mt-10">
        <SectionHeading icon={Award} kicker="Highlights" title="Academic Highlights" />
        <div className="grid gap-4 md:grid-cols-2">
          {academicHighlights.map((item) => (
            <Card key={item}>
              <p className="text-sm leading-relaxed text-white/78">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeading icon={Microscope} kicker="Research" title="Research Identity" />
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-white">Core Themes</div>
            <Tags items={researchThemes} />
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white">Collaboration Focus</div>
            <Tags items={collaborationAreas} />
          </Card>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeading icon={Presentation} kicker="Teaching" title="Teaching Portfolio" />
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-white">Theory Courses</div>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/72">
              {taughtCourses.map((course) => (
                <li key={course} className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white">Sessional and Laboratory Courses</div>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/72">
              {labTeaching.map((course) => (
                <li key={course} className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeading icon={BriefcaseBusiness} kicker="Experience" title="Academic and Professional Experience" />
        <div className="space-y-4">
          {cv.work_experience.map((item) => (
            <Card key={`${item.role}-${item.org}`}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-lg font-semibold text-white">{item.role}</div>
                  <div className="mt-1 text-sm text-white/65">{item.org}</div>
                  <div className="mt-1 text-xs text-white/45">{item.location}</div>
                </div>
                <div className="text-sm text-white/60 sm:text-right">{item.period}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/72">
                {item.bullets.slice(0, 3).map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeading icon={GraduationCap} kicker="Education" title="Educational Qualifications" />
        <div className="grid gap-4">
          {education.map((item) => (
            <Card key={item.degree}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-lg font-semibold text-white">{item.degree}</div>
                  <div className="mt-1 text-sm text-white/65">{item.school}</div>
                  <div className="mt-1 text-xs text-white/45">{item.location}</div>
                </div>
                <div className="text-sm text-white/60 sm:text-right">{item.dates}</div>
              </div>
              {item.cgpa ? <div className="mt-4 text-sm text-white/80">CGPA: {item.cgpa}</div> : null}
              {item.researchTitle ? (
                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.researchTitle}</p>
              ) : null}
              {item.specialization ? <Tags items={item.specialization} /> : null}
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeading icon={ShieldCheck} kicker="Service" title="Academic Service and Reviewing" />
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-white">Administrative and Departmental Service</div>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/72">
              {academicService.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white">Reviewer Activities</div>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/72">
              {reviewerActivities.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeading icon={Network} kicker="Projects" title="Projects and Research Works" />
        <div className="grid gap-4 md:grid-cols-2">
          {cv.projects.map((project) => (
            <Card key={project.title}>
              <div className="text-sm text-white/55">{project.period}</div>
              <div className="mt-1 text-lg font-semibold text-white">{project.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-white/72">{project.bullets[0]}</p>
              <Tags items={project.tech.slice(0, 5)} />
            </Card>
          ))}
        </div>
        <Card className="mt-4">
          <div className="text-sm font-semibold text-white">Student Projects and Supervision Themes</div>
          <Tags items={supervisedWorks} />
        </Card>
      </section>

      <section className="mt-10">
        <SectionHeading icon={BookOpen} kicker="Publications" title="Recent Publication Record" />
        <div className="space-y-4">
          {recentPublications.map((publication, idx) => (
            <Card key={`${publication.titleLine}-${idx}`}>
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

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <div>
          <SectionHeading icon={Award} kicker="Recognition" title="Awards and Leadership" />
          <div className="space-y-4">
            {cv.awards.slice(0, 3).map((award) => (
              <Card key={award.title}>
                <div className="text-sm text-white/55">{award.period}</div>
                <div className="mt-1 text-lg font-semibold text-white">{award.title}</div>
                <div className="mt-1 text-sm text-white/65">{award.org}</div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading icon={Users} kicker="References" title="Academic References" />
          <div className="space-y-4">
            {cv.references.slice(0, 3).map((reference) => (
              <Card key={reference.email}>
                <div className="text-lg font-semibold text-white">{reference.name}</div>
                <div className="mt-1 text-sm leading-relaxed text-white/65">{reference.title}</div>
                <div className="mt-2 text-xs text-white/50">{reference.relation}</div>
                <a className="mt-3 block text-sm text-white/75 underline decoration-white/20" href={`mailto:${reference.email}`}>
                  {reference.email}
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
