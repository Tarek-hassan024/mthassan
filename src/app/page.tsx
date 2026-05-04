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
import AnimatedCounter from "@/components/AnimatedCounter";
import CalendarWidget from "@/components/CalendarWidget";
import { cv } from "@/data/cv";
import { education } from "@/data/education";
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

const collaborationAreas = [
  "RIS-assisted localization",
  "Beam sweeping and beam-domain fingerprinting",
  "Near-field mmWave measurements",
  "Simulation-to-reality validation",
  "Learning-driven radio resource management",
  "ISAC-aware intelligent environments",
];

const serviceHighlights = [
  {
    title: "Reviewer Activities",
    items: [
      "IEEE Transactions on Communication",
      "IEEE Transactions on Wireless Communication",
      "IEEE Vehicular Technology Conference",
      "Journal of Networks and Computer Applications",
      "Journal of Computer Communications",
      "Springer International Conference on Computing Science, Communication and Security (COMS2)"
    ],
  },
  {
    title: "Academic Service",
    items: [
      "Member of PSAC/BAETE accreditation Committee for ETE, RUET",
      "Editor of ETE Syllabus",
      "Editor ICECTE publication committee",
      "Course advisor of ETE Students"
    ],
  },
  {
    title: "Teaching & Supervision",
    items: [
      "Communication-focused courses",
      "Thesis supervision",
      "Project mentoring",
      "Lab/sessionals at RUET"
    ],
  },
];

const academicHighlights = [
  <span key="1">PhD Researcher at Queen&apos;s University Belfast</span>,
  <span key="2">Lecturer - Dept. of Electronics and Telecommunication Engineering at Rajshahi University of Engineering and Technology (RUET)</span>,
  <span key="3">Secured First Class <strong className="font-bold text-white">1st Position</strong> (Honors/Distinction) at Bachelors and Masters in ETE at RUET</span>,
  <span key="4">Student of the Year 2018 awarded by ETE Association for outstanding BSc academic performance</span>,
];

const grantsAndScholarships = [
  {
    title: "Travel Grants",
    items: [
      "Telco Renata Travel Grant 2024 (CTTC, Barcelona, Spain)",
      "International Conference on Computer and Information Technology (ICCIT) 2024, 2023, 2022",
      "2024 IEEE International Conference on Communication, Computing and Signal Processing (IICCCS), Asansol, India",
      "International Conference on Electrical, Information and Communication Technology (EICT) 2023 at KUET, Khulna",
    ],
  },
  {
    title: "Scholarships",
    items: [
      "Fully Funded PhD Scholarship at Queen's University Belfast [2025-2028]",
      "University Scholarship (UG) for Top results [2017-2020]",
      "SSC Board Scholarship [2013-2015]",
      "JSC Board Scholarship [2010-2013]",
      "PSC Board Scholarship [2008-2010]",
    ],
  },
];

const teachingHighlights = [
  "Digital Communication (Theory & Sessional)",
  "Wireless & Mobile Communication (Theory & Sessional)",
  "Telecommunication Engineering (Theory & Sessional)",
  "Industrial & Power Electronics (Theory & Sessional)",
  "Random Signal Processing (Theory)",
  "Graph Theory (Theory)",
  "Communication Theory (Sessional)",
  "Microwave Engineering (Sessional)",
];

const quickLinks = [
  { href: "/research", label: "Research", icon: Microscope },
  { href: "/publications", label: "Publications", icon: BookOpen },
  { href: "/teaching", label: "Teaching", icon: Presentation },
  { href: "/academic-profile", label: "Extended Profile", icon: BriefcaseBusiness },
];

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      <div className="text-[10px] uppercase tracking-wider text-white/55">{label}</div>
      <div className="text-xl font-semibold text-white">
        {typeof value === "number" ? <AnimatedCounter end={value} /> : value}
      </div>
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

  const teachingStartDate = new Date(2021, 11, 1); // Dec 2021
  const today = new Date();
  let teachingYears = today.getFullYear() - teachingStartDate.getFullYear();
  let teachingMonths = today.getMonth() - teachingStartDate.getMonth();
  if (teachingMonths < 0) {
    teachingYears--;
    teachingMonths += 12;
  }
  const recentPublications = publications
    .slice()
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
    .slice(0, 4);

  return (
    <Container className="pt-10">
      <section className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
            PhD Researcher at Queen&apos;s University Belfast
          </div>

          <h1 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            {site.name}
          </h1>
          <p className="mt-3 text-base text-white/70 sm:text-lg">
            Lecturer, ETE, RUET (On Leave) • 6G Wireless • RIS • ISAC • Machine Learning
          </p>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80">
            Md Tarek Hassan is a Doctoral Researcher pursuing a <strong className="font-semibold text-white">PhD</strong> in Electrical and Electronic Engineering at Queen&apos;s University Belfast. Previously, he served as a <strong className="font-semibold text-white">Lecturer</strong> in the Department of Electronics and Telecommunication Engineering (<strong className="font-semibold text-white">ETE</strong>) at Rajshahi University of Engineering and Technology (<strong className="font-semibold text-white">RUET</strong>). He holds both <strong className="font-semibold text-white">B.Sc.</strong> and <strong className="font-semibold text-white">M.Sc.</strong> degrees with First Class Honors (<strong className="font-semibold text-white">1st Position/Distinction</strong>) from <strong className="font-semibold text-white">RUET</strong>. His research focuses on intelligent AI electromagnetic environments for communication and sensing within 6G, with an emphasis on RIS-assisted localization, mmWave networks, ISAC, and learning-driven wireless system design.
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

          <div className="mt-6 grid grid-cols-2 gap-3">
            {/* Column 1: Publications */}
            <div className="flex flex-col gap-1.5">
              <div className="text-[10px] font-semibold text-white/55 uppercase tracking-wider">Publications Summary</div>
              <StatCard label="Published" value={published.length} />
              <StatCard label="Accepted" value={accepted.length} />
              <StatCard label="Submitted" value={submitted.length} />
            </div>

            {/* Column 2: Teaching Experience */}
            <div className="flex flex-col gap-1.5">
              <div className="text-[10px] font-semibold text-white/55 uppercase tracking-wider">Teaching Experience</div>
              <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                <div className="flex items-baseline gap-1 text-2xl font-semibold text-white">
                  <AnimatedCounter end={teachingYears} />
                  <span className="text-[10px] font-normal text-white/55 uppercase tracking-wider">Years</span>
                </div>
                <div className="flex items-baseline gap-1 text-2xl font-semibold text-white">
                  <AnimatedCounter end={teachingMonths} />
                  <span className="text-[10px] font-normal text-white/55 uppercase tracking-wider">Months</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 text-xs text-white/55">Academic Status</div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="whitespace-nowrap text-sm font-semibold text-white">PhD Researcher</div>
                <div className="text-xs text-white/70">Queen&apos;s University Belfast</div>
              </div>
              <div className="border-l border-white/10 pl-4">
                <div className="whitespace-nowrap text-sm font-semibold text-white">Lecturer (On Leave)</div>
                <div className="text-xs text-white/70">at RUET</div>
              </div>
            </div>
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
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-200/80">
          <Award size={16} />
          Highlights
        </div>
        <h2 className="mt-2 text-xl font-semibold">Academic Highlights</h2>

        <Card className="mt-5 p-6">
          <ul className="space-y-3 text-sm leading-relaxed text-white/78">
            {academicHighlights.map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-200/80">
              <BriefcaseBusiness size={16} />
              Experience
            </div>
            <h2 className="mt-2 text-xl font-semibold">Professional Experience</h2>
          </div>
          <Link href="/academic-profile" className="text-sm text-white/70 hover:text-white underline decoration-white/20">
            Extended profile
          </Link>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {cv.work_experience.map((item) => (
            <Card key={`${item.role}-${item.org}`} className="p-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">{item.role}</div>
                  <div className="mt-1 text-sm text-white/65">{item.org}</div>
                  <div className="mt-1 text-xs text-white/45">{item.location}</div>
                </div>
                <div className="text-xs text-white/55 sm:text-right">{item.period}</div>
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/72">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/50" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-200/80">
              <BriefcaseBusiness size={16} />
              Profile
            </div>
            <h2 className="mt-2 text-xl font-semibold">Academic Journey</h2>
          </div>
          <Link href="/education" className="text-sm text-white/70 hover:text-white underline decoration-white/20">
            Education
          </Link>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {education.map((item) => (
            <Card key={item.degree} className="p-5">
              <div className="text-xs text-white/55">{item.dates}</div>
              <div className="mt-2 text-sm font-semibold text-white">{item.degree}</div>
              <div className="mt-1 text-xs leading-relaxed text-white/60">{item.school}</div>
              {item.cgpa ? <div className="mt-3 text-xs text-white/75">CGPA: {item.cgpa}</div> : null}
              {item.specialization ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.specialization.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-200/80">
              <Microscope size={16} />
              Research
            </div>
            <h2 className="mt-2 text-xl font-semibold">Research Identity</h2>
          </div>
          <Link href="/research" className="text-sm text-white/70 hover:text-white underline decoration-white/20">
            Full details
          </Link>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-white">Core Themes</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {researchThemes.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                  {item}
                </span>
              ))}
            </div>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white">Collaboration Focus</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {collaborationAreas.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                  {item}
                </span>
              ))}
            </div>
          </Card>
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
              <Presentation size={16} />
              Teaching
            </div>
            <h2 className="mt-2 text-xl font-semibold">Teaching & Supervision</h2>
          </div>
          <Link href="/teaching" className="text-sm text-white/70 hover:text-white underline decoration-white/20">
            Teaching record
          </Link>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_1fr]">
          <Card>
            <div className="text-sm font-semibold text-white">Communication-Focused Teaching</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {teachingHighlights.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                  {item}
                </span>
              ))}
            </div>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white">Supervision Themes</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "RIS-integrated MIMO",
                "mmWave channel modeling",
                "Fog computing traffic management",
                "NS-3 MANET analysis",
                "IoT systems",
              ].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                  {item}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-200/80">
          <Award size={16} />
          Awards & Recognition
        </div>
        <h2 className="mt-2 text-xl font-semibold">Grants and Scholarships</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {grantsAndScholarships.map((item) => (
            <Card key={item.title}>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Award size={16} className="text-cyan-200" />
                {item.title}
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/70">
                {item.items.map((bullet, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/50" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
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
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/70">
                {item.items.map((bullet, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/50" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Map, Counter, and Calendar */}
      <section className="mt-12">
        <div className="grid gap-6 md:grid-cols-4">
          {/* Visitor Counter */}
          <Card className="col-span-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="text-sm font-semibold text-white/70 mb-4">Total Profile Views</div>
            <img 
              src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Ftarek-hassan024.github.io%2Fmthassan&count_bg=%230EA5E9&title_bg=%230F172A&icon=&icon_color=%23E7E7E7&title=VISITORS&edge_flat=true" 
              alt="Visitor Counter" 
              className="rounded-md"
            />
          </Card>

          {/* Normal Calendar */}
          <Card className="col-span-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="text-sm font-semibold text-white/70 mb-4">Today</div>
            <CalendarWidget />
          </Card>

          {/* Location Map (Big Card) */}
          <Card className="col-span-1 md:col-span-2 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
            <div className="text-sm font-semibold text-white/70 mb-4">Current Location</div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2311.666986566835!2d-5.937243983993471!3d54.58359489436159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486108ea49c55555%3A0xe9f7956b9c9225!2sQueen&#39;s%20University%20Belfast!5e0!3m2!1sen!2suk!4v1714580000000!5m2!1sen!2suk" 
              width="100%" 
              height="200" 
              style={{ border: 0, borderRadius: '8px' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Card>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="mt-12 mb-8">
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
