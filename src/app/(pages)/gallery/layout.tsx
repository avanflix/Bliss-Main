import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Explore photos and visuals from Bliss Ventures residential projects, communities, developments, events and real estate initiatives across Hyderabad and Telangana.',

  keywords: [
    'Bliss Ventures gallery',
    'Bliss Ventures projects photos',
    'Bliss Ventures Hyderabad',
    'residential projects Hyderabad photos',
    'apartments Hyderabad gallery',
    'real estate Hyderabad projects',
  ],

  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}