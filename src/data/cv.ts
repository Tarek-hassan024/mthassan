export type Publication = {
  index: number;
  citation: string;
  year: number;
};

export const cv = {
  objective:
    "Doctoral researcher at Queen’s University Belfast specializing in RIS-enabled wireless communications. Seeking roles in Wireless Communication or Machine Learning with a focus on hardware implementation and optimization of reconfigurable intelligent surfaces.",

  education: [
    {
      degree: "PhD in Electrical and Electronic Engineering",
      org: "Queen’s University Belfast",
      location: "Belfast, Northern Ireland, UK",
      period: "Feb 2025 — Present",
      details: [
        "Research Title: Intelligent AI Electromagnetic Environment for Communication and Sensing within 6G",
        "Specialization: 6G, Reconfigurable Intelligent Surface (RIS), Integrated Sensing and Communication (ISAC)",
      ],
    },
    {
      degree: "M.Sc. in Electronics & Telecommunication Engineering",
      org: "Rajshahi University of Engineering & Technology (RUET)",
      location: "Rajshahi, Bangladesh",
      period: "Sep 2021 — Dec 2024",
      details: [
        "Graduated with Honors",
        "CGPA: 3.92 out of 4.00",
        "Research Title: Machine Learning Driven Mobile Edge Computing for Connectivity and QoS in Next Generation Networks",
        "Specialization: Edge Computing, Machine Learning, Beyond 5G",
      ],
    },
    {
      degree: "B.Sc. in Electronics & Telecommunication Engineering",
      org: "Rajshahi University of Engineering & Technology (RUET)",
      location: "Rajshahi, Bangladesh",
      period: "Jan 2016 — Mar 2021",
      details: [
        "Graduated with Honors",
        "CGPA: 3.85 out of 4.00",
        "Research Title: Radio Resource Management in 5G Heterogeneous Networks",
        "Specialization: Wireless Communication, 5G, Millimeter Wave (mmWave)",
      ],
    },
  ],

  work_experience: [
    {
      org: "Rajshahi University of Engineering & Technology (RUET)",
      role: "Lecturer",
      location: "Rajshahi, Bangladesh",
      period: "Dec 2021 — Present",
      bullets: [
        "Lesson planning, preparation and research and contact/teaching time with students",
        "Encouraging personal development via tutorial/pastoral work",
        "Invigilating examinations and liaising with other professionals/employers",
        "Arranging work experience placements and attending staff meetings",
      ],
      technical_skills: [
        "Python (TensorFlow), NumPy, Matplotlib, Pandas, Scikit-learn",
        "MATLAB, Simulink, RiverBed Modeler, OFDM Simulator",
      ],
      soft_skills: [
        "Lecturing",
        "Time Management",
        "Communication",
        "Presentation skills",
        "Professional Ethics",
      ],
    },
    {
      org: "Robi Axiata Limited",
      role: "Intern in Radio Access Network",
      location: "On site",
      period: "Apr 2019 — May 2019",
      bullets: [
        "Interfaced with LAN and WAN telecommunications operations on secure compatibility and connectivity matters",
        "Performed system by remote access and coordinated and prepared reports to support operation and planning of telecommunications systems",
      ],
      technical_skills: ["LTE (4G), UMTS (3G), Switching System, Access Network, Backhaul Networks"],
      soft_skills: ["Team Work", "Time Management", "Communication", "Presentation skills", "Professional Integrity"],
    },
  ],

  projects: [
    {
      title:
        "Design and Development of IoT Based Swarm Intelligence System for Environmental Sustainability",
      period: "Dec 2022 — Present",
      bullets: [
        "Developed a distributed IoT system using Python, Arduino, and wireless sensor networks for real-time environmental monitoring",
        "Implemented swarm intelligence algorithms (e.g., Particle Swarm Optimization) for decentralized decision-making among sensor nodes",
      ],
      tech: ["Python", "Arduino", "MQTT", "Swarm Intelligence", "Sensor Integration"],
      soft: ["Problem-solving", "Team Collaboration", "Research Communication"],
    },
    {
      title: "Advanced Mobile Phone Controlled Electrical Appliances",
      period: "Nov 2017 — Feb 2018",
      bullets: [
        "Controlled appliances by mobile phone from any distance using microcontroller, mobile phone, and embedded C",
      ],
      tech: ["Electronics", "Arduino", "Atmel Studio"],
      soft: ["Presentation skills", "Logical Thinking"],
    },
    {
      title: "Automated & Manual AM Modulator & Demodulator",
      period: "Dec 2018 — Jul 2019",
      bullets: [
        "Built circuits that accept manual/automated input signals to modulate and demodulate signals",
      ],
      tech: ["Electronics", "Arduino", "Passive Electric Filters", "Modulator and Demodulator"],
      soft: ["Presentation skills", "Logical Thinking"],
    },
  ],

  publications: [
    {
      index: 1,
      year: 2024,
      citation:
        'M. T. Hassan and M. K. Hosain, “Optimization of computation offloading in mobile-edge computing networks with deep reinforcement approach,” in 2024 IEEE International Conference on Communication, Computing and Signal Processing (IICCCS), 2024.',
    },
    {
      index: 2,
      year: 2023,
      citation:
        'M. A. Hasan, M. T. Hassan, and F. Haque, “A deep learning-based efficient beamspace estimation approach in millimeter-wave massive MIMO systems,” in 2023 6th International Conference on Electrical Information and Communication Technology (EICT), 2023.',
    },
    {
      index: 3,
      year: 2023,
      citation:
        'M. R. Imrose, M. T. Hassan, M. R. Hassen, and M. M. Mowla, “A statistical investigation of spatial consistency and human blockage consideration based mmWave channel modeling for 5G back-haul networks,” in 2023 International Conference on Electrical, Computer and Communication Engineering (ECCE), 2023.',
    },
    {
      index: 4,
      year: 2022,
      citation:
        'T. Hassan and M. M. Mowla, “An efficient proportional fair MAC scheduling for resource allocation in 5G millimeter wave networks,” in 2022 25th International Conference on Computer and Information Technology (ICCIT), 2022.',
    },
    {
      index: 5,
      year: 2020,
      citation:
        'M. T. Hassan and M. M. Mowla, “Investigation of TCP performance in 5G mmWave networks,” in 2020 IEEE Region 10 Symposium (TENSYMP), 2020.',
    },
  ],

  skills: [
    { group: "Programming Languages", items: ["Python", "MATLAB", "C++", "C"] },
    { group: "Web Technologies", items: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP", "WordPress"] },
    { group: "Database Systems", items: ["MySQL", "Firebase"] },
    { group: "Data Science & Machine Learning", items: ["Scikit-learn", "Pandas", "Matplotlib", "TensorFlow", "Keras", "NumPy"] },
    { group: "Specialized/Research Area", items: ["5G/6G", "Wireless Communication", "mmWave", "Reconfigurable Intelligent Surface"] },
    { group: "Mathematical & Statistical Tools", items: ["GNU Octave", "MATLAB", "R"] },
    { group: "Other Tools & Technologies", items: ["CST Studio", "NS-3", "Anaconda", "Jupyter Notebook", "LaTeX"] },
  ],

  awards: [
    {
      title: "Most Impactful Thesis Award",
      org: "RUET",
      period: "Mar 2021",
      bullets: ["B.Sc. Thesis Award", "3 good conferences based on the thesis"],
    },
    {
      title: "Student of the Year",
      org: "RUET",
      period: "Nov 2018",
      bullets: ["Awarded for the highest results in a year", "Got the medal and certification"],
    },
    {
      title: "University and Board Scholarships",
      org: "RUET and Bangladesh Government",
      period: "2008 — 2022",
      bullets: ["Undergrad Scholarship in RUET", "Bangladesh Government Scholarship in HSC, SSC and JSC Examination"],
    },
  ],

  leadership: [
    {
      title: "General Secretary",
      org: "Joypurhat Zilla Association",
      period: "Feb 2020 — Mar 2021",
      bullets: ["Organized farewell/fresher reception", "Arranged inter-college competition"],
    },
    {
      title: "Electronic Society of RUET",
      org: "RUET",
      period: "Feb 2017 — Oct 2017",
      bullets: ["Published information to students about upcoming events", "Arranged management for keynote speakers/organizing body"],
    },
  ],

  volunteer: [
    {
      title: "Member",
      org: "Volunteers for Bangladesh",
      period: "Oct 2019 — Jul 2020",
      bullets: ["Arranged food for starved people during disaster situation"],
    },
  ],

  memberships: [
    { title: "International Association of Engineers (IAENG)", period: "Sep 2020 — Present", details: ["Membership ID: 264018"] },
  ],

  certifications: [
    { title: "CCNA: Routing and Switching", org: "Cisco", period: "Feb 2020" },
    { title: "IBM Data Science Professional Certification", org: "IBM", period: "Jul 2020" },
    { title: "Python For Everyone Specialization", org: "University of Michigan", period: "Sep 2020" },
  ],

  additional: {
    languages: ["English (Proficiency level)", "Hindi (Intermediate)", "Bangla (Native)"],
    interests: ["Traveling", "Documentation", "Watching Films", "Cooking"],
  },

  references: [
    {
      name: "Dr Dmitry Zelenchuk",
      title: "Senior Lecturer, Electrical and Electronics Engineering, Queen’s University Belfast",
      email: "d.zelenchuk@qub.ac.uk",
      relation: "PhD Thesis Supervisor",
    },
    {
      name: "Dr Md Kamal Hosain",
      title: "Professor, Electronics & Telecommunication Engineering, RUET",
      email: "khosain@ete.ruet.ac.bd",
      phone: "+8801716-130151",
      relation: "M.Sc. Thesis Supervisor",
    },
    {
      name: "Dr Md Munjure Mowla",
      title: "Research and Innovation Expert, Research & Development Section, IS Wireless",
      email: "munjuremowlaofficial@gmail.com",
      relation: "Mentor and B.Sc. Thesis Supervisor",
    },
  ],
};
