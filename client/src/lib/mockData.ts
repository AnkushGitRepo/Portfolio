import { Project, Skill, ContactFormData, SkillCategory } from '@/types';
import { getAssetPath } from './utils';

// Mock Projects
export const projects: Project[] = [
  {
    _id: '4',
    title: 'Pharmacy Management System',
    description: 'A console-based system using Java and PostgreSQL for managing drug inventory and transactions. This application helps pharmacies track inventory, manage prescriptions, and process sales.\n\nThe system includes features for user authentication, inventory management, sales tracking, and reporting.',
    image: getAssetPath('/images/projects/pharmacy-system.jpg'),
    technologies: ['Java', 'PostgreSQL', 'JDBC', 'Console App'],
    githubUrl: 'https://github.com/AnkushGitRepo/Pharmacy-Management-System',
    liveUrl: '',
    featured: true,
    category: 'Desktop Application',
    createdAt: new Date().toISOString(),
  },
];

// Mock Skills
export const skills: Skill[] = [
  // Languages
  {
    _id: '1',
    name: 'Java',
    category: SkillCategory.LANGUAGES,
    icon: '/images/skills/icons8-java.svg',
  },
  {
    _id: '2',
    name: 'Python',
    category: SkillCategory.LANGUAGES,
    icon: '/images/skills/icons8-python.svg',
  },
  {
    _id: '3',
    name: 'JavaScript',
    category: SkillCategory.LANGUAGES,
    icon: '/images/skills/icons8-javascript.svg',
  },
  {
    _id: '4',
    name: 'HTML',
    category: SkillCategory.LANGUAGES,
    icon: '/images/skills/icons8-html5.svg',
  },
  {
    _id: '5',
    name: 'CSS',
    category: SkillCategory.LANGUAGES,
    icon: '/images/skills/icons8-css.svg',
  },
  {
    _id: '6',
    name: 'TypeScript',
    category: SkillCategory.LANGUAGES,
    icon: '/images/skills/icons8-typescript.svg',
  },

  // Frameworks & Libraries
  {
    _id: '7',
    name: 'React',
    category: SkillCategory.FRAMEWORKS,
    icon: '/images/skills/icons8-react.svg',
  },
  {
    _id: '8',
    name: 'Node.js',
    category: SkillCategory.FRAMEWORKS,
    icon: '/images/skills/icons8-nodejs.svg',
  },
  {
    _id: '9',
    name: 'Express.js',
    category: SkillCategory.FRAMEWORKS,
    icon: '/images/skills/icons8-express-js.svg',
  },
  {
    _id: '10',
    name: 'Bootstrap',
    category: SkillCategory.FRAMEWORKS,
    icon: '/images/skills/icons8-bootstrap.svg',
  },
  {
    _id: '11',
    name: 'Tailwind CSS',
    category: SkillCategory.FRAMEWORKS,
    icon: '/images/skills/icons8-tailwind-css.svg',
  },

  // Databases
  {
    _id: '12',
    name: 'MySQL',
    category: SkillCategory.DATABASES,
    icon: '/images/skills/icons8-mysql.svg',
  },
  {
    _id: '13',
    name: 'PostgreSQL',
    category: SkillCategory.DATABASES,
    icon: '/images/skills/icons8-postgres.svg',
  },
  {
    _id: '14',
    name: 'MongoDB',
    category: SkillCategory.DATABASES,
    icon: '/images/skills/MongoDB.svg',
  },
  {
    _id: '15',
    name: 'Redis',
    category: SkillCategory.DATABASES,
    icon: '/images/skills/icons8-redis.svg',
  },

  // Tools & IDEs
  {
    _id: '16',
    name: 'Git',
    category: SkillCategory.TOOLS,
    icon: '/images/skills/icons8-git.svg',
  },
  {
    _id: '17',
    name: 'GitHub',
    category: SkillCategory.TOOLS,
    icon: '/images/skills/icons8-github.svg',
  },
  {
    _id: '18',
    name: 'VS Code',
    category: SkillCategory.TOOLS,
    icon: '/images/skills/icons8-visual-studio.svg',
  },
  {
    _id: '19',
    name: 'IntelliJ IDEA',
    category: SkillCategory.TOOLS,
    icon: '/images/skills/icons8-intellij-idea.svg',
  },
  {
    _id: '20',
    name: 'PyCharm',
    category: SkillCategory.TOOLS,
    icon: '/images/skills/icons8-pycharm.svg',
  },
  {
    _id: '21',
    name: 'WebStorm',
    category: SkillCategory.TOOLS,
    icon: '/images/skills/icons8-webstorm.svg',
  },
  {
    _id: '22',
    name: 'Jupyter',
    category: SkillCategory.TOOLS,
    icon: '/images/skills/icons8-jupyter.svg',
  },
  {
    _id: '23',
    name: 'Figma',
    category: SkillCategory.TOOLS,
    icon: '/images/skills/icons8-figma.svg',
  },
];

// Mock contact form submission
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const submitMockContactForm = async (_data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Always return success for mock data
  return {
    success: true,
    message: 'Thank you for your message! This is a mock response as the site is currently deployed on GitHub Pages without a backend server.',
  };
};
