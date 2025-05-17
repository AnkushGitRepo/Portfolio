import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import { generateMetadata, generateStructuredData } from '@/lib/seo';
import { getAllCertifications } from '@/lib/apiWithFallback';
import CertificationsPageClient from '@/components/certifications/CertificationsPageClient';
import { ThemeColorProvider } from '@/components/theme-color-context';

export const metadata: Metadata = generateMetadata({
  title: 'Certifications | Ankush Gupta',
  description: 'Explore the certifications and credentials earned by Ankush Gupta in machine learning, web development, and cloud technologies.',
  keywords: ['Certifications', 'Credentials', 'ML Certifications', 'Web Development Certifications', 'Cloud Certifications'],
});

export default async function CertificationsPage() {
  const certifications = await getAllCertifications();

  return (
    <ThemeColorProvider>
      <MainLayout>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateStructuredData('WebSite', {
              name: 'Certifications | Ankush Gupta',
              url: 'https://ankushgitrepo.github.io/Portfolio/certifications',
              description: 'Explore the certifications and credentials earned by Ankush Gupta in machine learning, web development, and cloud technologies.',
            }),
          }}
        />
        <CertificationsPageClient certifications={certifications} />
      </MainLayout>
    </ThemeColorProvider>
  );
}
