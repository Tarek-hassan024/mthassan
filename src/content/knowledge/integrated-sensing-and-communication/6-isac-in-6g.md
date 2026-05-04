---
title: "6. ISAC-Aided 6G Networks"
date: "2023-10-19"
order: 6
excerpt: "How ISAC fits into 6G networks with AI, RIS, digital twins, edge computing, and sensing-as-a-service."
---

## ISAC as a 6G Pillar

6G networks are expected to support not only communication but also sensing, localization, intelligence, and control. ISAC is central to that vision because it makes the network aware of the physical world.

6G ISAC may support:

- Centimeter-level positioning.
- Device-free tracking.
- High-resolution environmental sensing.
- Beam prediction.
- Smart mobility.
- Industrial automation.
- Digital twins.

## Sensing as a Service

In sensing-as-a-service, the network provides sensing information to applications. For example, a factory may subscribe to a private 6G network that tracks robots and workers. A smart city may use network sensing to monitor traffic flow.

This raises important nontechnical issues:

- Privacy.
- Data ownership.
- Security.
- Regulation.
- Trust and explainability.

## AI-Native ISAC

ISAC generates high-dimensional data: channel estimates, echoes, Doppler maps, point clouds, user trajectories, and beam histories. AI can help convert this data into decisions.

Examples:

- Neural networks for target detection.
- Reinforcement learning for beam scheduling.
- Federated learning for privacy-preserving sensing.
- Digital twins for simulation and planning.

## RIS and ISAC Together

RIS helps ISAC when the target or user is blocked. The RIS can create a controllable sensing/communication path and add geometry for localization.

This is why RIS-assisted ISAC has become a major research direction.

## Open 6G Research Problems

- Joint waveform and protocol design.
- Multi-user and multi-target ISAC.
- Sensing privacy and security.
- Standardized sensing interfaces.
- Edge processing for low latency.
- RIS-assisted NLoS sensing.
- Experimental validation beyond simulations.

## Takeaway

ISAC makes 6G networks context-aware. Its value is not only that one waveform can do two jobs, but that sensing information can continuously improve communication, mobility, and network intelligence.

## References and Further Reading

- F. Liu et al., ["Integrated Sensing and Communications"](https://doi.org/10.1109/JSAC.2022.3156632), *IEEE JSAC*, 2022.
- J. A. Zhang et al., ["An Overview of Signal Processing Techniques for Joint Communication and Radar Sensing"](https://doi.org/10.1109/JSTSP.2021.3113120), *IEEE JSTSP*, 2021.
- A. Tishchenko et al., ["The Emergence of Multi-Functional and Hybrid Reconfigurable Intelligent Surfaces for Integrated Sensing and Communications"](https://doi.org/10.1109/COMST.2024.3519785), *IEEE Communications Surveys & Tutorials*, early access, 2025.
