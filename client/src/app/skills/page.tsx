import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import SkillsSection from '@/components/sections/SkillsSection';
import { generateMetadata, generateStructuredData } from '@/lib/seo';
import { ThemeColorProvider } from '@/components/theme-color-context';

export const metadata: Metadata = generateMetadata({
  title: 'Skills | Ankush Gupta',
  description: 'Explore the technical skills and expertise of Ankush Gupta in machine learning, web development, and more.',
  keywords: ['Skills', 'Technical Skills', 'ML', 'Web Development', 'Programming Languages', 'Frameworks'],
});

export default function SkillsPage() {
  return (
    <ThemeColorProvider>
      <MainLayout>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateStructuredData('WebSite', {
              name: 'Skills | Ankush Gupta',
              url: 'https://ankushgitrepo.github.io/Portfolio/skills',
              description: 'Explore the technical skills and expertise of Ankush Gupta in machine learning, web development, and more.',
            }),
          }}
        />
        <SkillsSection />
      </MainLayout>
    </ThemeColorProvider>
  );
}
