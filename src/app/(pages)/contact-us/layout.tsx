import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Bliss Ventures',
  description:
    'Contact Bliss Ventures Private Limited to learn more about our residential projects, premium apartments, investment opportunities and upcoming developments in Hyderabad and Telangana.',

  keywords: [
    'contact Bliss Ventures',
    'Bliss Ventures contact',
    'Bliss Ventures Hyderabad contact',
    'real estate developers Hyderabad contact',
    'apartments Hyderabad enquiry',
    'property enquiry Hyderabad',
  ],

  alternates: {
    canonical: '/contact-us',
  },
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}