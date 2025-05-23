import { Project, Skill, ContactFormData, Book, Certification } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Projects API
export async function getAllProjects(): Promise<Project[]> {
  const response = await fetch(`${API_URL}/projects`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const response = await fetch(`${API_URL}/projects/featured`);
  if (!response.ok) {
    throw new Error('Failed to fetch featured projects');
  }
  return response.json();
}

export async function getProjectById(id: string): Promise<Project> {
  const response = await fetch(`${API_URL}/projects/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch project');
  }
  return response.json();
}

// Skills API
export async function getAllSkills(): Promise<Skill[]> {
  const response = await fetch(`${API_URL}/skills`);
  if (!response.ok) {
    throw new Error('Failed to fetch skills');
  }
  return response.json();
}

export async function getSkillsByCategory(category: string): Promise<Skill[]> {
  const response = await fetch(`${API_URL}/skills/category/${category}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${category} skills`);
  }
  return response.json();
}

// Books API
export async function getAllBooks(): Promise<Book[]> {
  const response = await fetch(`${API_URL}/books`);
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  return response.json();
}

export async function getBookById(id: string): Promise<Book> {
  const response = await fetch(`${API_URL}/books/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch book');
  }
  return response.json();
}

// Contact API
export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to submit contact form');
  }

  return response.json();
}

// Certifications API
export async function getAllCertifications(): Promise<Certification[]> {
  const response = await fetch(`${API_URL}/certifications`);
  if (!response.ok) {
    throw new Error('Failed to fetch certifications');
  }
  return response.json();
}
