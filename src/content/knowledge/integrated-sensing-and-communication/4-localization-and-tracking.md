---
title: "4. Localization & Tracking Perspective"
date: "2023-10-17"
order: 4
excerpt: "How ISAC supports device-based and device-free localization, tracking, Doppler estimation, and predictive beamforming."
---

## From Positioning to Tracking

Traditional positioning often estimates a static location. ISAC goes further: it can estimate position, velocity, direction, and trajectory over time.

Tracking is valuable because communication links are dynamic. If the network knows where a user is moving, it can predict the next beam instead of waiting for the link to fail.

## Device-Based Localization

Device-based localization estimates the position of a connected user. The user participates in the protocol and may send pilots or feedback.

Measurements include:

- Time of arrival.
- Angle of arrival.
- Angle of departure.
- Doppler.
- Channel state information.

## Device-Free Localization

Device-free localization tracks objects that do not carry a radio device. Examples include pedestrians, vehicles, drones, and human motion.

ISAC supports this because the radar-like echo can reveal object presence and motion even if the object is not connected to the network.

<figure className="my-6 rounded-xl border border-white/10 bg-slate-900 p-4">
  <svg viewBox="0 0 920 360" role="img" aria-label="ISAC tracking estimates range angle and Doppler over time" className="h-auto w-full">
    <defs>
      <marker id="arrow-track" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#67e8f9" />
      </marker>
      <marker id="arrow-track-pink" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#f0abfc" />
      </marker>
    </defs>
    <rect x="70" y="245" width="120" height="62" rx="12" fill="#0e7490" opacity="0.35" stroke="#67e8f9" />
    <text x="130" y="282" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">ISAC BS</text>
    <circle cx="635" cy="125" r="28" fill="#a21caf" opacity="0.35" stroke="#f0abfc" />
    <circle cx="720" cy="165" r="28" fill="#a21caf" opacity="0.25" stroke="#f0abfc" stroke-dasharray="6 5" />
    <circle cx="800" cy="215" r="28" fill="#a21caf" opacity="0.18" stroke="#f0abfc" stroke-dasharray="6 5" />
    <path d="M635 125 C675 135, 700 150, 720 165 C755 185, 778 202, 800 215" fill="none" stroke="#f0abfc" stroke-width="4" marker-end="url(#arrow-track-pink)" />
    <path d="M190 250 C310 150, 470 105, 607 125" fill="none" stroke="#67e8f9" stroke-width="5" marker-end="url(#arrow-track)" />
    <path d="M607 145 C480 210, 310 255, 190 272" fill="none" stroke="#f0abfc" stroke-width="4" stroke-dasharray="8 8" marker-end="url(#arrow-track-pink)" />
    <text x="390" y="116" fill="#67e8f9" font-size="15">probing beam</text>
    <text x="380" y="245" fill="#f5d0fe" font-size="15">echo carries range, angle, Doppler</text>
    <text x="735" y="98" text-anchor="middle" fill="#fff" font-size="16" font-weight="700">moving target trajectory</text>
  </svg>
  <figcaption className="mt-3 text-xs leading-relaxed text-white/60">
    Figure 1: ISAC tracking estimates a target state repeatedly over time. Range and angle locate the target; Doppler and temporal filtering estimate motion and predict the next position.
  </figcaption>
</figure>

For device-free tracking, the object does not cooperate with the network. The base station must detect weak reflections, separate them from clutter, associate them across time, and update a trajectory estimate. This is much harder than simply locating a connected phone that can transmit pilots.

## Doppler and Micro-Doppler

Doppler measures velocity along the radio path. Micro-Doppler comes from small moving parts, such as arms, legs, rotating blades, or vibrating machinery.

Micro-Doppler can help distinguish:

- Human walking vs vehicle motion.
- Drone rotor motion vs bird motion.
- Machine vibration patterns.

## Predictive Beamforming

If sensing estimates user motion, the network can predict future beam directions. This is useful for high-speed trains, vehicles, UAVs, and mmWave links where beam misalignment causes fast outages.

## Tracking Filters

Tracking usually uses temporal filters such as:

- Kalman filter.
- Extended Kalman filter.
- Particle filter.
- Bayesian multi-target tracking.
- Learning-based trackers.

The ISAC waveform provides measurements; the tracker converts them into stable trajectories.

## Main Challenges

- Clutter from static reflectors.
- Multi-target association.
- Occlusion and blockage.
- Synchronization.
- Privacy.
- Real-time processing.
- Joint optimization with data communication.

## Takeaway

ISAC localization is powerful because the network can both communicate with users and sense non-connected targets. The most important advantage is not just knowing where something is, but predicting where it will be next.

## References and Further Reading

- F. Liu et al., ["Integrated Sensing and Communications"](https://doi.org/10.1109/JSAC.2022.3156632), *IEEE JSAC*, 2022.
- J. A. Zhang et al., ["An Overview of Signal Processing Techniques for Joint Communication and Radar Sensing"](https://doi.org/10.1109/JSTSP.2021.3113120), *IEEE JSTSP*, 2021.
- K. Li et al., ["Localization in Reconfigurable Intelligent Surface Aided mmWave Systems"](https://doi.org/10.1109/TVT.2024.3393022), *IEEE TVT*, 2024.
