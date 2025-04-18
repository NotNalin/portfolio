export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "go.notnal.in",
    year: 2025,
    description: "A URL shortener with multiple features",
    url: "https://go.notnal.in",
  },
  {
    title: "Google Meet dark mode extension",
    year: 2025,
    description: "A dark mode extension for Google Meet",
    url: "https://github.com/NotNalin/google-meet-dark-mode-extension"
  },
  {
    title: "SHJ-Polize",
    year: 2022,
    description: "Multi-purpose Discord bot",
    url: "https://github.com/Stoobyy/SHJ-Polize",
  },
  {
    title: "rtadubai",
    year: 2022-2024,
    description: "Unofficial API for RTA Dubai",
    url: "https://github.com/NotNalin/rtadubai",
  },
];
