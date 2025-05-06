import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import ContactSection from '@/components/sections/ContactSection';
import { generateMetadata, generateStructuredData } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Contact | Ankush Gupta',
  description: 'Get in touch with Ankush Gupta for collaboration, job opportunities, or any inquiries.',
  keywords: ['Contact', 'Hire', 'Collaboration', 'Job Opportunity', 'Freelance'],
});

export default function ContactPage() {
  return (
    <MainLayout>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateStructuredData('WebSite', {
            name: 'Contact Ankush Gupta',
            url: 'https://ankushgitrepo.github.io/Portfolio/contact',
            description: 'Contact page for Ankush Gupta, an ML Engineer and Full Stack Developer.',
          }),
        }}
      />

      <ContactSection />
    </MainLayout>
  );
}
