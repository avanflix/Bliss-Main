import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Blogs',
  description:
    'Read the latest real estate insights, property trends, home buying guidance, residential development updates and community living articles from Bliss Ventures.',

  keywords: [
    'Bliss Ventures blog',
    'real estate blog Hyderabad',
    'property trends Hyderabad',
    'real estate insights Hyderabad',
    'home buying Hyderabad',
    'apartments Hyderabad blog',
    'property investment Hyderabad',
  ],

  alternates: {
    canonical: 'https://www.blissventures.co/blogs',
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}