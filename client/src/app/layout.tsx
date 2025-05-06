import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Ankush Gupta',
    default: 'Ankush Gupta | ML Engineer & Full Stack Developer',
  },
  description: 'Portfolio of Ankush Gupta, an ML Engineer and Full Stack Developer specializing in building exceptional digital experiences.',
  generator: 'Next.js',
  applicationName: 'Ankush Gupta Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['ML Engineer', 'Full Stack Developer', 'Portfolio', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Express'],
  authors: [{ name: 'Ankush Gupta' }],
  creator: 'Ankush Gupta',
  publisher: 'Ankush Gupta',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.yourportfolio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ankush Gupta | ML Engineer & Full Stack Developer',
    description: 'Portfolio of Ankush Gupta, an ML Engineer and Full Stack Developer specializing in building exceptional digital experiences.',
    url: 'https://www.yourportfolio.com',
    siteName: 'Ankush Gupta Portfolio',
    images: [
      {
        url: 'https://www.yourportfolio.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ankush Gupta Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankush Gupta | ML Engineer & Full Stack Developer',
    description: 'Portfolio of Ankush Gupta, an ML Engineer and Full Stack Developer specializing in building exceptional digital experiences.',
    creator: '@yourusername',
    images: ['https://www.yourportfolio.com/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
