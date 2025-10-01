import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// app/layout.js
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000');

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Subhan Nadeem',
  url: siteUrl,
  sameAs: [
    'https://github.com/Subhan2117',
    'https://www.linkedin.com/in/yourprofile',
  ],
  jobTitle: 'Full-Stack Developer',
  worksFor: { '@type': 'Organization', name: 'Independent' },
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Subhan Nadeem – Full-Stack Developer Portfolio',
  description:
    'Portfolio of Subhan Nadeem, a full-stack developer specializing in Next.js, Node.js, and PostgreSQL. Explore HireFlow, RE’s Hardware Store, and a React Movie SEO app.',

  openGraph: {
    title: 'Subhan Nadeem – Full-Stack Developer',
    description:
      'Explore projects including HireFlow, RE’s Hardware Store, and Movie App SEO. Built with Next.js, Node.js, PostgreSQL, Prisma, and Tailwind.',
    url: siteUrl,
    siteName: 'Subhan Portfolio',
    images: [
      {
        url: '/images/og-image.png', // place in /public/images/
        width: 1200,
        height: 630,
        alt: 'Subhan Nadeem Portfolio Preview',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />{' '}
        {children}
      </body>
    </html>
  );
}
