export type EducationItem = {
  school: string;
  degree: string;
  dates: string;
  location: string;
  cgpa?: string;
  researchTitle?: string;
  specialization?: string[];
};

export const education: EducationItem[] = [
  {
    school: "Queen's University Belfast (QUB)",
    degree: "PhD in Electrical and Electronic Engineering",
    dates: "Feb 2025 – Present",
    location: "Belfast, United Kingdom",
    researchTitle:
      "Intelligent AI Electromagnetic Environment for Communication and Sensing within 6G",
    specialization: ["6G", "RIS", "ISAC"],
  },
  {
    school: "Rajshahi University of Engineering & Technology (RUET)",
    degree: "MSc in Electronics and Telecommunication Engineering (ETE)",
    dates: "Sep 2021 – Dec 2024",
    location: "Rajshahi, Bangladesh",
    cgpa: "3.92 / 4.00",
    researchTitle:
      "Machine Learning Driven Mobile Edge Computing for Connectivity and QoS in Next Generation Networks",
    specialization: ["Edge Computing", "Machine Learning", "Beyond 5G/6G"],
  },
  {
    school: "Rajshahi University of Engineering & Technology (RUET)",
    degree: "BSc in Electronics and Telecommunication Engineering (ETE)",
    dates: "Up to Mar 2021",
    location: "Rajshahi, Bangladesh",
    cgpa: "3.85 / 4.00",
    researchTitle: "Radio Resource Management in 5G Heterogeneous Networks",
    specialization: ["5G", "mmWave", "Radio Resource Management"],
  },
];
