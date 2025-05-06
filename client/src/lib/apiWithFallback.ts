import { Project, Skill, ContactFormData } from '@/types';
import * as api from './api';
import { projects, skills, submitMockContactForm } from './mockData';

// Check if we're running on GitHub Pages
const isGitHubPages = typeof window !== 'undefined' && window.location.hostname.includes('github.io');

// Projects API with fallback
export async function getAllProjects(): Promise<Project[]> {
  if (isGitHubPages) {
    return projects;
  }
  
  try {
    return await api.getAllProjects();
  } catch (error) {
    console.warn('Failed to fetch projects from API, using mock data', error);
    return projects;
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  if (isGitHubPages) {
    return projects.filter(project => project.featured);
  }
  
  try {
    return await api.getFeaturedProjects();
  } catch (error) {
    console.warn('Failed to fetch featured projects from API, using mock data', error);
    return projects.filter(project => project.featured);
  }
}

export async function getProjectById(id: string): Promise<Project> {
  if (isGitHubPages) {
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
