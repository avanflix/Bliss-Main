import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Board Members',
  description:
    'Meet the leadership and board members of Bliss Ventures Private Limited, driving thoughtful real estate development and sustainable communities in Hyderabad and Telangana.',

  keywords: [
    'Bliss Ventures board members',
    'Bliss Ventures leadership',
    'Bliss Ventures management',
    'Bliss Ventures Hyderabad',
    'real estate developers Hyderabad',
  ],

  alternates: {
    canonical: '/board-members',
  },
};

export default function BoardMembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}