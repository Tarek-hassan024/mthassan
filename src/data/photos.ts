export type PhotoItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type PhotoAlbum = {
  id: string;
  title: string;
  date: string;
  location: string;
  description?: string;
  photos: PhotoItem[];
};

export const photoAlbums: PhotoAlbum[] = [
  {
    id: "eucap-2026",
    title: "EuCAP 2026 Conference",
    date: "March 2026",
    location: "Dublin, Ireland",
    description:
      "20th European Conference on Antennas and Propagation (EuCAP 2026). Presented a paper on the impact of RIS size on ML-enabled beam sweeping for user localization.",
    photos: [
      {
        src: "/photos/EuCAP_2026/1012A232-696D-4335-A166-1048B2F067D9_1_102_a.jpeg",
        alt: "EuCAP 2026 – Conference venue",
      },
      {
        src: "/photos/EuCAP_2026/0E1B251D-3D23-4AE6-AE22-DBA9A19CDB05_1_105_c.jpeg",
        alt: "EuCAP 2026 – Presentation",
      },
      {
        src: "/photos/EuCAP_2026/5DDF9C96-46A4-4EF7-8FEB-9AB3A483F388_1_102_a.jpeg",
        alt: "EuCAP 2026 – Conference session",
      },
      {
        src: "/photos/EuCAP_2026/8552F41F-DC9D-40EE-B000-C7810B13A3A0_1_102_a.jpeg",
        alt: "EuCAP 2026 – Networking",
      },
    ],
  },
  {
    id: "ria-colloquium",
    title: "RIA/URSI Research Colloquium",
    date: "2026",
    location: "Royal Irish Academy, Dublin, Ireland",
    description:
      "20th RIA/URSI Research Colloquium on Radio Science and Communications. Presented work on machine learning-driven user localization in RIS-assisted wireless systems.",
    photos: [
      {
        src: "/photos/RIA/screenshot-121.png",
        alt: "RIA/URSI Research Colloquium – Royal Irish Academy, Dublin",
      },
    ],
  },
  {
    id: "cwi-symposium",
    title: "CWI Symposium",
    date: "2025",
    location: "Queen's University Belfast, Northern Ireland, UK",
    description:
      "Centre for Wireless Innovation (CWI) Symposium at Queen's University Belfast. Poster presentation on RIS-assisted wireless localization research.",
    photos: [
      {
        src: "/photos/CWI_Sympo/EEF15B9F-212D-421F-91E7-BB0432776526_1_105_c.jpeg",
        alt: "CWI Symposium – Poster presentation at QUB",
      },
    ],
  },
  {
    id: "phd-differentiation",
    title: "PhD Qualifying Exam",
    date: "November 2025",
    location: "Queen's University Belfast, Northern Ireland, UK",
    description:
      "Completion of the PhD differentiation (qualifying) exam at Queen's University Belfast.",
    photos: [
      {
        src: "/photos/Differentiation/DB6E02FC-888B-43B6-8426-7888E193F50E_1_105_c.jpeg",
        alt: "PhD Qualifying Exam – November 2025, QUB",
      },
    ],
  },
  {
    id: "special-session",
    title: "Special Session by Prof. Emil Björnson",
    date: "2025",
    location: "Queen's University Belfast, Northern Ireland, UK",
    description:
      'CWI special lecture: "Recent Trends on RIS and Security Issues" by Professor Emil Björnson.',
    photos: [
      {
        src: "/photos/Spec_session/06FC122F-83F0-46C6-B9DA-A66066AB6A04_1_105_c.jpeg",
        alt: "Special session by Prof. Emil Björnson on RIS and Security",
      },
    ],
  },
];
