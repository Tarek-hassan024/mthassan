import Container from "@/components/Container";
import Card from "@/components/Card";

const coursesTaught: { title: string; batches: string[]; type?: string }[] = [
  {
    title: "ETE 4215: Telecommunication Engineering",
    batches: ["16 Series", "17 Series"],
  },
  {
    title: "ETE 4115: Wireless and Mobile Communication",
    batches: ["17 Series", "18 Series", "19 Series"],
  },
  {
    title: "ETE 3215: Digital Communication",
    batches: ["19 Series", "20 Series"],
  },
  {
    title: "ETE 2214: Sessional Based on Communication Theory",
    batches: ["19 Series"],
    type: "Sessional",
  },
  {
    title: "ETE 3114: Sessional Based on Microwave Engineering",
    batches: ["19 Series"],
    type: "Sessional",
  },
  {
    title: "ETE 3111: Random Signal Processing",
    batches: ["18 Series", "19 Series"],
  },
  {
    title: "ETE 4139: Graph Theory",
    batches: ["18 Series", "19 Series"],
  },
  {
    title: "ETE 2211: Power Electronics",
    batches: ["21 Series"],
  },
];

const projectSupervision = [
  {
    group: "ETE 3200 (18 Series)",
    items: [
      "Line Follower Robot using Arduino Uno (1804007)",
      "Hand Gesture Controlled Car with Obstacle Detection (1804025)",
      "IoT-Based Car Parking System (1804045)",
      "IoT-based Smart Health Monitoring (Website + Blynk) (1804046)",
    ],
  },
  {
    group: "ETE 3200 (17 Series)",
    items: [
      "IoT Based Weather Station with Real-Time Online Monitoring (1704015)",
      "Online Library Management System Web App (1704032)",
      "Arduino & GSM Based Electronic Notice Board & Online Class Routine (1604045)",
      "Frequency Adjusting According to Need and Monitoring (1704049)",
    ],
  },
];

const thesisSupervision = [
  {
    group: "Thesis (18 Series)",
    items: [
      "Shakil (1804008): Performance analysis of AODV/OLSR/DSDV in MANET using NS-3",
      "Lamya Islam (1804017): Vehicle-centered traffic management using fog computing-based wireless network",
      "Vogoboti Roy (1804026): Spatial consistency & human blockage in mmWave channel modeling (metrorail scenarios)",
    ],
  },
  {
    group: "Thesis (17 Series)",
    items: [
      "Md. Rajibul Hassen (1704015): E2E learning for active/passive RIS-integrated MIMO networks",
      "Md. Rahat Imrose (1704028): Statistical mmWave channel modeling (spatial consistency + O2I penetration loss)",
    ],
  },
];

const otherSupervision = [
  "Course advising and academic mentoring for 2018-19 session students",
  "Project guidance for IoT, embedded systems, wireless networking, and web-based academic tools",
];

export default function TeachingPage() {
  return (
    <Container className="pt-10">
      <h1 className="text-2xl font-semibold">Teaching & Supervision</h1>
      <p className="mt-2 text-sm text-white/70">
        Courses taught and supervision records.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section>
          <h2 className="text-xl font-semibold">Teaching</h2>
          <div className="mt-4 space-y-4">
            {coursesTaught.map((course) => (
              <Card key={course.title}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="text-sm font-semibold">{course.title}</div>
                  {course.type ? (
                    <span className="w-fit rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                      {course.type}
                    </span>
                  ) : null}
                </div>
                <div className="mt-3 text-sm text-white/70">
                  Batch: {course.batches.join(", ")}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Supervision</h2>

          <h3 className="mt-4 text-sm font-semibold text-white/80">Thesis</h3>
          <div className="mt-3 space-y-4">
            {thesisSupervision.map((g) => (
              <Card key={g.group}>
                <div className="text-sm font-semibold">{g.group}</div>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <h3 className="mt-8 text-sm font-semibold text-white/80">Projects</h3>
          <div className="mt-3 space-y-4">
            {projectSupervision.map((g) => (
              <Card key={g.group}>
                <div className="text-sm font-semibold">{g.group}</div>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <h3 className="mt-8 text-sm font-semibold text-white/80">Others</h3>
          <Card className="mt-3">
            <ul className="space-y-2 text-sm text-white/75">
              {otherSupervision.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>
      </div>
    </Container>
  );
}
