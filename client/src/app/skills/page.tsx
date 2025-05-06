import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import SkillsSection from '@/components/sections/SkillsSection';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Skills | Ankush Gupta',
  description: 'Explore the technical skills and expertise of Ankush Gupta in machine learning, web development, and more.',
  keywords: ['Skills', 'Technical Skills', 'ML', 'Web Development', 'Programming Languages', 'Frameworks'],
});

export default function SkillsPage() {
  return (
    <MainLayout>
      <SkillsSection />
    </MainLayout>
  );
}
