import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import AboutSection from '@/components/sections/AboutSection';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'About | Ankush Gupta',
  description: 'Learn more about Ankush Gupta, an ML Engineer and Full Stack Developer with expertise in building intelligent and user-friendly applications.',
  keywords: ['About Ankush Gupta', 'ML Engineer', 'Full Stack Developer', 'Experience', 'Education'],
});

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutSection />
    </MainLayout>
  );
}
