---
title: "5. Scopes and Future Challenges"
date: "2023-10-24"
order: 5
excerpt: "Open research directions for RIS-assisted ISAC, from channel estimation and beamforming to privacy, hardware, standardization, and real-world deployment."
---

## Why the Future Scope is Large

RIS-assisted ISAC sits at the intersection of propagation control, radar sensing, communication theory, optimization, and AI. It is promising, but it is also technically difficult.

## Open Problem 1: Channel and Target Estimation

The system must estimate communication channels and sensing parameters. With RIS, the cascaded channel becomes harder:

```text
BS -> RIS -> user
BS -> RIS -> target -> receiver
```

The RIS may be passive, so it cannot easily measure the channel itself.

## Open Problem 2: Joint Beamforming

The BS beam and RIS phase pattern must satisfy both:

- User quality-of-service constraints.
- Sensing SINR or estimation accuracy constraints.

This usually creates a nonconvex optimization problem.

## Open Problem 3: Hardware Realism

Future papers need to move beyond ideal RIS assumptions:

- Quantized phases.
- Element coupling.
- Lossy reflection.
- Phase-dependent amplitude.
- Active RIS noise.
- Finite bandwidth.
- Calibration errors.

## Open Problem 4: Mobility

RIS configuration can become outdated quickly when users or targets move. Future systems need fast sensing-assisted updates and low-overhead control protocols.

## Open Problem 5: Privacy and Security

ISAC can sense people and objects. RIS can extend sensing into areas that are otherwise blocked. This creates privacy questions:

- Who owns sensing data?
- Can users opt out?
- How is raw echo data protected?
- Can RIS be attacked or misconfigured?

## Open Problem 6: Standardization

Real RIS-assisted ISAC requires standardized interfaces for:

- RIS control.
- Channel reporting.
- Sensing reporting.
- Calibration.
- Synchronization.
- Security.

## Future Research Directions

- Active RIS-aided ISAC.
- STAR-RIS-aided ISAC.
- Multi-RIS cooperative sensing.
- Near-field RIS-ISAC localization.
- RIS-assisted NLoS target detection.
- Federated learning for privacy-preserving ISAC.
- Digital twins for deployment and control.
- Prototype-based measurement campaigns.

## Takeaway

RIS-assisted ISAC is one of the richest 6G research topics because it combines controllable propagation with environment-aware networks. The best future work will be hardware-aware, measurement-backed, privacy-conscious, and connected to real deployment scenarios.

## References and Further Reading

- M. A. Haider and Y. D. Zhang, ["RIS-Aided Integrated Sensing and Communication: A Mini-Review"](https://doi.org/10.3389/frsip.2023.1197240), 2023.
- M. Rihan et al., ["Passive vs. Active RIS for ISAC"](https://doi.org/10.1109/MNET.2023.3321542), *IEEE Network*, 2023.
- A. Tishchenko et al., ["Multi-Functional and Hybrid RIS for ISAC: A Survey"](https://doi.org/10.1109/COMST.2024.3519785), *IEEE Communications Surveys & Tutorials*, 2025.
- W. Lyu et al., ["Hybrid NOMA Assisted ISAC via RIS"](https://doi.org/10.1109/TVT.2023.3343379), *IEEE Transactions on Vehicular Technology*, 2024.
