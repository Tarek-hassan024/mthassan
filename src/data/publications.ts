export type PubStatus = "Published" | "Accepted" | "Submitted" | "Under Review";
export type PubType = "Conference" | "Journal" | "Colloquium";

export type Publication = {
  type: PubType;
  status: PubStatus;
  year?: number;
  titleLine: string; // citation line (clean + safe)
  doi?: string;
};

export const publications: Publication[] = [
  {
    type: "Conference",
    status: "Accepted",
    year: 2026,
    titleLine:
      'M. T. Hassan, D. Zelenchuk, M. A. B. Abbasi, and A. Ullah, “Efficient Angular Localization in RIS-Assisted mmWave Network via Learning-Based Estimations,” in Proc. 2026 32nd International Conference on Telecommunications (ICT), Thessaloniki, Greece, 2026.',
  },
  {
    type: "Conference",
    status: "Accepted",
    year: 2026,
    titleLine:
      'M. T. Hassan, D. Zelenchuk, and M. A. B. Abbasi, “Near Field-Aware UE Localization in RIS-Aided Wireless Networks Through ML-Regressor,” in Proc. 2026 IEEE International Symposium on Antennas and Propagation and USNC-URSI Radio Science Meeting (AP-S/URSI), Detroit, MI, USA, 2026.',
  },
  {
    type: "Conference",
    status: "Accepted",
    year: 2026,
    titleLine:
      'M. T. Hassan, D. Zelenchuk, M. A. B. Abbasi, and I. Munina, “Impact of RIS Size on Machine Learning-Enabled Beam Sweeping for User Localization,” in Proc. 20th European Conference on Antennas and Propagation (EuCAP), Dublin, Ireland, 2026.',
  },
  {
    type: "Colloquium",
    status: "Accepted",
    year: 2026,
    titleLine:
      'M. T. Hassan, D. Zelenchuk, and M. A. B. Abbasi, “Machine Learning-Driven User Localization in RIS-Assisted Wireless Systems,” presented at the 20th RIA/URSI Research Colloquium on Radio Science and Communications, Royal Irish Academy, Dublin, Ireland, 2026.',
  },

  // Published (IEEE Xplore DOIs)
  {
    type: "Conference",
    status: "Published",
    year: 2024,
    titleLine:
      'M. T. Hassan and M. K. Hosain, “A Comprehensive Analysis of KNN and Order Preserving Techniques for Offloading Efficiency in MEC Networks,” in Proc. 2024 27th International Conference on Computer and Information Technology (ICCIT), Cox’s Bazar, Bangladesh, 2024, pp. 1334-1338.',
    doi: "10.1109/ICCIT64611.2024.11022397",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2024,
    titleLine:
      'M. T. Hassan and M. K. Hosain, “Optimization of Computation Offloading in Mobile-Edge Computing Networks with Deep Reinforcement Approach,” in Proc. 2024 IEEE International Conference on Communication, Computing and Signal Processing (IICCCS), Asansol, India, 2024, pp. 1-6.',
    doi: "10.1109/IICCCS61609.2024.10763862",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2024,
    titleLine:
      'A. Uz Zaman, M. T. Hassan and A. S. M. Badrudduza, “A Deep Reinforcement Learning Approach for Power Allocation in 5G Homogeneous Network Scenario,” in Proc. 2024 IEEE International Conference on Power, Electrical, Electronics and Industrial Applications (PEEIACON), Rajshahi, Bangladesh, 2024, pp. 948-953.',
    doi: "10.1109/PEEIACON63629.2024.10799988",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2024,
    titleLine:
      'M. Rahman Jony, M. T. Hassan and K. Hosain, “A Coastal Area Based Statistical Channel Modeling for 5G Millimeter Wave (mmWave) Heterogeneous Networks,” in Proc. 2024 IEEE International Conference on Power, Electrical, Electronics and Industrial Applications (PEEIACON), Rajshahi, Bangladesh, 2024, pp. 1-6.',
    doi: "10.1109/PEEIACON63629.2024.10800225",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2024,
    titleLine:
      'V. Roy, M. T. Hassan, M. K. Hosain, and L. Islam, “Analyzing Spatial Consistency and Human Blockage in mmWave Channel Modeling within Metrorail Scenarios in Next Generation Networks,” in Proc. 2024 IEEE International Conference on Power, Electrical, Electronics and Industrial Applications (PEEIACON), Rajshahi, Bangladesh, 2024, pp. 272-277.',
    doi: "10.1109/PEEIACON63629.2024.10800236",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2023,
    titleLine:
      'L. Islam and M. T. Hassan, “Performance Evaluation of Vehicle-Centered Traffic Management Using Fog Computing-Based Wireless Network,” in Proc. 2023 26th International Conference on Computer and Information Technology (ICCIT), Cox’s Bazar, Bangladesh, 2023, pp. 1-6.',
    doi: "10.1109/ICCIT60459.2023.10441628",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2023,
    titleLine:
      'M. R. Hassen, M. T. Hassan and M. R. Imrose, “Multi RIS-Integrated MIMO Wireless Communication: End-to-End (E2E) Learning Performance Across Diverse Network Scenarios,” in Proc. 2023 26th International Conference on Computer and Information Technology (ICCIT), Cox’s Bazar, Bangladesh, 2023, pp. 1-6.',
    doi: "10.1109/ICCIT60459.2023.10441651",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2023,
    titleLine:
      'M. A. Hasan, M. T. Hassan and F. Haque, “A Deep Learning-Based Efficient Beamspace Estimation Approach in Millimeter-Wave Massive MIMO Systems,” in Proc. 2023 6th International Conference on Electrical Information and Communication Technology (EICT), Khulna, Bangladesh, 2023, pp. 1-6.',
    doi: "10.1109/EICT61409.2023.10427980",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2023,
    titleLine:
      'M. R. Imrose, M. T. Hassan and M. R. Hassen, “A Comprehensive Study on Statistical Channel Modeling for Outdoor-to-Indoor (O2I) Penetration Concern of 5G mmWave Access Networks,” in Proc. 2023 6th International Conference on Electrical Information and Communication Technology (EICT), Khulna, Bangladesh, 2023, pp. 1-6.',
    doi: "10.1109/EICT61409.2023.10427651",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2023,
    titleLine:
      'M. R. Imrose, M. T. Hassan, M. R. Hassen, and M. M. Mowla, “A Statistical Investigation of Spatial Consistency and Human Blockage Consideration Based mmWave Channel Modeling for 5G Back-Haul Networks,” in Proc. 2023 International Conference on Electrical, Computer and Communication Engineering (ECCE), Chittagong, Bangladesh, 2023, pp. 1-6.',
    doi: "10.1109/ECCE57851.2023.10100745",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2022,
    titleLine:
      'M. T. Hassan and M. M. Mowla, “A Novel MAC Scheduling Approach for Mobility-Based 5G Millimeter Wave Networks,” in Proc. 2022 4th International Conference on Electrical, Computer and Telecommunication Engineering (ICECTE), Rajshahi, Bangladesh, 2022, pp. 1-4.',
    doi: "10.1109/ICECTE57896.2022.10114524",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2022,
    titleLine:
      'M. T. Hassan and M. Munjure Mowla, “An Efficient Proportional Fair MAC Scheduling for Resource Allocation in 5G Millimeter Wave Networks,” in Proc. 2022 25th International Conference on Computer and Information Technology (ICCIT), Cox’s Bazar, Bangladesh, 2022, pp. 276-281.',
    doi: "10.1109/ICCIT57492.2022.10055199",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2020,
    titleLine:
      'M. T. Hassan and M. M. Mowla, “Investigation of TCP Performance in 5G mmWave Networks,” in Proc. 2020 IEEE Region 10 Symposium (TENSYMP), Dhaka, Bangladesh, 2020, pp. 1688-1691.',
    doi: "10.1109/TENSYMP50017.2020.9230680",
  },

  {
    type: "Conference",
    status: "Submitted",
    year: 2026,
    titleLine:
      'M. T. Hassan, D. Zelenchuk, and M. A. B. Abbasi, “RIS-Aided Near-Field mmWave Localization Under Cross-Link Interference via Beam-Domain ML Fingerprinting,” submitted to 2026 IEEE Global Communications Conference (GLOBECOM), Macau, China, 2026.',
  },
  {
    type: "Conference",
    status: "Submitted",
    year: 2026,
    titleLine:
      'M. T. Hassan, D. Zelenchuk, G. Travers, M. A. B. Abbasi, and G. G. Machado, “Experimental Validation of Localisation in RIS-Assisted mmWave Networks,” submitted to the 19th IEEE United Conference on Millimetre Waves and Terahertz Technologies (UCMMT), Birmingham, U.K., 2026.',
  },
];

export function doiUrl(doi?: string) {
  return doi ? `https://doi.org/${doi}` : undefined;
}
