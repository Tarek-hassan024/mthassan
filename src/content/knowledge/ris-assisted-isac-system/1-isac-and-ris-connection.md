---
title: "1. How ISAC is Connected to RIS"
date: "2023-10-20"
order: 1
excerpt: "Why RIS and ISAC naturally fit together in 6G networks, and what problem each technology solves."
---

## The Connection in One Sentence

**ISAC makes the network sense and communicate; RIS makes the propagation environment controllable.**

The combination is powerful because sensing and communication both depend on radio propagation. If the propagation path is blocked or weak, both functions degrade. RIS can create additional controllable paths.

<figure className="my-6 rounded-xl border border-white/10 bg-slate-900 p-4">
  <svg viewBox="0 0 920 380" role="img" aria-label="RIS assisted ISAC system with communication and sensing paths" className="h-auto w-full">
    <defs>
      <marker id="arrow-ris-isac-c" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#67e8f9" />
      </marker>
      <marker id="arrow-ris-isac-s" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#f0abfc" />
      </marker>
    </defs>
    <rect x="55" y="155" width="120" height="72" rx="14" fill="#0e7490" opacity="0.35" stroke="#67e8f9" />
    <text x="115" y="187" text-anchor="middle" fill="#fff" font-size="19" font-weight="700">ISAC BS</text>
    <text x="115" y="210" text-anchor="middle" fill="#bae6fd" font-size="14">waveform + receiver</text>
    <rect x="390" y="72" width="56" height="230" rx="8" fill="#701a75" opacity="0.55" stroke="#f0abfc" />
    <text x="418" y="50" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">RIS</text>
    <rect x="720" y="80" width="116" height="62" rx="12" fill="#047857" opacity="0.35" stroke="#6ee7b7" />
    <text x="778" y="116" text-anchor="middle" fill="#fff" font-size="17" font-weight="700">Comm user</text>
    <circle cx="790" cy="275" r="34" fill="#a21caf" opacity="0.3" stroke="#f0abfc" />
    <text x="790" y="280" text-anchor="middle" fill="#fff" font-size="17" font-weight="700">Target</text>
    <path d="M175 172 C265 70, 330 80, 390 120" fill="none" stroke="#67e8f9" stroke-width="5" marker-end="url(#arrow-ris-isac-c)" />
    <path d="M446 120 C560 45, 645 55, 720 92" fill="none" stroke="#67e8f9" stroke-width="5" marker-end="url(#arrow-ris-isac-c)" />
    <path d="M175 212 C285 270, 330 275, 390 250" fill="none" stroke="#f0abfc" stroke-width="5" marker-end="url(#arrow-ris-isac-s)" />
    <path d="M446 250 C575 325, 680 320, 758 285" fill="none" stroke="#f0abfc" stroke-width="5" marker-end="url(#arrow-ris-isac-s)" />
    <path d="M758 300 C640 360, 505 338, 446 270" fill="none" stroke="#f0abfc" stroke-width="4" stroke-dasharray="8 8" marker-end="url(#arrow-ris-isac-s)" />
    <text x="585" y="61" text-anchor="middle" fill="#67e8f9" font-size="14">data-focused reflected path</text>
    <text x="580" y="335" text-anchor="middle" fill="#f5d0fe" font-size="14">target illumination and echo path</text>
  </svg>
  <figcaption className="mt-3 text-xs leading-relaxed text-white/60">
    Figure 1: RIS-assisted ISAC has at least two coupled paths: one path supports user data, while another illuminates or receives echoes from a target. The RIS state affects both paths, so communication and sensing cannot be optimized independently.
  </figcaption>
</figure>

The figure shows the central coupling. A RIS phase pattern that maximizes user rate may not maximize target echo strength. A pattern that focuses on the target may reduce user SINR. RIS-assisted ISAC research is therefore about balancing these goals with a single physical surface and a shared waveform.

## What ISAC Provides

ISAC provides shared communication and sensing functionality:

- Data transmission to users.
- Radar-like detection.
- Range, angle, and Doppler estimation.
- Tracking and environment awareness.

## What RIS Provides

RIS provides propagation control:

- NLoS path creation.
- Signal focusing.
- Interference shaping.
- Virtual anchors for localization.
- Alternative sensing viewpoints.

## Why the Combination is Needed

High-resolution ISAC often uses mmWave/sub-THz bands. These bands provide wide bandwidth and narrow beams, but they are vulnerable to blockage. If the line-of-sight path is blocked, the base station may lose both communication and sensing visibility.

RIS can restore visibility by redirecting the waveform.

## Correcting a Common Misunderstanding

RIS-assisted ISAC is not simply "bouncing radar from a mirror." The RIS phase pattern changes the effective channel and must be optimized jointly with:

- BS transmit beamforming.
- Communication user quality of service.
- Target illumination.
- Echo reception.
- Interference and clutter.
- RIS hardware constraints.

## Main System Types

| System | Description |
|---|---|
| Passive RIS-aided ISAC | Low-power surface shapes ISAC beams |
| Active RIS-aided ISAC | RIS amplifies reflected signals to reduce multiplicative loss |
| STAR-RIS ISAC | Surface serves/senses both sides |
| Multifunctional RIS ISAC | RIS includes sensors or receiving elements |

## Takeaway

RIS and ISAC are connected because both are about using radio waves more intelligently. ISAC extracts information from the environment; RIS reshapes the environment so extraction and communication become easier.

## References and Further Reading

- M. A. Haider and Y. D. Zhang, ["RIS-Aided Integrated Sensing and Communication: A Mini-Review"](https://doi.org/10.3389/frsip.2023.1197240), *Frontiers in Signal Processing*, 2023.
- M. Rihan, A. Zappone, S. Buzzi, and G. Fodor, ["Passive vs. Active Reconfigurable Intelligent Surfaces for Integrated Sensing and Communication"](https://doi.org/10.1109/MNET.2023.3321542), *IEEE Network*, 2023.
- A. Tishchenko et al., ["The Emergence of Multi-Functional and Hybrid Reconfigurable Intelligent Surfaces for Integrated Sensing and Communications"](https://doi.org/10.1109/COMST.2024.3519785), *IEEE Communications Surveys & Tutorials*, early access, 2025.
