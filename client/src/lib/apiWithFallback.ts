import { Project, Skill, ContactFormData, Book, Certification } from '@/types';
import * as api from './api';
import { projects, skills, books, certifications, submitMockContactForm } from './mockData';
import { fetchGitHubRepos, convertReposToProjects } from './github';

// Check if we're running on GitHub Pages
const isGitHubPages = typeof window !== 'undefined' && window.location.hostname.includes('github.io');

// Projects API with fallback
export async function getAllProjects(): Promise<Project[]> {
  if (isGitHubPages) {
    // Try to fetch GitHub repos first
    try {
      const repos = await fetchGitHubRepos('AnkushGitRepo', true, 10);

      // Find special repositories
      const portfolioRepo = repos.find(repo => repo.name === 'Portfolio');
      const dataHarborRepo = repos.find(repo => repo.name === 'DataHarbor');

      // Get other repos excluding special ones
      const otherRepos = repos.filter(repo =>
        repo.name !== 'Portfolio' && repo.name !== 'DataHarbor'
      );

      // Create prioritized repo list
      const prioritizedRepos = [];
      if (portfolioRepo) prioritizedRepos.push(portfolioRepo);
      if (dataHarborRepo) prioritizedRepos.push(dataHarborRepo);

      // Convert repos to projects, prioritizing special repos
      const repoProjects = convertReposToProjects(
        [...prioritizedRepos, ...otherRepos]
      );

      // Combine with mock projects, prioritizing GitHub repos
      const combinedProjects = [...repoProjects];

      // Add mock projects that don't have the same name as any GitHub repo
      projects.forEach(mockProject => {
        if (!repoProjects.some(repoProject =>
          repoProject.title.toLowerCase() === mockProject.title.toLowerCase()
        )) {
          combinedProjects.push(mockProject);
        }
      });

      return combinedProjects;
    } catch (error) {
      console.warn('Failed to fetch GitHub repos, using mock data', error);
      return projects;
    }
  }

  try {
    return await api.getAllProjects();
  } catch (error) {
    console.warn('Failed to fetch projects from API, using mock data', error);

    // Try to fetch GitHub repos as a fallback
    try {
      const repos = await fetchGitHubRepos('AnkushGitRepo', true, 10);

      // Find special repositories
      const portfolioRepo = repos.find(repo => repo.name === 'Portfolio');
      const dataHarborRepo = repos.find(repo => repo.name === 'DataHarbor');

      // Get other repos excluding special ones
      const otherRepos = repos.filter(repo =>
        repo.name !== 'Portfolio' && repo.name !== 'DataHarbor'
      );

      // Create prioritized repo list
      const prioritizedRepos = [];
      if (portfolioRepo) prioritizedRepos.push(portfolioRepo);
      if (dataHarborRepo) prioritizedRepos.push(dataHarborRepo);

      // Convert repos to projects, prioritizing special repos
      const repoProjects = convertReposToProjects(
        [...prioritizedRepos, ...otherRepos]
      );

      return [...repoProjects, ...projects];
    } catch (githubError) {
      console.warn('Failed to fetch GitHub repos, using mock data only', githubError);
      return projects;
    }
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  if (isGitHubPages) {
    // Try to fetch GitHub repos first
    try {
      const repos = await fetchGitHubRepos('AnkushGitRepo', true, 6);

      // Find special repositories
      const portfolioRepo = repos.find(repo => repo.name === 'Portfolio');
      const dataHarborRepo = repos.find(repo => repo.name === 'DataHarbor');

      // Get other repos excluding special ones
      const otherRepos = repos.filter(repo =>
        repo.name !== 'Portfolio' && repo.name !== 'DataHarbor'
      );

      // Create prioritized repo list
      const prioritizedRepos = [];
      if (portfolioRepo) prioritizedRepos.push(portfolioRepo);
      if (dataHarborRepo) prioritizedRepos.push(dataHarborRepo);

      // Convert repos to projects, prioritizing special repos
      const repoProjects = convertReposToProjects(
        [...prioritizedRepos, ...otherRepos]
      );

      // Get featured mock projects
      const featuredMockProjects = projects.filter(project => project.featured);

      // Combine, prioritizing GitHub repos
      const combinedProjects = [...repoProjects];

      // Add featured mock projects that don't have the same name as any GitHub repo
      featuredMockProjects.forEach(mockProject => {
        if (!repoProjects.some(repoProject =>
          repoProject.title.toLowerCase() === mockProject.title.toLowerCase()
        )) {
          combinedProjects.push(mockProject);
        }
      });

      // Return only the top 6 projects
      return combinedProjects.slice(0, 6);
    } catch (error) {
      console.warn('Failed to fetch GitHub repos, using mock data', error);
      return projects.filter(project => project.featured);
    }
  }

  try {
    return await api.getFeaturedProjects();
  } catch (error) {
    console.warn('Failed to fetch featured projects from API, using mock data', error);

    // Try to fetch GitHub repos as a fallback
    try {
      const repos = await fetchGitHubRepos('AnkushGitRepo', true, 6);

      // Find special repositories
      const portfolioRepo = repos.find(repo => repo.name === 'Portfolio');
      const dataHarborRepo = repos.find(repo => repo.name === 'DataHarbor');

      // Get other repos excluding special ones
      const otherRepos = repos.filter(repo =>
        repo.name !== 'Portfolio' && repo.name !== 'DataHarbor'
      );

      // Create prioritized repo list
      const prioritizedRepos = [];
      if (portfolioRepo) prioritizedRepos.push(portfolioRepo);
      if (dataHarborRepo) prioritizedRepos.push(dataHarborRepo);

      // Convert repos to projects, prioritizing special repos
      const repoProjects = convertReposToProjects(
        [...prioritizedRepos, ...otherRepos]
      );

      const featuredMockProjects = projects.filter(project => project.featured);

      // Combine and limit to 6 projects
      return [...repoProjects, ...featuredMockProjects].slice(0, 6);
    } catch (githubError) {
      console.warn('Failed to fetch GitHub repos, using mock data only', githubError);
      return projects.filter(project => project.featured);
    }
  }
}

export async function getProjectById(id: string): Promise<Project> {
  if (isGitHubPages) {
    // First check if it's a GitHub repo (GitHub repo IDs are numeric)
    if (!isNaN(Number(id))) {
      try {
        // Fetch all repos and find the matching one
        const repos = await fetchGitHubRepos('AnkushGitRepo', true, 100);
        const repo = repos.find(r => r.id.toString() === id);

        if (repo) {
          const [repoProject] = convertReposToProjects([repo]);
          return repoProject;
        }
      } catch (error) {
        console.warn(`Failed to fetch GitHub repo with ID ${id}`, error);
      }
    }

    // If not found in GitHub repos or if there was an error, check mock projects
    const project = projects.find(p => p._id === id);
    if (!project) {
      throw new Error('Project not found');
    }
    return project;
  }

  try {
    return await api.getProjectById(id);
  } catch (error) {
    console.warn(`Failed to fetch project ${id} from API, using mock data`, error);

    // Try GitHub repos first
    if (!isNaN(Number(id))) {
      try {
        const repos = await fetchGitHubRepos('AnkushGitRepo', true, 100);
        const repo = repos.find(r => r.id.toString() === id);

        if (repo) {
          const [repoProject] = convertReposToProjects([repo]);
          return repoProject;
        }
      } catch (githubError) {
        console.warn(`Failed to fetch GitHub repo with ID ${id}`, githubError);
      }
    }

    // Fall back to mock projects
    const project = projects.find(p => p._id === id);
    if (!project) {
      throw new Error('Project not found');
    }
    return project;
  }
}

// Skills API with fallback
export async function getAllSkills(): Promise<Skill[]> {
  if (isGitHubPages) {
    return skills;
  }

  try {
    return await api.getAllSkills();
  } catch (error) {
    console.warn('Failed to fetch skills from API, using mock data', error);
    return skills;
  }
}

export async function getSkillsByCategory(category: string): Promise<Skill[]> {
  if (isGitHubPages) {
    return skills.filter(skill => skill.category === category);
  }

  try {
    return await api.getSkillsByCategory(category);
  } catch (error) {
    console.warn(`Failed to fetch ${category} skills from API, using mock data`, error);
    return skills.filter(skill => skill.category === category);
  }
}

// Books API with fallback
export async function getAllBooks(): Promise<Book[]> {
  if (isGitHubPages) {
    return books;
  }

  try {
    return await api.getAllBooks();
  } catch (error) {
    console.warn('Failed to fetch books from API, using mock data', error);
    return books;
  }
}

export async function getBookById(id: string): Promise<Book> {
  if (isGitHubPages) {
    const book = books.find(b => b._id === id);
    if (!book) {
      throw new Error('Book not found');
    }
    return book;
  }

  try {
    return await api.getBookById(id);
  } catch (error) {
    console.warn(`Failed to fetch book with ID ${id} from API, using mock data`, error);
    const book = books.find(b => b._id === id);
    if (!book) {
      throw new Error('Book not found');
    }
    return book;
  }
}

// Certifications API with fallback
export async function getAllCertifications(): Promise<Certification[]> {
  if (isGitHubPages) {
    return certifications;
  }

  try {
    return await api.getAllCertifications();
  } catch (error) {
    console.warn('Failed to fetch certifications from API, using mock data', error);
    return certifications;
  }
}

// Contact API with fallback
export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  if (isGitHubPages) {
    return submitMockContactForm(data);
  }

  try {
    return await api.submitContactForm(data);
  } catch (error) {
    console.warn('Failed to submit contact form to API, using mock handler', error);
    return submitMockContactForm(data);
  }
}
