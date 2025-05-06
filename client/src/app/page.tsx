import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/sections/HeroSection';
import { generateMetadata, generateStructuredData } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Ankush Gupta | ML Engineer & Full Stack Developer',
  description: 'Portfolio of Ankush Gupta, an ML Engineer and Full Stack Developer specializing in building exceptional digital experiences.',
  keywords: ['ML Engineer', 'Full Stack Developer', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Express'],
});

export default function Home() {
  return (
    <MainLayout>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateStructuredData('Person', {
            name: 'Ankush Gupta',
            url: 'https://www.yourportfolio.com',
            jobTitle: 'ML Engineer & Full Stack Developer',
            image: 'https://www.yourportfolio.com/images/profile.jpg',
            socialLinks: [
              'https://github.com/yourusername',
              'https://linkedin.com/in/yourusername',
              'https://twitter.com/yourusername',
            ],
            description: 'ML Engineer and Full Stack Developer specializing in building exceptional digital experiences.',
          }),
        }}
      />

      <HeroSection />
    </MainLayout>
  );
}
