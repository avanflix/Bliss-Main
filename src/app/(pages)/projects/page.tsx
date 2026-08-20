import type { Metadata } from 'next';
import ProjectsPageClient from './ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Projects | Bliss Ventures',
  description:
    'Explore residential and farmland projects by Bliss Ventures across Hyderabad and Telangana.',
  alternates: {
    canonical: 'https://www.blissventures.co/projects',
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}