import { Github, Linkedin, GraduationCap, Globe } from "lucide-react";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Link from "next/link";
import { profile } from "@/data/profile";
import { BASE_PATH } from "@/lib/basePath";


const researchInterests = [
  "6G and Beyond Wireless Networks",
  "Mobile Edge Computing & Fog Computing (ML/DL)",
  "Radio Resource Management (NS-3)",
  "Machine Learning in Wireless Networks",
  "Reconfigurable Intelligent Surface (RIS) (ML/DL)",
  "Integrated Sensing & Communication (ISAC) (ML/DL)",
  "Millimeter Wave (mmWave) Communication",
  "Channel Modeling (NYUSIM, QuaDRiGa)",
  "MAC Scheduling (NS-3)",
  "5G/5G NR (ML)",
  "Massive MIMO Beamforming (DRL)",
];

const ongoing = [
  { title: "ML/DL Enabled 6G and Beyond", desc: "Learning-driven resource allocation, sensing-aware comms, and intelligent environments." },
  { title: "Reconfigurable Intelligent Surface (RIS)", desc: "RIS-assisted localization/beam sweeping and RIS-integrated MIMO learning." },
  { title: "Integrated Sensing and Communication (ISAC)", desc: "Joint sensing-communication design for next-gen networks." },
];

export default function HomePage() {
  return (
    <Container className="pt-10">
      {/* HERO */}
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
            {profile.headline}
          </div>
          {/* <h1 className="mt-5 text-2xl font-semibold tracking-tight leading-tight sm:text-4xl"> */}
          <h1 className="mt-5 text-2xl font-semibold tracking-tight sm:text-xl">
            “"Hope is a good thing, may be the best of things and no good thing ever dies".”
          </h1>
          <p className="mt-2 text-sm text-white/60">— The Shawshank Redemption</p>


          {/* <p className="mt-6 text-base text-white/80 leading-relaxed">
            I am <span className="font-semibold text-white">{profile.name}</span>. I received my MSc and BSc in ETE
            from RUET (Dec 2024, Mar 2021). I am pursuing my PhD at QUB and work in ML, MEC, Beyond 5G/6G,
            RRM, and mmWave communications.
          </p> */}

          <p className="mt-6 text-base text-white/80 leading-relaxed">
            <span className="font-semibold text-white">Md. Tarek Hassan</span> is pursuing his
            Doctor of Philosophy (Ph.D.) at Queen&apos;s University Belfast, Northern Ireland, United Kingdom. He has been
            serving as a Lecturer in the Department of ETE at RUET since 12 December 2021. He received his M.Sc. and B.Sc. (Engineering)
            degrees in Electronics and Telecommunication Engineering (ETE) from Rajshahi University of Engineering and
            Technology (RUET), Rajshahi, Bangladesh, in December 2024 and March 2021, respectively. His work spans Machine Learning
            (ML), Mobile Edge Computing (MEC), Beyond 5G/6G wireless communications, Radio Resource Management, and
            millimeter-wave (mmWave) communications. He has published research papers and posters in these areas.
          </p>

          {/* <p className="mt-4 text-base text-white/80 leading-relaxed">
            His research interests include Machine Learning for Reconfigurable Intelligent Surfaces (RIS),
            Integrated Sensing and Communication (ISAC/JSAC), and related topics. He received the ETE Association
            “Student of the Year” award (2018) from RUET for outstanding academic performance during his B.Sc. studies.
            He has also attended multiple conferences and seminars and published several papers.
          </p> */}


          <div className="mt-6 flex flex-wrap gap-3">
            
            <Link
              href="/publications"
              className="rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90 transition"
            >
              View Publications
            </Link>
            
            {/* <Link
              href="/publications"
              className="rounded-full bg-white text-slate-950 px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
            >
              View Publications
            </Link> */}
            <Link
              href="/research"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
            >
              Research
            </Link>
            <Link
              href="/skills"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
            >
              Skills & Certifications
            </Link>
            <a
              // href="/cv.pdf"
              href={`${BASE_PATH}/cv.pdf`}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
              title="Put your CV PDF into /public/cv.pdf"
            >
              Download CV (cv.pdf)
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {researchInterests.slice(0, 7).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT CARD */}
        <Card className="h-fit">
          <div className="flex items-center gap-4">
            <img
              // src="/profile.jpg"
              src={`${BASE_PATH}/profile.jpg`}
              alt="Profile"
              className="h-32 w-32 rounded-3xl object-cover border border-white/15 bg-white/5"
            />

            <div>
              <div className="text-sm font-semibold">{profile.name}</div>
              <div className="mt-1 text-xs text-white/60">{profile.location}</div>
              <div className="mt-2 text-xs">
                <a className="underline decoration-white/30 hover:decoration-white" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-2">
            {Object.entries(profile.links).slice(0, 6).map(([k, v]) => (
              <a
                key={k}
                href={v}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75 hover:text-white hover:bg-white/10 transition"
              >
                {k}
              </a>
            ))}
          </div>

          {/* <p className="mt-4 text-xs text-white/45">
            Tip: তোমার ছবি দিতে চাইলে <span className="font-semibold">public/profile.jpg</span> এ ছবি রাখো।
          </p> */}
        </Card>
      </section>

      {/* ONGOING */}
      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold">Ongoing Research</h2>
          <Link href="/research" className="text-sm text-white/70 hover:text-white underline decoration-white/20">
            Full details →
          </Link>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {ongoing.map((x) => (
            <Card key={x.title}>
              <div className="text-sm font-semibold">{x.title}</div>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{x.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="mt-12">
        <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold">Quick Contact</div>
            <div className="mt-1 text-sm text-white/70">
              Email: <a className="underline decoration-white/30 hover:decoration-white" href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
              <a
                href={profile.links["Google Scholar"]}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75 hover:bg-white/10 hover:text-white transition"
              >
                <GraduationCap size={16} />
                Scholar
              </a>

              <a
                href={profile.links.GitHub}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75 hover:bg-white/10 hover:text-white transition"
              >
                <Github size={16} />
                GitHub
              </a>

              <a
                href={profile.links.LinkedIn}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75 hover:bg-white/10 hover:text-white transition"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>

              <a
                href={profile.links["Personal Site"]}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75 hover:bg-white/10 hover:text-white transition"
              >
                <Globe size={16} />
                Website
              </a>
            </div>

        </Card>
      </section>
    </Container>
  );
}
