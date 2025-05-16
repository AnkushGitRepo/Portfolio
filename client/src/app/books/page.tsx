import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import { generateMetadata, generateStructuredData } from '@/lib/seo';
import { getAllBooks } from '@/lib/apiWithFallback';
import BooksPageClient from '@/components/books/BooksPageClient';
import { ThemeColorProvider } from '@/components/theme-color-context';

export const metadata: Metadata = generateMetadata({
  title: 'Books | Ankush Gupta',
  description: 'Explore the books read by Ankush Gupta, along with reviews and recommendations.',
  keywords: ['Books', 'Reading List', 'Book Reviews', 'Book Recommendations', 'Personal Development'],
});

export default async function BooksPage() {
  const books = await getAllBooks();

  return (
    <ThemeColorProvider>
      <MainLayout>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateStructuredData('WebSite', {
              name: 'Books | Ankush Gupta',
              url: 'https://ankushgitrepo.github.io/Portfolio/books',
              description: 'Explore the books read by Ankush Gupta, along with reviews and recommendations.',
            }),
          }}
        />
        <BooksPageClient books={books} />
      </MainLayout>
    </ThemeColorProvider>
  );
}
