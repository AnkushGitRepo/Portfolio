import { Project, Skill, ContactFormData } from '@/types';

// Mock Projects
export const projects: Project[] = [
  {
    _id: '1',
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js and Express',
    image: '/images/projects/portfolio.jpg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/AnkushGitRepo/Portfolio',
    liveUrl: 'https://ankushgitrepo.github.io/Portfolio/',
    featured: true,
    category: 'web',
    createdAt: new Date().toISOString(),
  },
  {
    _id: '2',
    title: 'AI Project',
    description: 'An artificial intelligence project showcasing machine learning capabilities',
    image: '/images/projects/ai.jpg',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
    githubUrl: 'https://github.com/AnkushGitRepo/ai-project',
    liveUrl: 'https://example.com/ai-project',
    featured: true,
    category: 'ai',
    createdAt: new Date().toISOString(),
  },
];

// Mock Skills
export const skills: Skill[] = [
  {
    _id: '1',
    name: 'React',
    category: 'frontend',
    icon: 'react',
    proficiency: 90,
  },
  {
    _id: '2',
    name: 'Next.js',
    category: 'frontend',
    icon: 'nextjs',
    proficiency: 85,
  },
  {
    _id: '3',
    name: 'TypeScript',
    category: 'language',
    icon: 'typescript',
    proficiency: 80,
  },
  {
    _id: '4',
    name: 'Node.js',
    category: 'backend',
    icon: 'nodejs',
    proficiency: 85,
  },
  {
    _id: '5',
    name: 'Express',
    category: 'backend',
    icon: 'express',
    proficiency: 80,
  },
  {
    _id: '6',
    name: 'MongoDB',
    category: 'database',
    icon: 'mongodb',
    proficiency: 75,
  },
  {
    _id: '7',
    name: 'Python',
    category: 'language',
    icon: 'python',
    proficiency: 90,
  },
  {
    _id: '8',
    name: 'TensorFlow',
    category: 'ai',
    icon: 'tensorflow',
    proficiency: 80,
  },
  {
    _id: '9',
    name: 'PyTorch',
    category: 'ai',
    icon: 'pytorch',
    proficiency: 75,
  },
];

// Mock contact form submission
export const submitMockContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Always return success for mock data
  return {
    success: true,
    message: 'Thank you for your message! This is a mock response as the site is currently deployed on GitHub Pages without a backend server.',
  };
};
