---
title: "2. Principles, Types, Pros & Cons"
date: "2023-10-09"
order: 2
excerpt: "A deeper explanation of RIS physics, architectures, design variables, advantages, and practical limitations."
---

## Operating Principle

An RIS controls the boundary condition seen by an incident electromagnetic wave. In simple wireless-system models, each RIS element is represented by a complex coefficient:

```text
reflection coefficient = amplitude * exp(j * phase)
```

The phase determines how the reflected wave aligns with other reflected waves. The amplitude describes how much energy is reflected after losses. Ideal papers often assume amplitude 1 and continuous phase. Real surfaces have losses and quantized phase states.

<figure className="my-6 rounded-xl border border-white/10 bg-slate-900 p-4">
  <svg viewBox="0 0 920 350" role="img" aria-label="RIS phase gradient steers an outgoing wave" className="h-auto w-full">
    <defs>
      <marker id="arrow-phase" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#67e8f9" />
      </marker>
      <marker id="arrow-phase-out" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#f0abfc" />
      </marker>
    </defs>
    <text x="70" y="44" fill="#bae6fd" font-size="17" font-weight="700">Incident planar wave</text>
    <line x1="70" y1="95" x2="300" y2="95" stroke="#67e8f9" stroke-width="4" marker-end="url(#arrow-phase)" />
    <line x1="70" y1="145" x2="300" y2="145" stroke="#67e8f9" stroke-width="4" marker-end="url(#arrow-phase)" />
    <line x1="70" y1="195" x2="300" y2="195" stroke="#67e8f9" stroke-width="4" marker-end="url(#arrow-phase)" />
    <line x1="70" y1="245" x2="300" y2="245" stroke="#67e8f9" stroke-width="4" marker-end="url(#arrow-phase)" />
    <rect x="365" y="55" width="70" height="240" rx="8" fill="#701a75" opacity="0.45" stroke="#f0abfc" />
    <g font-size="16" font-weight="700" text-anchor="middle">
      <text x="400" y="92" fill="#fff">0°</text>
      <text x="400" y="132" fill="#fff">45°</text>
      <text x="400" y="172" fill="#fff">90°</text>
      <text x="400" y="212" fill="#fff">135°</text>
      <text x="400" y="252" fill="#fff">180°</text>
    </g>
    <text x="400" y="320" text-anchor="middle" fill="#f5d0fe" font-size="15">phase gradient</text>
    <path d="M435 100 C520 74, 620 50, 820 54" fill="none" stroke="#f0abfc" stroke-width="5" marker-end="url(#arrow-phase-out)" />
    <path d="M435 155 C540 132, 630 112, 820 108" fill="none" stroke="#f0abfc" stroke-width="5" marker-end="url(#arrow-phase-out)" />
    <path d="M435 210 C550 195, 660 177, 820 168" fill="none" stroke="#f0abfc" stroke-width="5" marker-end="url(#arrow-phase-out)" />
    <text x="660" y="35" fill="#f5d0fe" font-size="17" font-weight="700">Steered reflected wave</text>
  </svg>
  <figcaption className="mt-3 text-xs leading-relaxed text-white/60">
    Figure 1: A linear phase gradient across the RIS changes the reflected direction. If the phase profile is curved rather than linear, the same surface can focus energy at a point, which is important for near-field 6G localization and sensing.
  </figcaption>
</figure>

## Beam Steering vs Beam Focusing

**Beam steering** sends energy in a desired direction. It is often described using far-field planar-wave models.

**Beam focusing** sends energy to a specific point in space. It becomes important for near-field RIS, where the user is close enough that spherical wavefront curvature cannot be ignored.

The distinction matters because many early RIS papers assumed far-field steering for mathematical simplicity. In 6G, however, very large surfaces and high frequencies can make the near-field region large enough that users, sensors, or targets sit inside it. Then the RIS phase profile must compensate for different distances from each element to the point of interest, not just a single departure angle.

| Mode | Best model | Main control target |
|---|---|---|
| Far-field steering | Plane wave | Angle |
| Near-field focusing | Spherical wave | Range and angle |

Near-field operation is increasingly important in 6G because large surfaces and high carrier frequencies make the Rayleigh distance large.

## Main RIS Architectures

### Passive Reflective RIS

This is the most common concept. The surface reflects signals and changes their phase with very low power consumption.

**Best for:** coverage extension, interference control, passive beam shaping.

**Challenge:** double path loss and passive channel estimation.

### Active RIS

Active RIS elements include reflection-type amplifiers. This can compensate for the severe multiplicative path loss, but it introduces noise, power consumption, and hardware complexity.

**Best for:** longer RIS-assisted links and sensing scenarios where passive reflection is too weak.

**Challenge:** amplifier noise, stability, cost, and power constraints.

### STAR-RIS

STAR-RIS means **Simultaneously Transmitting and Reflecting RIS**. It can serve users on both sides of the surface, acting like a programmable smart window.

**Best for:** indoor/outdoor coverage, full-space service, building-mounted deployments.

**Challenge:** energy splitting, mode switching, coupled transmission/reflection design.

### Hybrid or Multifunctional RIS

Hybrid RIS contains some active sensing/receiving elements or additional radio modules. This is useful because a fully passive RIS cannot observe the channel directly.

**Best for:** channel estimation, sensing-assisted control, RIS-assisted ISAC.

## Pros

- **Low-power infrastructure:** Passive RIS consumes much less power than active relays.
- **Coverage improvement:** It can create controllable virtual LoS paths.
- **Interference control:** It can redirect useful energy and suppress unwanted directions.
- **Localization support:** A known RIS position can act as a virtual anchor.
- **Sensing support:** A large aperture can help illuminate targets or improve angular resolution.

## Cons and Open Challenges

- **Cascaded channel estimation:** The BS-RIS and RIS-user channels appear as a combined channel.
- **Training overhead:** Large RIS panels require careful pilot design.
- **Hardware nonidealities:** Mutual coupling, finite resolution, element losses, and bandwidth effects matter.
- **Placement sensitivity:** A poorly placed RIS gives little benefit.
- **Optimization complexity:** Joint active beamforming and RIS phase design is usually nonconvex.

## Practical Design Variables

When designing an RIS system, researchers usually optimize:

- Number of RIS elements.
- Element spacing.
- Phase shifts.
- Amplitude states.
- RIS location and orientation.
- BS beamforming.
- User scheduling.
- Pilot patterns.
- Control latency.

## Takeaway

RIS is best understood as a programmable boundary for radio propagation. Its promise is large, but practical performance depends on accurate channel knowledge, realistic hardware, good placement, and low-overhead control.

## References and Further Reading

- M. Di Renzo et al., ["Smart Radio Environments Empowered by Reconfigurable Intelligent Surfaces"](https://doi.org/10.1109/JSAC.2020.3007211), *IEEE JSAC*, 2020.
- X. Mu, J. Xu, Y. Liu, and L. Hanzo, ["Reconfigurable Intelligent Surface-Aided Near-Field Communications for 6G: Opportunities and Challenges"](https://ieeexplore.ieee.org/document/10380596), *IEEE Vehicular Technology Magazine*, 2024.
- M. Rihan, A. Zappone, S. Buzzi, and G. Fodor, ["Passive vs. Active Reconfigurable Intelligent Surfaces for Integrated Sensing and Communication: Challenges and Opportunities"](https://doi.org/10.1109/MNET.2023.3321542), *IEEE Network*, 2023.
