---
title: "5. mmWave and Terahertz ISAC Perspective"
date: "2023-10-18"
order: 5
excerpt: "Why mmWave and THz frequencies are central to high-resolution ISAC, and what challenges they introduce."
---

## Why High Frequency Helps Sensing

mmWave and THz systems provide large bandwidth and small wavelength. These properties are useful for sensing:

- Large bandwidth improves range resolution.
- Small wavelength improves sensitivity to small movements.
- Compact arrays provide high angular resolution.
- Narrow beams reduce some interference.

```text
range resolution is roughly proportional to 1 / bandwidth
```

So wider bandwidth generally means sharper distance separation between targets.

## Why High Frequency is Difficult

High-frequency links are fragile:

- Blockage is severe.
- Penetration through walls is poor.
- Beam alignment is critical.
- Hardware impairments are more significant.
- Phase noise and synchronization matter.

ISAC must therefore combine high-resolution sensing with robust communication control.

## mmWave ISAC

mmWave is a practical near-term ISAC band because 5G/6G systems already use mmWave-style beamforming. The same arrays used for directional communication can support radar-like sensing.

Use cases:

- Vehicle tracking.
- Indoor positioning.
- Gesture recognition.
- Beam prediction.
- Factory monitoring.

## THz ISAC

THz frequencies can offer even larger bandwidth and finer sensing resolution. They are promising for extremely high data rates and high-resolution imaging-like sensing.

Challenges:

- Very high path loss.
- Molecular absorption.
- Hardware limitations.
- Short-range deployment.
- Severe blockage.

## Role of RIS

RIS becomes especially important at mmWave/THz because blockage is the central weakness. A RIS can provide an alternate path and can help illuminate targets that are not visible through the direct path.

<div className="my-5 rounded-xl border border-white/10 bg-slate-900 p-4 text-sm">
  <div className="mb-3 font-semibold text-cyan-200">High-frequency ISAC trade-off</div>
  <div className="grid gap-3 sm:grid-cols-2">
    <div className="rounded-lg bg-emerald-400/10 p-3">Large bandwidth -> high sensing resolution</div>
    <div className="rounded-lg bg-rose-400/10 p-3">High blockage -> need RIS/beam control</div>
  </div>
</div>

## Takeaway

mmWave and THz frequencies are natural for ISAC because they provide high-resolution sensing and high-rate communication. Their weakness is fragility, which makes beam management, RIS assistance, and robust tracking essential.

## References and Further Reading

- F. Liu et al., ["Integrated Sensing and Communications"](https://doi.org/10.1109/JSAC.2022.3156632), *IEEE JSAC*, 2022.
- J. A. Zhang et al., ["An Overview of Signal Processing Techniques for Joint Communication and Radar Sensing"](https://doi.org/10.1109/JSTSP.2021.3113120), *IEEE JSTSP*, 2021.
- X. Mu et al., ["Reconfigurable Intelligent Surface-Aided Near-Field Communications for 6G"](https://ieeexplore.ieee.org/document/10380596), *IEEE Vehicular Technology Magazine*, 2024.
