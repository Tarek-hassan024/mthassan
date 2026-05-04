---
title: "2. Principles, Waveform Design & Trade-offs"
date: "2023-10-15"
order: 2
excerpt: "The signal-processing principles behind ISAC, including waveform design, sensing metrics, communication metrics, and unavoidable trade-offs."
---

## How ISAC Works

ISAC works by designing one radio system to produce useful communication observations and useful sensing observations.

At the receiver side, the signal may be processed in two ways:

- A communication receiver estimates symbols, codewords, and data.
- A sensing receiver estimates delay, Doppler, angle, and target strength.

Sometimes these receivers are physically the same device. Sometimes they share only part of the infrastructure.

## Waveform Design Strategies

### Radar-Centric ISAC

A radar waveform is modified to carry data. This protects sensing performance but may limit communication flexibility.

### Communication-Centric ISAC

A communication waveform, such as OFDM, is reused for sensing. This is attractive because it fits cellular systems, but the waveform may not have ideal radar ambiguity properties.

### Joint Waveform Design

The waveform is designed from the beginning for both tasks. This is more powerful but more complex.

<figure className="my-6 rounded-xl border border-white/10 bg-slate-900 p-4">
  <svg viewBox="0 0 920 360" role="img" aria-label="ISAC waveform design tradeoff between sensing and communication" className="h-auto w-full">
    <line x1="145" y1="280" x2="780" y2="280" stroke="#94a3b8" stroke-width="3" />
    <line x1="145" y1="280" x2="145" y2="85" stroke="#94a3b8" stroke-width="3" />
    <text x="462" y="324" text-anchor="middle" fill="#cbd5e1" font-size="16">communication efficiency</text>
    <text x="55" y="188" text-anchor="middle" fill="#cbd5e1" font-size="16" transform="rotate(-90 55 188)">sensing quality</text>
    <circle cx="260" cy="125" r="38" fill="#0e7490" opacity="0.45" stroke="#67e8f9" />
    <text x="260" y="121" text-anchor="middle" fill="#fff" font-size="15" font-weight="700">Radar</text>
    <text x="260" y="140" text-anchor="middle" fill="#bae6fd" font-size="13">centric</text>
    <circle cx="665" cy="232" r="38" fill="#047857" opacity="0.4" stroke="#6ee7b7" />
    <text x="665" y="228" text-anchor="middle" fill="#fff" font-size="15" font-weight="700">Comm</text>
    <text x="665" y="247" text-anchor="middle" fill="#bbf7d0" font-size="13">centric</text>
    <circle cx="465" cy="170" r="46" fill="#a21caf" opacity="0.35" stroke="#f0abfc" />
    <text x="465" y="166" text-anchor="middle" fill="#fff" font-size="15" font-weight="700">Joint</text>
    <text x="465" y="185" text-anchor="middle" fill="#f5d0fe" font-size="13">ISAC design</text>
    <path d="M300 132 C370 122, 420 136, 440 152" fill="none" stroke="#67e8f9" stroke-width="3" stroke-dasharray="7 7" />
    <path d="M507 184 C555 215, 598 230, 627 232" fill="none" stroke="#6ee7b7" stroke-width="3" stroke-dasharray="7 7" />
    <text x="455" y="58" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="700">Waveform design is a trade-off, not a single fixed recipe</text>
  </svg>
  <figcaption className="mt-3 text-xs leading-relaxed text-white/60">
    Figure 1: Radar-centric designs favor sensing quality, communication-centric designs favor data service, and joint ISAC designs search for an operating point that satisfies both.
  </figcaption>
</figure>

The figure is useful because it prevents a common misunderstanding: ISAC is not automatically optimal for both functions. A waveform with excellent data throughput may have poor sensing ambiguity behavior, while a clean radar pulse may not support flexible multi-user data transmission. The research problem is to choose the operating point that fits the service requirement.

## Sensing Metrics

Common sensing metrics include:

- Range resolution.
- Velocity resolution.
- Angle resolution.
- Detection probability.
- False alarm probability.
- Estimation error.
- Radar signal-to-interference-plus-noise ratio.

## Communication Metrics

Common communication metrics include:

- Data rate.
- Spectral efficiency.
- Bit error rate.
- Outage probability.
- Latency.
- Energy efficiency.
- User fairness.

## The Fundamental Trade-off

The best waveform for communication is not always the best waveform for sensing.

For communication, random-looking data-bearing signals can be good. For sensing, carefully shaped ambiguity functions and predictable probing signals are often useful. ISAC must balance these requirements.

## Beamforming Trade-off

Beamforming creates another tension. A communication beam should point toward the user. A sensing beam should illuminate the target. If the user and target are in different directions, the system must split power, time, beams, or spatial degrees of freedom.

## Self-Interference

If a full-duplex ISAC transceiver transmits and receives simultaneously, the transmitted signal can leak into the sensing receiver and overwhelm weak echoes. Self-interference cancellation is therefore a major practical issue.

## Practical ISAC Design Checklist

- Choose waveform: radar-centric, communication-centric, or joint.
- Define sensing and communication metrics.
- Allocate power between users and targets.
- Design beamforming and receive filters.
- Handle clutter and self-interference.
- Decide how sensing feedback improves communication.
- Validate under mobility, blockage, and hardware impairments.

## Takeaway

ISAC is not simply "radar plus communication." It is a joint resource-allocation and signal-processing problem where spectrum, power, beams, waveform structure, and hardware are shared between two objectives.

## References and Further Reading

- F. Liu et al., ["Integrated Sensing and Communications"](https://doi.org/10.1109/JSAC.2022.3156632), *IEEE JSAC*, 2022.
- J. A. Zhang et al., ["An Overview of Signal Processing Techniques for Joint Communication and Radar Sensing"](https://doi.org/10.1109/JSTSP.2021.3113120), *IEEE JSTSP*, 2021.
- M. A. Haider and Y. D. Zhang, ["RIS-Aided Integrated Sensing and Communication: A Mini-Review"](https://doi.org/10.3389/frsip.2023.1197240), *Frontiers in Signal Processing*, 2023.
