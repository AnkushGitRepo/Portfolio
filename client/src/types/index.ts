export interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  order?: number;
  category?: string;
  createdAt: string;
  updatedAt?: string;
}

export enum SkillCategory {
  LANGUAGES = 'Languages',
  FRAMEWORKS = 'Frameworks & Libraries',
  DATABASES = 'Databases',
  TOOLS = 'Tools & IDEs',
}

export interface Skill {
  _id: string;
  name: string;
  icon: string;
  category: SkillCategory;
  proficiency?: number;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
}

export enum ContactReason {
  JOB_OPPORTUNITY = 'Job Opportunity',
  PROJECT_COLLABORATION = 'Project Collaboration',
  CONSULTING = 'Consulting',
  GENERAL_INQUIRY = 'General Inquiry',
  OTHER = 'Other'
}

export interface ContactFormData {
  name: string;
  email: string;
  contactReason: ContactReason;
  message: string;
}
