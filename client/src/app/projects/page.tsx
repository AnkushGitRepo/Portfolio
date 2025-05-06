import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import { generateMetadata } from '@/lib/seo';
import { getAllProjects } from '@/lib/api';
import Image from 'next/image';

export const metadata: Metadata = generateMetadata({
  title: 'Projects | Ankush Gupta',
  description: 'Explore the projects developed by Ankush Gupta, showcasing expertise in machine learning, web development, and more.',
  keywords: ['Projects', 'Portfolio', 'ML Projects', 'Web Development', 'Full Stack Projects'],
});

async function getProjects() {
  try {
    // For development, use mock data instead of API call
    // return await getAllProjects();
    return [
      {
        _id: '1',
        title: 'Machine Learning Dashboard',
        description: 'A dashboard for visualizing machine learning model performance metrics.',
        image: '/images/project1.jpg',
        technologies: ['React', 'Python', 'TensorFlow', 'D3.js'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        featured: true,
        order: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        _id: '2',
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce platform with payment processing and inventory management.',
        image: '/images/project2.jpg',
        technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        featured: true,
        order: 2,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        _id: '3',
        title: 'Real-time Chat Application',
        description: 'A real-time chat application with private messaging and group chat functionality.',
        image: '/images/project3.jpg',
        technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        featured: true,
        order: 3,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        _id: '4',
        title: 'Personal Finance Tracker',
        description: 'A web application to track personal finances, expenses, and savings goals.',
        image: '/images/project4.jpg',
        technologies: ['React', 'Firebase', 'Chart.js', 'Tailwind CSS'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        featured: false,
        order: 4,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        _id: '5',
        title: 'Weather Forecast App',
        description: 'A weather forecast application with location-based services and interactive maps.',
        image: '/images/project5.jpg',
        technologies: ['React Native', 'OpenWeatherMap API', 'Google Maps API'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        featured: false,
        order: 5,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        _id: '6',
        title: 'Task Management System',
        description: 'A task management system with team collaboration features and progress tracking.',
        image: '/images/project6.jpg',
        technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        featured: false,
        order: 6,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <MainLayout>
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A collection of my work that demonstrates my skills and experience.
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          {projects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">No projects found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project._id}
                  className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
                >
                  <div className="relative h-48 bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <span className="text-blue-800 dark:text-blue-200 text-lg font-medium">{project.title} Image</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
