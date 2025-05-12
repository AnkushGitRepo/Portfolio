import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import AboutSection from '@/components/sections/AboutSection';
import { generateMetadata, generateStructuredData } from '@/lib/seo';
import { ThemeColorProvider } from '@/components/theme-color-context';

export const metadata: Metadata = generateMetadata({
  title: 'About | Ankush Gupta',
  description: 'Learn more about Ankush Gupta, an ML Engineer and Full Stack Developer with expertise in building intelligent and user-friendly applications.',
  keywords: ['About Ankush Gupta', 'ML Engineer', 'Full Stack Developer', 'Experience', 'Education'],
});

export default function AboutPage() {
  return (
    <ThemeColorProvider>
      <MainLayout>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateStructuredData('WebSite', {
              name: 'About Ankush Gupta',
              url: 'https://ankushgitrepo.github.io/Portfolio/about',
              description: 'About page for Ankush Gupta, an ML Engineer and Full Stack Developer.',
            }),
          }}
        />
        <AboutSection />
      </MainLayout>
    </ThemeColorProvider>
  );
}
