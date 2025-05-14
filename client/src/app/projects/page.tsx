import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import { generateMetadata } from '@/lib/seo';
import { getAllProjects } from '@/lib/apiWithFallback';
import ProjectsPageClient from '@/components/projects/ProjectsPageClient';
import { ThemeColorProvider } from '@/components/theme-color-context';

export const metadata: Metadata = generateMetadata({
  title: 'Projects | Ankush Gupta',
  description: 'Explore the projects developed by Ankush Gupta, showcasing expertise in machine learning, web development, and more.',
  keywords: ['Projects', 'Portfolio', 'ML Projects', 'Web Development', 'Full Stack Projects'],
});

async function getProjects() {
  try {
    return await getAllProjects();
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <ThemeColorProvider>
      <MainLayout>
        <ProjectsPageClient projects={projects} />
      </MainLayout>
    </ThemeColorProvider>
  );
}
