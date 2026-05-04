---
title: "2. How Communication and Sensing is Done?"
date: "2023-10-21"
order: 2
excerpt: "The mechanics of RIS-assisted ISAC, including joint beamforming, RIS phase control, sensing echoes, and communication constraints."
---

## System Model in Words

A base station sends a dual-functional waveform. The RIS reflects or transmits the waveform using a programmed phase/amplitude pattern. A communication user decodes data, while the sensing receiver processes echoes from targets.

The RIS pattern can be designed to:

- Focus energy toward the user.
- Illuminate a target.
- Reduce interference.
- Improve echo strength.
- Create a better localization geometry.

## Communication Path

The user receives a combination of:

- Direct BS-user signal, if available.
- BS-RIS-user reflected signal.
- Interference and noise.

The communication objective is usually rate, SINR, outage probability, or quality of service.

## Sensing Path

The sensing receiver may observe:

- BS-target-BS echo.
- BS-RIS-target-RIS-BS echo.
- BS-RIS-target-BS echo.
- Target echoes through multiple RIS or environmental paths.

Different papers make different assumptions about where the receiver is located: at the base station, at the RIS, or at distributed sensing nodes.

<figure className="my-6 rounded-xl border border-white/10 bg-slate-900 p-4">
  <svg viewBox="0 0 920 360" role="img" aria-label="RIS surface partitioning versus joint phase design" className="h-auto w-full">
    <rect x="85" y="70" width="240" height="220" rx="12" fill="#111827" stroke="#334155" />
    <text x="205" y="48" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">Surface partitioning</text>
    <rect x="115" y="100" width="180" height="75" rx="8" fill="#0e7490" opacity="0.35" stroke="#67e8f9" />
    <text x="205" y="144" text-anchor="middle" fill="#fff" font-size="16">communication subarray</text>
    <rect x="115" y="185" width="180" height="75" rx="8" fill="#a21caf" opacity="0.32" stroke="#f0abfc" />
    <text x="205" y="229" text-anchor="middle" fill="#fff" font-size="16">sensing subarray</text>
    <rect x="595" y="70" width="240" height="220" rx="12" fill="#111827" stroke="#334155" />
    <text x="715" y="48" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">Joint phase design</text>
    <g>
      <rect x="625" y="100" width="42" height="42" rx="6" fill="#0e7490" opacity="0.38" stroke="#67e8f9" />
      <rect x="677" y="100" width="42" height="42" rx="6" fill="#a21caf" opacity="0.32" stroke="#f0abfc" />
      <rect x="729" y="100" width="42" height="42" rx="6" fill="#0e7490" opacity="0.38" stroke="#67e8f9" />
      <rect x="781" y="100" width="42" height="42" rx="6" fill="#a21caf" opacity="0.32" stroke="#f0abfc" />
      <rect x="625" y="152" width="42" height="42" rx="6" fill="#a21caf" opacity="0.32" stroke="#f0abfc" />
      <rect x="677" y="152" width="42" height="42" rx="6" fill="#0e7490" opacity="0.38" stroke="#67e8f9" />
      <rect x="729" y="152" width="42" height="42" rx="6" fill="#a21caf" opacity="0.32" stroke="#f0abfc" />
      <rect x="781" y="152" width="42" height="42" rx="6" fill="#0e7490" opacity="0.38" stroke="#67e8f9" />
      <rect x="625" y="204" width="42" height="42" rx="6" fill="#0e7490" opacity="0.38" stroke="#67e8f9" />
      <rect x="677" y="204" width="42" height="42" rx="6" fill="#a21caf" opacity="0.32" stroke="#f0abfc" />
      <rect x="729" y="204" width="42" height="42" rx="6" fill="#0e7490" opacity="0.38" stroke="#67e8f9" />
      <rect x="781" y="204" width="42" height="42" rx="6" fill="#a21caf" opacity="0.32" stroke="#f0abfc" />
    </g>
    <text x="205" y="320" text-anchor="middle" fill="#cbd5e1" font-size="14">simple, but wastes shared aperture gain</text>
    <text x="715" y="320" text-anchor="middle" fill="#cbd5e1" font-size="14">harder, but all elements can help both tasks</text>
  </svg>
  <figcaption className="mt-3 text-xs leading-relaxed text-white/60">
    Figure 1: A simple RIS-assisted ISAC design partitions the surface into communication and sensing regions. A stronger design optimizes all elements jointly, but the optimization becomes more difficult.
  </figcaption>
</figure>

## Joint Optimization

RIS-assisted ISAC optimization often includes:

- Active BS beamforming.
- Passive/active RIS coefficients.
- Radar receive filter.
- User power allocation.
- Sensing beampattern constraint.
- QoS constraints.
- RIS power and hardware constraints.

The optimization is difficult because RIS phase variables are coupled with the BS beamformer and the radar objective.

## Surface Partitioning

One intuitive approach is to divide the RIS:

- One portion helps communication.
- Another portion helps sensing.

This is simple but not always optimal. A more advanced design lets all elements jointly contribute to both functions with a carefully optimized phase pattern.

The figure explains why partitioning is popular in tutorials but not always best in research. Partitioning is easy to understand and implement because each part has a clear role. Joint design is mathematically harder, but it can use the full aperture for both data delivery and target illumination, producing better trade-offs when solved well.

## Echo Strength Problem

RIS-assisted sensing can suffer severe path loss because the echo may travel several hops. Active RIS, distributed RIS, or multifunctional RIS can help, but they add cost and noise.

## Takeaway

Communication and sensing in RIS-assisted ISAC are done by joint control of waveform, BS beamforming, and RIS states. The key design problem is balancing user data quality with target sensing quality under realistic propagation and hardware limits.

## References and Further Reading

- M. A. Haider and Y. D. Zhang, ["RIS-Aided Integrated Sensing and Communication: A Mini-Review"](https://doi.org/10.3389/frsip.2023.1197240), 2023.
- M. Rihan et al., ["Passive vs. Active RIS for ISAC"](https://doi.org/10.1109/MNET.2023.3321542), *IEEE Network*, 2023.
- M. Rihan et al., ["Active RIS-Aided ISAC Systems: Beamforming Design and Performance Analysis"](https://doi.org/10.1109/TCOMM.2023.3332856), *IEEE Transactions on Communications*, 2024.
