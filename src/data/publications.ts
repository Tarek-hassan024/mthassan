export type PubStatus = "Published" | "Accepted" | "Under Review";
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
      'M. T. Hassan, D. Zelenchuk, M. A. B. Abbasi, and I. Munina, “Impact of RIS Size on Machine Learning-Enabled Beam Sweeping for User Localization”, 20th European Conference on Antennas and Propagation (EuCAP 2026), Dublin, Ireland.',
  },
  {
    type: "Colloquium",
    status: "Accepted",
    year: 2026,
    titleLine:
      'M. T. Hassan, D. Zelenchuk, and M. A. B. Abbasi, “Machine Learning-Driven User Localization in RIS-Assisted Wireless Systems”, 20th RIA/URSI Research Colloquium on Radio Science and Communications, Royal Irish Academy, Dublin, Ireland.',
  },

  // Published (IEEE Xplore DOIs)
  {
    type: "Conference",
    status: "Published",
    year: 2024,
    titleLine:
      'M. T. Hassan and M. K. Hosain, “A Comprehensive Analysis of KNN and Order Preserving Techniques for Offloading Efficiency in MEC Networks”, ICCIT 2024.',
    doi: "10.1109/ICCIT64611.2024.11022397",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2024,
    titleLine:
      'M. T. Hassan and M. K. Hosain, “Optimization of Computation Offloading in Mobile-Edge Computing Networks with Deep Reinforcement Approach”, IICCCS 2024.',
    doi: "10.1109/IICCCS61609.2024.10763862",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2024,
    titleLine:
      'A. Uz Zaman, M. T. Hassan and A. S. M. Badrudduza, “A Deep Reinforcement Learning Approach for Power Allocation in 5G Homogeneous Network Scenario”, PEEIACON 2024.',
    doi: "10.1109/PEEIACON63629.2024.10799988",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2024,
    titleLine:
      'M. Rahman Jony, M. T. Hassan and K. Hosain, “A Coastal Area Based Statistical Channel Modeling for 5G mmWave Heterogeneous Networks”, PEEIACON 2024.',
    doi: "10.1109/PEEIACON63629.2024.10800225",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2024,
    titleLine:
      'V. Roy, M. T. Hassan, M. K. Hosain and L. Islam, “Analyzing Spatial Consistency and Human Blockage in mmWave Channel Modeling within Metrorail Scenarios”, PEEIACON 2024.',
    doi: "10.1109/PEEIACON63629.2024.10800236",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2023,
    titleLine:
      'L. Islam and M. T. Hassan, “Performance Evaluation of Vehicle-Centered Traffic Management Using Fog Computing-based Wireless Network”, ICCIT 2023.',
    doi: "10.1109/ICCIT60459.2023.10441628",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2023,
    titleLine:
      'M. R. Hassen, M. T. Hassan and M. R. Imrose, “Multi RIS-Integrated MIMO Wireless Communication: E2E Learning Performance Across Diverse Scenarios”, ICCIT 2023.',
    doi: "10.1109/ICCIT60459.2023.10441651",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2023,
    titleLine:
      'M. A. Hasan, M. T. Hassan and F. Haque, “A Deep Learning-based Efficient Beamspace Estimation Approach in mmWave Massive MIMO Systems”, EICT 2023.',
    doi: "10.1109/EICT61409.2023.10427980",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2023,
    titleLine:
      'M. R. Imrose, M. T. Hassan and M. R. Hassen, “A Comprehensive Study on Statistical Channel Modeling for O2I Penetration in 5G mmWave Access Networks”, EICT 2023.',
    doi: "10.1109/EICT61409.2023.10427651",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2023,
    titleLine:
      'M. R. Imrose, M. T. Hassan, M. R. Hassen, and M. M. Mowla, “A Statistical Investigation of Spatial Consistency and Human Blockage… for 5G Back-Haul Networks”, ECCE 2023.',
    doi: "10.1109/ECCE57851.2023.10100745",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2022,
    titleLine:
      'M. T. Hassan and M. M. Mowla, “A Novel MAC Scheduling Approach for Mobility-based 5G mmWave Networks”, ICECTE 2022.',
    doi: "10.1109/ICECTE57896.2022.10114524",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2022,
    titleLine:
      'M. T. Hassan and M. Munjure Mowla, “An Efficient Proportional Fair MAC Scheduling for Resource Allocation in 5G mmWave Networks”, ICCIT 2022.',
    doi: "10.1109/ICCIT57492.2022.10055199",
  },
  {
    type: "Conference",
    status: "Published",
    year: 2020,
    titleLine:
      'M. T. Hassan and M. M. Mowla, “Investigation of TCP Performance in 5G mmWave Networks”, TENSYMP 2020.',
    doi: "10.1109/TENSYMP50017.2020.9230680",
  },

  {
    type: "Journal",
    status: "Under Review",
    year: 2025,
    titleLine:
      'M. T. Hassan and M. M. Mowla, “MAC Scheduling in a Feasible Mobility Model for Resource Allocation in 5G mmWave Networks”, submitted to Journal of Computer Communications.',
  },
];

export function doiUrl(doi?: string) {
  return doi ? `https://doi.org/${doi}` : undefined;
}
