---
title: "4. What are the Recent Trends?"
date: "2023-10-23"
order: 4
excerpt: "Recent research trends in RIS-assisted ISAC, including active RIS, STAR-RIS, NOMA, learning-based control, near-field sensing, and multifunctional surfaces."
---

## 1. Active RIS for ISAC

Passive RIS suffers from multiplicative path loss. Active RIS integrates amplification into the surface and can improve radar SINR or communication coverage. Recent IEEE work has studied active RIS-aided ISAC beamforming under BS and RIS power constraints.

## 2. STAR-RIS and Full-Space ISAC

STAR-RIS can serve and sense users on both sides of a surface. This is attractive for building facades, windows, and indoor/outdoor environments.

## 3. Multifunctional and Hybrid RIS

A major 2025 IEEE Communications Surveys & Tutorials direction is multifunctional RIS. These surfaces may integrate reflection, transmission, sensing, receiving, energy harvesting, or active elements.

The motivation is simple: a purely passive RIS is hard to estimate and control. Adding limited sensing or receiving capability can make the RIS more network-aware.

## 4. RIS + NOMA + ISAC

Recent IEEE TVT work has considered hybrid NOMA-assisted ISAC via RIS. The idea is to support more communication users while preserving sensing performance. This introduces additional tradeoffs from user pairing, power-domain decoding, and radar constraints.

## 5. Learning-Based Control

RIS phase optimization is often nonconvex and high-dimensional. Machine learning can help with:

- Fast beam prediction.
- RIS codebook selection.
- User/target tracking.
- Online adaptation.
- Digital-twin-assisted training.

## 6. Near-Field RIS-ISAC

Large RIS panels and high frequencies create near-field propagation. Near-field ISAC can focus energy on a point rather than only a direction, which is promising for high-resolution localization and target sensing.

## 7. Experimental Validation

The field needs more real measurements. Many results still depend on idealized simulations. Important validation topics include:

- Real RIS hardware response.
- Phase-dependent amplitude.
- Mutual coupling.
- Calibration.
- Mobility.
- Outdoor deployment.

## Takeaway

The trend is moving from ideal passive reflecting panels toward active, STAR, hybrid, multifunctional, learning-controlled, and experimentally validated RIS-assisted ISAC systems.

## References and Further Reading

- M. Rihan et al., ["Active RIS-Aided ISAC Systems"](https://doi.org/10.1109/TCOMM.2023.3332856), *IEEE Transactions on Communications*, 2024.
- W. Lyu et al., ["Hybrid NOMA Assisted Integrated Sensing and Communication via RIS"](https://doi.org/10.1109/TVT.2023.3343379), *IEEE Transactions on Vehicular Technology*, vol. 73, no. 5, pp. 7368-7373, 2024.
- A. Tishchenko et al., ["The Emergence of Multi-Functional and Hybrid Reconfigurable Intelligent Surfaces for Integrated Sensing and Communications"](https://doi.org/10.1109/COMST.2024.3519785), *IEEE Communications Surveys & Tutorials*, early access, 2025.
