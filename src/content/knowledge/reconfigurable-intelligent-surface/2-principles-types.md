---
title: "2. Principles, Types, Pros & Cons"
date: "2024-01-02"
order: 2
excerpt: "Understanding the underlying physics of RIS, the different architectures, and its advantages/disadvantages."
---

## Operating Principle: Programmable Metamaterials

At a microscopic level, an RIS relies on **metamaterials**—artificial structures engineered to have electromagnetic properties not found in nature. 

![Metamaterial Surface](/images/ris/2.png)
*Figure 2: Close up of programmable metamaterial unit cells on an RIS panel.*

Each unit cell (or patch) on the RIS is connected to a tunable component, typically a PIN diode, varactor, or MEMS switch. 
- By switching the PIN diode on or off, the electrical properties of the unit cell change.
- This phase shift delays the reflected radio wave by a fraction of a microsecond.
- By intelligently controlling the phase shift of *thousands* of patches simultaneously, the RIS shapes the wavefront to construct a highly directional beam (a concept known as **beamforming**). This allows the surface to perform complex operations like focusing, splitting, or steering the beam entirely electronically without any moving parts.

---

## Types of RIS Architectures

1. **Passive RIS (Reflective):** 
   The most common type. It only reflects and shifts the phase of the incident signal without actively amplifying the power. It consumes almost zero energy.
2. **Active RIS:** 
   Contains integrated reflection-type amplifiers. It not only steers the beam but also amplifies the signal to overcome the severe "double path-loss" (the signal weakening from Base Station $\rightarrow$ RIS, and RIS $\rightarrow$ User).
3. **Transmissive RIS (STAR-RIS):**
   Simultaneously Transmitting and Reflecting RIS (STAR-RIS) can reflect signals to users on the same side, while allowing signals to pass *through* the surface (refraction) to serve users on the opposite side (e.g., inside a room).

---

## Advantages of RIS

<div className="bg-slate-900 p-4 rounded-lg my-4 font-mono text-sm border border-slate-700">
  ✅ <b>Energy Efficiency:</b> Passive RIS requires almost zero power to operate, unlike active relays.<br/>
  ✅ <b>Cost-Effective:</b> Made from cheap printed circuit boards without expensive RF chains or amplifiers.<br/>
  ✅ <b>Full-Duplex:</b> Since they don't process signals at baseband, they don't suffer from self-interference and operate in full-duplex mode natively.<br/>
  ✅ <b>Seamless Integration:</b> Can be easily deployed as "smart wallpaper" on buildings, ceilings, and windows.
</div>

## Disadvantages & Challenges

<div className="bg-slate-900 p-4 rounded-lg my-4 font-mono text-sm border border-slate-700">
  ❌ <b>Double Path Loss:</b> The signal degrades heavily over two hops (Transmitter $\rightarrow$ RIS and RIS $\rightarrow$ Receiver).<br/>
  ❌ <b>Channel Estimation:</b> Because the RIS is passive, it cannot easily "listen" to the channel to know how to adjust its phase shifts. Estimating the channels involves massive computational overhead at the base station.<br/>
  ❌ <b>Hardware Imperfections:</b> Real-world PIN diodes introduce phase errors, discrete quantization limits, and phase-dependent amplitude variations.
</div>
