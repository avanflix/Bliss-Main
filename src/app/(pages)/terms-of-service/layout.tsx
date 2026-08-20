import type { Metadata } from "next";

const SITE_URL = "https://www.blissventures.co";

export const metadata: Metadata = {
  title: "Terms of Service | Bliss Ventures",
  description:
    "Read the Terms of Service of Bliss Ventures Private Limited governing the use of our website, services, and information.",
  keywords: [
    "Bliss Ventures Terms of Service",
    "Bliss Ventures terms and conditions",
    "Bliss Ventures Hyderabad",
    "Bliss Ventures Private Limited",
  ],
  alternates: {
    canonical: `${SITE_URL}/terms-of-service`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}