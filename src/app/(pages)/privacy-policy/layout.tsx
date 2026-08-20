import type { Metadata } from "next";

const SITE_URL = "https://www.blissventures.co";

export const metadata: Metadata = {
  title: "Privacy Policy | Bliss Ventures",
  description:
    "Read the Privacy Policy of Bliss Ventures Private Limited and learn how we collect, use, protect, and manage personal information.",
  keywords: [
    "Bliss Ventures Privacy Policy",
    "Bliss Ventures privacy",
    "Bliss Ventures Hyderabad",
    "Bliss Ventures Private Limited",
  ],
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}