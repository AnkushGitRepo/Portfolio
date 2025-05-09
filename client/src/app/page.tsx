import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/sections/HeroSection';
import InfoCards from '@/components/sections/InfoCards';
import ScrollingSkills from '@/components/sections/ScrollingSkills';
import HomeContactSection from '@/components/sections/HomeContactSection';
import { generateMetadata, generateStructuredData } from '@/lib/seo';
import { ThemeColorProvider } from '@/components/theme-color-context';

export const metadata: Metadata = generateMetadata({
  title: 'Ankush Gupta | ML Engineer & Full Stack Developer',
  description: 'Portfolio of Ankush Gupta, an ML Engineer and Full Stack Developer specializing in building exceptional digital experiences.',
  keywords: ['ML Engineer', 'Full Stack Developer', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Express'],
});

export default function Home() {
  return (
    <ThemeColorProvider>
      <MainLayout>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateStructuredData('Person', {
              name: 'Ankush Gupta',
              url: 'https://ankushgitrepo.github.io/Portfolio',
              jobTitle: 'ML Engineer & Full Stack Developer',
              image: `${process.env.NODE_ENV === 'production' ? 'https://ankushgitrepo.github.io' : ''}/Portfolio/images/profile_icon_image.png`,
              socialLinks: [
                'https://github.com/AnkushGitRepo',
                'https://linkedin.com/in/ankushgupta18',
                'https://instagram.com/_ankushg',
              ],
              description: 'ML Engineer and Full Stack Developer specializing in building exceptional digital experiences.',
            }),
          }}
        />

        <HeroSection />
        <InfoCards />
        <ScrollingSkills />
        <HomeContactSection />
      </MainLayout>
    </ThemeColorProvider>
  );
}
