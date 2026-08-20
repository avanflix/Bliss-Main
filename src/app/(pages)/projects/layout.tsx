import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects',
  description:
    'Explore residential communities, premium apartments and thoughtfully planned real estate projects by Bliss Ventures across Hyderabad and Telangana.',
  keywords: [
    'Bliss Ventures projects',
    'real estate projects in Hyderabad',
    'residential projects in Hyderabad',
    'apartments in Hyderabad',
    'gated community projects Hyderabad',
    'premium residential projects Hyderabad',
    'real estate projects Telangana',
  ],
  alternates: {
    canonical: 'https://www.blissventures.co/projects',
  },
  openGraph: {
    title: 'Our Projects | Bliss Ventures',
    description:
      'Explore premium residential projects and thoughtfully planned real estate developments by Bliss Ventures across Hyderabad and Telangana.',
    url: '/projects',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bliss Ventures Projects',
      },
    ],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}