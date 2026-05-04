---
title: "1. What is Integrated Sensing and Communication (ISAC)?"
date: "2023-10-14"
order: 1
excerpt: "A detailed introduction to ISAC, why it matters for 6G, and how a radio signal can both communicate and sense."
---

## The Core Idea

**Integrated Sensing and Communication (ISAC)** means using a shared wireless platform to perform both data communication and environmental sensing. The same spectrum, antennas, hardware, waveform, or infrastructure can help transmit information and extract information about the physical world.

Communication asks:

```text
What information should be delivered to the receiver?
```

Sensing asks:

```text
What does the reflected signal reveal about objects, motion, distance, angle, or environment?
```

ISAC tries to answer both questions with one radio system.

<figure className="my-6 rounded-xl border border-white/10 bg-slate-900 p-4">
  <svg viewBox="0 0 920 360" role="img" aria-label="ISAC waveform serves a user and senses a target" className="h-auto w-full">
    <defs>
      <marker id="arrow-isac" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#67e8f9" />
      </marker>
      <marker id="arrow-echo" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#f0abfc" />
      </marker>
    </defs>
    <rect x="65" y="145" width="130" height="76" rx="14" fill="#0e7490" opacity="0.35" stroke="#67e8f9" />
    <text x="130" y="177" text-anchor="middle" fill="#fff" font-size="20" font-weight="700">ISAC BS</text>
    <text x="130" y="201" text-anchor="middle" fill="#bae6fd" font-size="15">shared waveform</text>
    <rect x="675" y="75" width="125" height="68" rx="14" fill="#047857" opacity="0.35" stroke="#6ee7b7" />
    <text x="737" y="108" text-anchor="middle" fill="#fff" font-size="17" font-weight="700">User</text>
    <text x="737" y="130" text-anchor="middle" fill="#bbf7d0" font-size="14">decodes data</text>
    <circle cx="740" cy="255" r="38" fill="#a21caf" opacity="0.28" stroke="#f0abfc" />
    <text x="740" y="260" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">Target</text>
    <path d="M195 165 C340 70, 535 60, 675 100" fill="none" stroke="#67e8f9" stroke-width="5" marker-end="url(#arrow-isac)" />
    <text x="430" y="74" text-anchor="middle" fill="#67e8f9" font-size="15">communication symbols</text>
    <path d="M195 205 C340 250, 525 275, 704 258" fill="none" stroke="#f0abfc" stroke-width="5" marker-end="url(#arrow-echo)" />
    <path d="M704 274 C510 330, 290 288, 195 215" fill="none" stroke="#f0abfc" stroke-width="4" stroke-dasharray="8 8" marker-end="url(#arrow-echo)" />
    <text x="440" y="294" text-anchor="middle" fill="#f5d0fe" font-size="15">sensing echo: delay, Doppler, angle</text>
  </svg>
  <figcaption className="mt-3 text-xs leading-relaxed text-white/60">
    Figure 1: One transmitted waveform supports two interpretations. The user receiver extracts information bits, while the sensing receiver extracts physical parameters from the echo.
  </figcaption>
</figure>

This dual interpretation is the heart of ISAC. The transmitted waveform is not "communication-only" or "radar-only"; it is a physical signal that propagates, reflects, and carries modulation. The receiver architecture and signal processing decide which information is extracted from it.

## Why ISAC is Important

Wireless spectrum is crowded. Radar and communication systems often use separate spectrum, hardware, and processing chains. ISAC improves efficiency by sharing resources.

Expected benefits:

- Better spectrum utilization.
- Lower hardware duplication.
- Lower latency between sensing and communication decisions.
- Environment-aware beamforming.
- Network-based localization and tracking.
- New services such as sensing-as-a-service.

## Radar-Communication Relationship

Radar and communication are physically related. Both transmit electromagnetic waves and process received signals. The difference is the goal:

- Communication wants to recover symbols/bits.
- Radar wants to recover target parameters.

Target parameters include:

- Range.
- Angle.
- Velocity.
- Radar cross section.
- Micro-Doppler signatures.

ISAC combines these goals in a shared design.

## ISAC vs Coexistence

There are three levels of integration:

| Level | Meaning |
|---|---|
| Coexistence | Radar and communication share spectrum but remain mostly separate |
| Cooperation | Systems exchange information to reduce interference |
| Full ISAC | A joint waveform/hardware/platform is designed for both functions |

True 6G ISAC aims for the third level, but practical deployments may begin with coexistence and cooperation.

## A Simple Example

A 6G base station sends an OFDM-like downlink waveform. A user receives the data. At the same time, part of the transmitted energy reflects from a car. The base station processes the echo to estimate the car's range, angle, and speed. That sensing result then helps aim the next communication beam.

This is the closed loop:

```text
communicate -> sense -> update beam -> communicate better
```

## Takeaway

ISAC is a shift from a network that only carries information to a network that also understands its physical environment. It is one of the major candidate pillars for 6G because localization, sensing, communication, and AI control are expected to become tightly connected.

## References and Further Reading

- F. Liu et al., ["Integrated Sensing and Communications: Toward Dual-Functional Wireless Networks for 6G and Beyond"](https://doi.org/10.1109/JSAC.2022.3156632), *IEEE Journal on Selected Areas in Communications*, vol. 40, no. 6, pp. 1728-1767, 2022.
- J. A. Zhang et al., ["An Overview of Signal Processing Techniques for Joint Communication and Radar Sensing"](https://doi.org/10.1109/JSTSP.2021.3113120), *IEEE Journal of Selected Topics in Signal Processing*, vol. 15, no. 6, pp. 1295-1315, 2021.
- Z. Yang et al., ["Reconfigurable Intelligent Surface-Enabled Integrated Sensing and Communication: A Sensing-Assisted Communication Framework"](https://doi.org/10.3389/frcmn.2023.1176322), *Frontiers in Communications and Networks*, 2023.
