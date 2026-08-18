import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Events',
  description:
    'Stay updated with Bliss Ventures news, real estate developments, project updates, events, announcements and community initiatives across Hyderabad and Telangana.',

  keywords: [
    'Bliss Ventures news',
    'Bliss Ventures events',
    'Bliss Ventures updates',
    'real estate news Hyderabad',
    'property development Hyderabad',
    'Bliss Ventures projects updates',
  ],

  alternates: {
    canonical: '/news-events',
  },
};

export default function NewsEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}