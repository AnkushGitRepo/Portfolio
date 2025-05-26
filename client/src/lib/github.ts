// GitHub API integration
import { getAssetPath } from "./utils";
import { Project } from "@/types";

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  fork: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string | null;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  forks_count: number;
  topics: string[];
}

/**
 * Fetches repositories from a GitHub user
 * @param username GitHub username
 * @param excludeForks Whether to exclude forked repositories
 * @param limit Maximum number of repositories to return
 * @returns Array of repositories
 */
export async function fetchGitHubRepos(
  username: string = "AnkushGitRepo",
  excludeForks: boolean = true,
  limit: number = 10
): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    let repos: GitHubRepo[] = await response.json();

    // Filter out forks if requested
    if (excludeForks) {
      repos = repos.filter((repo) => !repo.fork);
    }

    // Filter out specific repositories
    const excludedRepos = [
      "MERN-Sandbox",
      "MERN Sandbox",
      "DSA",
      "AnkushGitRepo",
      "Pharmacy-Management-System",
      "Currency_Converter_Using_Core_Java",
      "Currency Converter",
    ];
    repos = repos.filter(
      (repo) =>
        !excludedRepos.some(
          (excluded) =>
            repo.name.toLowerCase() === excluded.toLowerCase() ||
            repo.name.toLowerCase().replace(/-/g, " ") ===
              excluded.toLowerCase() ||
            repo.name.toLowerCase().replace(/_/g, " ") ===
              excluded.toLowerCase()
        )
    );

    // Sort by most recently updated
    repos.sort(
      (a, b) =>
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    );

    // Limit the number of repos
    return repos.slice(0, limit);
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

/**
 * Converts GitHub repositories to project format
 * @param repos GitHub repositories
 * @returns Array of projects
 */
export function convertReposToProjects(repos: GitHubRepo[]): Project[] {
  return repos.map((repo) => {
    // Special handling for Portfolio repository
    if (repo.name === "Portfolio") {
      return {
        _id: repo.id.toString(),
        title: "Portfolio Website",
        description:
          "A modern portfolio website built with Next.js and Express. This project showcases my skills in full-stack development, responsive design, and modern web technologies.\n\nThe website features a clean, minimalist design with animated backgrounds and color themes that change dynamically. It includes sections for projects, skills, and contact information.",
        image: `${getAssetPath(
          "/images/projects/Portfolio_1.png"
        )}, ${getAssetPath("/images/projects/Portfolio_2.png")}, ${getAssetPath(
          "/images/projects/Portfolio_3.png"
        )}`,
        technologies: [
          "Next.js",
          "React",
          "TypeScript",
          "Express",
          "MongoDB",
          "Tailwind CSS",
        ],
        githubUrl: repo.html_url,
        liveUrl: repo.homepage || "https://ankushgitrepo.github.io/Portfolio/",
        featured: true,
        category: "Web Development",
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
      };
    }

    // Special handling for DataHarbor repository
    if (repo.name === "DataHarbor") {
      return {
        _id: repo.id.toString(),
        title: "DataHarbor",
        description:
          repo.description ||
          "A comprehensive data management and analytics platform. DataHarbor provides tools for data collection, processing, and visualization.\n\nBuilt with modern technologies, this project demonstrates advanced data handling capabilities and user-friendly interfaces.",
        image: `${getAssetPath(
          "/images/projects/Dataharbor_1.png"
        )}, ${getAssetPath(
          "/images/projects/Dataharbor_2.png"
        )}, ${getAssetPath("/images/projects/Dataharbor_3.png")}`,
        technologies:
          repo.topics?.length > 0
            ? repo.topics.map(
                (topic) => topic.charAt(0).toUpperCase() + topic.slice(1)
              )
            : repo.language
            ? [repo.language]
            : ["Python", "Data Science", "Analytics"],
        githubUrl: repo.html_url,
        liveUrl: repo.homepage || "",
        featured: true,
        category: "Data Science",
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
      };
    }

    // Special handling for Resume Builder repository
    if (repo.name === "Resume-Builder") {
      return {
        _id: repo.id.toString(),
        title: "Resume Builder",
        description:
          repo.description ||
          "Resume Builder is an interactive web application that helps users create professional resumes quickly and easily.",
        image: `${getAssetPath(
          "/images/projects/Resume_Builder_1.png"
        )}, ${getAssetPath(
          "/images/projects/Resume_Builder_2.png"
        )}, ${getAssetPath("/images/projects/Resume_Builder_3.png")}`,
        technologies:
          repo.topics?.length > 0
            ? repo.topics.map(
                (topic) => topic.charAt(0).toUpperCase() + topic.slice(1)
              )
            : repo.language
            ? [repo.language]
            : ["HTML", "CSS", "Javascript"],
        githubUrl: repo.html_url,
        liveUrl: repo.homepage || "",
        featured: true,
        category: "Web Development",
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
      };
    }

    // Special handling for Periodic Table repository
    if (repo.name === "Periodic-Table") {
      return {
        _id: repo.id.toString(),
        title: "Periodic Table",
        description:
          repo.description ||
          "Interactive Periodic Table Explorer: Discover elements with detailed info, dynamic filters, responsive design, and dedicated pages for each element.",
        image: `${getAssetPath(
          "/images/projects/Periodic_Table_1.png"
        )}, ${getAssetPath(
          "/images/projects/Periodic_Table_2.png"
        )}, ${getAssetPath("/images/projects/Periodic_Table_3.png")}`,
        technologies:
          repo.topics?.length > 0
            ? repo.topics.map(
                (topic) => topic.charAt(0).toUpperCase() + topic.slice(1)
              )
            : repo.language
            ? [repo.language]
            : ["HTML", "CSS", "Javascript"],
        githubUrl: repo.html_url,
        liveUrl: repo.homepage || "",
        featured: true,
        category: "Web Development",
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
      };
    }

    // Extract technologies from topics or use language as fallback
    const technologies =
      repo.topics?.length > 0
        ? repo.topics.map(
            (topic) => topic.charAt(0).toUpperCase() + topic.slice(1)
          )
        : repo.language
        ? [repo.language]
        : ["Other"];

    // Add a dummy image to all projects
    const dummyImage = getAssetPath("/images/projects/github-repo.jpg");

    return {
      _id: repo.id.toString(),
      title: repo.name.replace(/-/g, " ").replace(/_/g, " "),
      description:
        repo.description || `A ${repo.language || "code"} repository.`,
      image: dummyImage,
      technologies,
      githubUrl: repo.html_url,
      liveUrl: repo.homepage || "",
      featured: repo.stargazers_count > 0,
      category: repo.language || "Other",
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
    };
  });
}
