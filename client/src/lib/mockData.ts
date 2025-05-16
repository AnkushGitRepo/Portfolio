import { Project, Skill, ContactFormData, SkillCategory, Book } from '@/types';
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

// Mock Books
export const books: Book[] = [
  {
    _id: '1',
    title: 'Atomic Habits',
    author: 'James Clear',
    image: getAssetPath('/placeholder.svg'),
    coverImage: getAssetPath('/placeholder.svg'),
    description: 'An easy and proven way to build good habits and break bad ones.',
    review: 'This book changed my perspective on how habits form and how small changes can lead to remarkable results. The 1% improvement philosophy is something I apply daily.',
    rating: 5,
    genre: ['Self-Help', 'Psychology', 'Productivity'],
    publishedYear: 2018,
    readDate: '2022-06-15',
    amazonLink: 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299',
    goodreadsLink: 'https://www.goodreads.com/book/show/40121378-atomic-habits',
    order: 1,
    createdAt: new Date().toISOString(),
  },
  {
    _id: '2',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    image: getAssetPath('/placeholder.svg'),
    coverImage: getAssetPath('/placeholder.svg'),
    description: 'A groundbreaking narrative of humanity\'s creation and evolution that explores how biology and history have defined us.',
    review: 'Harari\'s ability to connect historical dots and present a cohesive narrative of human history is remarkable. This book made me question many assumptions about society and human progress.',
    rating: 5,
    genre: ['History', 'Anthropology', 'Science'],
    publishedYear: 2011,
    readDate: '2021-08-20',
    amazonLink: 'https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095',
    goodreadsLink: 'https://www.goodreads.com/book/show/23692271-sapiens',
    order: 2,
    createdAt: new Date().toISOString(),
  },
  {
    _id: '3',
    title: 'Deep Work',
    author: 'Cal Newport',
    image: getAssetPath('/placeholder.svg'),
    coverImage: getAssetPath('/placeholder.svg'),
    description: 'Rules for focused success in a distracted world.',
    review: 'In an age of constant distraction, Newport\'s concept of deep work has been transformative for my productivity. The practical strategies for achieving focused work have helped me accomplish more meaningful tasks.',
    rating: 4,
    genre: ['Productivity', 'Business', 'Self-Help'],
    publishedYear: 2016,
    readDate: '2022-01-10',
    amazonLink: 'https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692',
    goodreadsLink: 'https://www.goodreads.com/book/show/25744928-deep-work',
    order: 3,
    createdAt: new Date().toISOString(),
  },
  {
    _id: '4',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    image: getAssetPath('/placeholder.svg'),
    coverImage: getAssetPath('/placeholder.svg'),
    description: 'Timeless lessons on wealth, greed, and happiness.',
    review: 'Housel presents financial concepts through compelling stories that highlight how psychology affects our financial decisions. The book changed how I think about money, success, and happiness.',
    rating: 5,
    genre: ['Finance', 'Psychology', 'Economics'],
    publishedYear: 2020,
    readDate: '2022-11-05',
    amazonLink: 'https://www.amazon.com/Psychology-Money-Timeless-lessons-happiness/dp/0857197681',
    goodreadsLink: 'https://www.goodreads.com/book/show/41881472-the-psychology-of-money',
    order: 4,
    createdAt: new Date().toISOString(),
  },
  {
    _id: '5',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    image: getAssetPath('/placeholder.svg'),
    coverImage: getAssetPath('/placeholder.svg'),
    description: 'A groundbreaking tour of the mind explaining the two systems that drive the way we think.',
    review: 'Kahneman\'s exploration of cognitive biases and the two systems of thinking provides profound insights into human decision-making. This book has made me more aware of my own thinking patterns and biases.',
    rating: 5,
    genre: ['Psychology', 'Economics', 'Science'],
    publishedYear: 2011,
    readDate: '2021-03-15',
    amazonLink: 'https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555',
    goodreadsLink: 'https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow',
    order: 5,
    createdAt: new Date().toISOString(),
  },
  {
    _id: '6',
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    image: getAssetPath('/placeholder.svg'),
    coverImage: getAssetPath('/placeholder.svg'),
    description: 'From the Big Bang to Black Holes.',
    review: 'Hawking\'s ability to explain complex cosmological concepts in accessible language is remarkable. This book sparked my interest in physics and the universe\'s mysteries.',
    rating: 4,
    genre: ['Science', 'Physics', 'Cosmology'],
    publishedYear: 1988,
    readDate: '2020-07-22',
    amazonLink: 'https://www.amazon.com/Brief-History-Time-Stephen-Hawking/dp/0553380168',
    goodreadsLink: 'https://www.goodreads.com/book/show/3869.A_Brief_History_of_Time',
    order: 6,
    createdAt: new Date().toISOString(),
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
