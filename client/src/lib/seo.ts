import { Metadata } from 'next';
import { getAssetPath } from './utils';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage = getAssetPath('/images/og-image.jpg'),
  ogType = 'website',
  twitterCard = 'summary_large_image',
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: ogType,
    },
    twitter: {
      card: twitterCard,
      title,
      description,
      images: [ogImage],
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function generateStructuredData(type: 'Person' | 'WebSite' | 'Project', data: Record<string, any>): string {
  let structuredData;

  switch (type) {
    case 'Person':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: data.name,
        url: data.url,
        jobTitle: data.jobTitle,
        image: data.image,
        sameAs: data.socialLinks,
        description: data.description,
      };
      break;
    case 'WebSite':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: data.name,
        url: data.url,
        description: data.description,
      };
      break;
    case 'Project':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: data.title,
        description: data.description,
        applicationCategory: 'WebApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      };
      break;
    default:
      structuredData = {};
  }

  return JSON.stringify(structuredData);
}
