import { GitHubRepo } from "@/types";

export const githubRepos: GitHubRepo[] = [
  {
    name: "missile-trajectory-tracker",
    description:
      "Physics-based ballistic missile trajectory simulation with real-time visualisation. Models gravity, drag, and atmospheric effects.",
    tech: ["Python", "NumPy", "Matplotlib"],
    category: "university",
    url: "https://github.com/Max11122006/missile-trajectory-tracker",
  },
  {
    name: "portfolio-website-v2",
    description:
      "Personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4. You're looking at it right now.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "personal",
    url: "https://github.com/Max11122006/portfolio-website-v2",
  },
];

export const reposByCategory = {
  university: githubRepos.filter((r) => r.category === "university"),
  hackathon: githubRepos.filter((r) => r.category === "hackathon"),
  personal: githubRepos.filter((r) => r.category === "personal"),
};
