import Container from "@/components/Container";
import Card from "@/components/Card";
import { education } from "@/data/education";

const majorAreas = [
  "6G and beyond wireless networks",
  "Mobile edge computing (MEC) & offloading",
  "Reconfigurable intelligent surfaces (RIS)",
  "Integrated sensing & communication (ISAC)",
  "mmWave channel modeling & MAC scheduling",
  "Radio resource management (RRM) with ML/DL",
];

export default function ResearchPage() {
  const phd = education[0];
  const msc = education[1];
  const bsc = education[2];

  return (
    <Container className="pt-10">
      <h1 className="text-2xl font-semibold">Research</h1>
      <p className="mt-2 text-sm text-white/70">
        Major research directions and degree-wise research focus.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Card>
          <div className="text-sm font-semibold">Major Research Areas</div>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {majorAreas.map((a) => (
              <li key={a} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <div className="text-sm font-semibold">Current Themes</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {["ML/DL Enabled 6G", "RIS-assisted localization", "ISAC", "MEC offloading", "Beamforming"].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                {t}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            I focus on building learning-driven, simulation-backed methods for next-generation wireless
            communications—bridging theory, system design, and practical evaluation.
          </p>
        </Card>
      </div>

      <h2 className="mt-10 text-xl font-semibold">Degree-wise Research Work</h2>

      <div className="mt-4 space-y-4">
        <Card>
          <div className="text-sm text-white/60">{phd.school}</div>
          <div className="mt-1 text-lg font-semibold">PhD Focus ({phd.dates})</div>
          <div className="mt-3 text-sm">
            <span className="font-semibold">Research Title:</span>{" "}
            <span className="text-white/80">{phd.researchTitle}</span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>• RIS-assisted ML beam sweeping and user localization.</li>
            <li>• Intelligent electromagnetic environment design for comms + sensing (ISAC).</li>
            <li>• Evaluation-oriented workflow: models → simulation/experiments → metrics & robustness.</li>
          </ul>
        </Card>

        <Card>
          <div className="text-sm text-white/60">{msc.school}</div>
          <div className="mt-1 text-lg font-semibold">MSc Work ({msc.dates})</div>
          <div className="mt-3 text-sm">
            <span className="font-semibold">Research Title:</span>{" "}
            <span className="text-white/80">{msc.researchTitle}</span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>• ML-driven computation offloading strategy in MEC networks.</li>
            <li>• QoS and fairness-aware decision making under realistic network constraints.</li>
            <li>• Comparative study of KNN/order-preserving ideas and DRL-based offloading optimization.</li>
          </ul>
        </Card>

        <Card>
          <div className="text-sm text-white/60">{bsc.school}</div>
          <div className="mt-1 text-lg font-semibold">BSc Work ({bsc.dates})</div>
          <div className="mt-3 text-sm">
            <span className="font-semibold">Research Title:</span>{" "}
            <span className="text-white/80">{bsc.researchTitle}</span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>• Resource allocation and MAC scheduling in 5G/mmWave settings.</li>
            <li>• Channel modeling considerations (e.g., spatial consistency, blockage, O2I penetration).</li>
            <li>• Performance evaluation mindset (e.g., TCP over mmWave, scheduling impacts).</li>
          </ul>
        </Card>
      </div>
    </Container>
  );
}
