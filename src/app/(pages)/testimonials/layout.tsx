import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Testimonials',
  description:
    'Read testimonials and experiences from customers and clients of Bliss Ventures and discover what they say about our residential projects, service and communities.',

  keywords: [
    'Bliss Ventures testimonials',
    'Bliss Ventures reviews',
    'Bliss Ventures customer reviews',
    'Bliss Ventures Hyderabad reviews',
    'real estate developer reviews Hyderabad',
  ],

  alternates: {
    canonical: '/testimonials',
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}