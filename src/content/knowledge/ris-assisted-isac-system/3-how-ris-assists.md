---
title: "3. How RIS Can Assist?"
date: "2023-10-22"
order: 3
excerpt: "The main ways RIS improves ISAC: blockage recovery, virtual anchors, sensing geometry, interference control, and active/multifunctional operation."
---

## 1. NLoS Sensing

A normal base-station radar cannot sense a target hidden behind a building. A RIS can redirect the ISAC waveform around the obstacle and create an indirect sensing path.

<figure className="my-6 rounded-xl border border-white/10 bg-slate-900 p-4">
  <svg viewBox="0 0 920 360" role="img" aria-label="RIS enables non line of sight sensing around a corner" className="h-auto w-full">
    <defs>
      <marker id="arrow-nlos" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#67e8f9" />
      </marker>
      <marker id="arrow-nlos-echo" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#f0abfc" />
      </marker>
    </defs>
    <rect x="60" y="220" width="110" height="62" rx="12" fill="#0e7490" opacity="0.35" stroke="#67e8f9" />
    <text x="115" y="257" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">BS</text>
    <rect x="330" y="55" width="44" height="220" rx="8" fill="#701a75" opacity="0.55" stroke="#f0abfc" />
    <text x="352" y="36" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">RIS</text>
    <rect x="545" y="55" width="96" height="250" rx="10" fill="#475569" opacity="0.7" stroke="#94a3b8" />
    <text x="593" y="180" text-anchor="middle" fill="#e2e8f0" font-size="15">corner</text>
    <circle cx="770" cy="105" r="34" fill="#a21caf" opacity="0.3" stroke="#f0abfc" />
    <text x="770" y="110" text-anchor="middle" fill="#fff" font-size="17" font-weight="700">Target</text>
    <line x1="170" y1="240" x2="545" y2="140" stroke="#94a3b8" stroke-width="4" stroke-dasharray="9 9" />
    <text x="360" y="206" fill="#cbd5e1" font-size="14">direct sensing blocked</text>
    <path d="M170 232 C245 150, 285 115, 330 130" fill="none" stroke="#67e8f9" stroke-width="5" marker-end="url(#arrow-nlos)" />
    <path d="M374 130 C500 55, 650 48, 738 92" fill="none" stroke="#67e8f9" stroke-width="5" marker-end="url(#arrow-nlos)" />
    <path d="M738 119 C640 180, 492 190, 374 148" fill="none" stroke="#f0abfc" stroke-width="4" stroke-dasharray="8 8" marker-end="url(#arrow-nlos-echo)" />
    <path d="M330 150 C245 190, 205 225, 170 250" fill="none" stroke="#f0abfc" stroke-width="4" stroke-dasharray="8 8" marker-end="url(#arrow-nlos-echo)" />
    <text x="495" y="54" fill="#67e8f9" font-size="14">illumination path</text>
    <text x="500" y="205" fill="#f5d0fe" font-size="14">echo path</text>
  </svg>
  <figcaption className="mt-3 text-xs leading-relaxed text-white/60">
    Figure 1: RIS enables NLoS sensing by creating a controllable around-the-corner path. The same geometry can support hidden target detection, localization, and tracking.
  </figcaption>
</figure>

This is useful for:

- Street corners.
- Indoor corridors.
- Factory shelves.
- Blocked vehicles or pedestrians.

The important point is that the RIS path is not just another random multipath component. Its position and phase program are known to the network, so the reflected echo can be interpreted geometrically. This makes RIS-assisted NLoS sensing more useful than relying on uncontrolled wall reflections.

## 2. Better Sensing Geometry

Sensing accuracy depends on geometry. If all observations come from one direction, localization may be poor. RIS can add a new viewpoint and improve angular diversity.

## 3. Virtual Anchors for Localization

A known RIS location can serve as a virtual anchor. When an ISAC system estimates a RIS-reflected path, it can use the known RIS geometry to improve localization and tracking.

## 4. Beampattern Shaping

RIS can help shape the sensing beampattern:

- Focus energy at a target.
- Reduce leakage toward clutter.
- Create nulls toward interference.
- Split energy between users and targets.

## 5. Communication-Sensing Feedback

Sensing can help communication by estimating user position and motion. Communication can help sensing by providing synchronization, waveform structure, and network coordination. RIS strengthens this loop by improving the controllability of paths.

## 6. Active RIS Assistance

Passive RIS may be too weak for long multi-hop sensing paths. Active RIS can amplify reflected signals. This may improve sensing SINR, but it also introduces amplifier noise and power constraints.

## 7. Multifunctional RIS

Multifunctional RIS may include sensors or receiving elements. This can reduce channel-estimation overhead and enable local sensing at the surface.

## Takeaway

RIS assists ISAC by adding controllable geometry. It can create paths, strengthen echoes, improve localization, and help balance communication and sensing objectives.

## References and Further Reading

- M. Rihan et al., ["Passive vs. Active Reconfigurable Intelligent Surfaces for Integrated Sensing and Communication"](https://doi.org/10.1109/MNET.2023.3321542), *IEEE Network*, 2023.
- M. Rihan et al., ["Active RIS-Aided ISAC Systems"](https://doi.org/10.1109/TCOMM.2023.3332856), *IEEE Transactions on Communications*, 2024.
- A. Tishchenko et al., ["Multi-Functional and Hybrid RIS for ISAC: A Survey"](https://doi.org/10.1109/COMST.2024.3519785), *IEEE Communications Surveys & Tutorials*, 2025.
