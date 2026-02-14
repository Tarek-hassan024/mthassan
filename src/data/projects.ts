export type Project = {
  name: string;
  description: string;
  stack: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: "RIS Beamforming Simulator",
    description: "Simulation framework for mmWave RIS-assisted systems.",
    stack: ["Python", "NumPy", "MATLAB"],
    links: [{ label: "GitHub", href: "https://github.com/" }],
  },
];
