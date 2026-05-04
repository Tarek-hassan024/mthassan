---
title: "6. RIS in 6G mmWave Networks"
date: "2023-10-13"
order: 6
excerpt: "A 6G-oriented view of RIS in mmWave/sub-THz networks, including deployment, AI control, digital twins, and open research directions."
---

## RIS as 6G Infrastructure

6G is expected to move beyond only connecting users. It will also localize, sense, compute, and adapt. RIS fits this vision because it lets the network program parts of the physical environment.

In a mature 6G deployment, RIS panels may be installed on:

- Building facades.
- Street furniture.
- Factory walls.
- Indoor ceilings.
- Vehicles and UAVs.
- Smart windows.

## Network-Level View

<div className="my-5 rounded-xl border border-white/10 bg-slate-900 p-4 text-sm">
  <div className="mb-3 font-semibold text-cyan-200">6G RIS control loop</div>
  <div className="grid gap-3 md:grid-cols-4">
    <div className="rounded-lg bg-cyan-400/10 p-3">Sense channel/context</div>
    <div className="rounded-lg bg-fuchsia-400/10 p-3">Optimize RIS states</div>
    <div className="rounded-lg bg-emerald-400/10 p-3">Serve users/targets</div>
    <div className="rounded-lg bg-amber-400/10 p-3">Learn from feedback</div>
  </div>
</div>

RIS control is not only an electromagnetic problem. It is also a network-management problem involving scheduling, mobility, control signaling, and AI.

## Why mmWave and sub-THz Need RIS

mmWave/sub-THz systems offer large bandwidth, but links are easily blocked. RIS helps by:

- Creating reflected backup paths.
- Improving cell-edge coverage.
- Supporting directional beam discovery.
- Helping localization and sensing.
- Reducing the need for many active small cells.

## AI and Digital Twins

Large RIS networks cannot be optimized by slow exhaustive search. AI can help learn:

- Which RIS panels should be active.
- Which phase patterns work in a given environment.
- How mobility affects the best configuration.
- How sensing information predicts future beams.

Digital twins can provide simulated environments for training and planning. The digital twin stores geometry, materials, RIS locations, and traffic patterns, then predicts good radio configurations.

## Deployment Challenges

- **Backhaul/control:** RIS controllers need reliable commands.
- **Calibration:** Real RIS responses differ from ideal models.
- **Standardization:** RIS needs interfaces for control, measurement, and reporting.
- **Maintenance:** Outdoor surfaces face weather, aging, and hardware failures.
- **Security:** Malicious RIS control could redirect or jam links.

## Research Directions

- Multi-RIS coordination.
- Active/STAR/multifunctional RIS.
- Near-field RIS for 6G.
- RIS-aided ISAC.
- Learning-based RIS beam management.
- Hardware-aware channel modeling.
- Experimental validation with real prototypes.

## Takeaway

RIS can become a 6G infrastructure layer that makes wireless environments programmable. The key challenge is moving from ideal single-link simulations to robust, hardware-aware, network-level deployments.

## References and Further Reading

- Q. Wu and R. Zhang, ["Towards Smart and Reconfigurable Environment"](https://doi.org/10.1109/MCOM.001.1900107), *IEEE Communications Magazine*, 2020.
- M. Di Renzo et al., ["Smart Radio Environments Empowered by Reconfigurable Intelligent Surfaces"](https://doi.org/10.1109/JSAC.2020.3007211), *IEEE JSAC*, 2020.
- A. Tishchenko et al., ["The Emergence of Multi-Functional and Hybrid Reconfigurable Intelligent Surfaces for Integrated Sensing and Communications: A Survey"](https://doi.org/10.1109/COMST.2024.3519785), *IEEE Communications Surveys & Tutorials*, early access, 2025.
