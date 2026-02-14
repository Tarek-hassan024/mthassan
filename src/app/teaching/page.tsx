import Container from "@/components/Container";
import Card from "@/components/Card";

const coursesBySeries: { series: string; courses: string[] }[] = [
  { series: "16 Series", courses: ["ETE 4215: Telecommunication Engineering"] },
  { series: "17 Series", courses: ["ETE 4115: Wireless and Mobile Communication", "ETE 4215: Telecommunication Engineering"] },
  { series: "18 Series", courses: ["ETE 3111: Random Signal Processing", "ETE 4115: Wireless and Mobile Communication", "ETE 4139: Graph Theory"] },
  { series: "19 Series", courses: ["ETE 3111: Random Signal Processing", "ETE 3215: Digital Communication", "ETE 4115: Wireless and Mobile Communication", "ETE 4139: Graph Theory", "Sessionals: ETE 3114 & ETE 2214"] },
  { series: "20 Series", courses: ["ETE 3111: Digital Communication"] },
  { series: "21 Series", courses: ["ETE 2211: Power Electronics"] },
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

export default function TeachingPage() {
  return (
    <Container className="pt-10">
      <h1 className="text-2xl font-semibold">Teaching & Supervision</h1>
      <p className="mt-2 text-sm text-white/70">
        Courses taught and supervision records (projects + theses).
      </p>

      <h2 className="mt-8 text-xl font-semibold">Courses Taught</h2>
      <div className="mt-4 space-y-4">
        {coursesBySeries.map((x) => (
          <Card key={x.series}>
            <div className="text-sm font-semibold">{x.series}</div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              {x.courses.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <h2 className="mt-10 text-xl font-semibold">Project Supervision</h2>
      <div className="mt-4 space-y-4">
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

      <h2 className="mt-10 text-xl font-semibold">Thesis Supervision</h2>
      <div className="mt-4 space-y-4">
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
    </Container>
  );
}
