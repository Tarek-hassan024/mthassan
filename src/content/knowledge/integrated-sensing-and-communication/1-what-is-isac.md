---
title: "1. What is Integrated Sensing and Communication (ISAC)?"
date: "2024-02-01"
order: 1
excerpt: "An introduction to ISAC, the paradigm shift converging radar sensing and wireless communications into a single system."
---

## The Convergence of Two Worlds

Historically, **Wireless Communication** and **Radar Sensing** evolved as two completely separate fields. 
- **Communications** (like 4G/5G) focused on transmitting data bits between two points as reliably as possible.
- **Radar** (like air traffic control or automotive radar) focused on emitting a pulse and listening for the echo to detect the presence, speed, and location of physical objects.

For decades, these systems used separate hardware, separate antennas, and separate frequency bands. However, as communications moved to higher frequencies (mmWave and THz), the physical properties of communication signals began to look exactly like high-resolution radar signals. 

This realization birthed **Integrated Sensing and Communication (ISAC)**—the concept of combining both functions into a single, unified system.

![ISAC Convergence](/images/isac/1.png)
*Figure 1: A cellular base station simultaneously transmitting data to a smartphone and acting as a radar to track a drone.*

## The Core Concept of ISAC

In an ISAC system, a single radio transceiver and a single radio waveform perform two jobs simultaneously:
1. They carry the communication payload (bits) to a receiver.
2. The exact same radio wave bounces off surrounding objects (people, cars, walls) and the echoes are collected by the transmitter to create a high-resolution 3D map of the environment.

### Why is this revolutionary?
Instead of a self-driving car needing a bulky radar unit *and* a separate 5G modem, a single ISAC chip can handle both. The cellular network itself becomes a massive, city-wide radar system, opening the door for 6G networks to physically "see" the world around them while providing internet access.
