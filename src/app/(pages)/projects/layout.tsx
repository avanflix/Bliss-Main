import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects',
  description:
    'Explore residential communities, premium apartments and thoughtfully planned real estate projects by Bliss Ventures across Hyderabad and Telangana.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}