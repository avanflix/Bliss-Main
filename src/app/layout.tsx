import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import FloatingActionButtons from "@/components/FloatingActionButtons";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blissventures.co"),

  title: {
    default: "Bliss Ventures | Premium Gated Community Apartments in Hyderabad",
    template: "%s | Bliss Ventures",
  },

  description:
    "Bliss Ventures is a trusted real estate developer in Hyderabad, offering thoughtfully designed premium gated community apartments with world-class amenities, exceptional connectivity, and sustainable living. Discover Bliss One in Ghatkesar.",

  keywords: [
    "Bliss Ventures",
    "Bliss Ventures Hyderabad",
    "Bliss One",
    "Apartments in Hyderabad",
    "Apartments in Ghatkesar",
    "Premium Apartments Hyderabad",
    "2 BHK Apartments Hyderabad",
    "3 BHK Apartments Hyderabad",
    "Luxury Apartments Hyderabad",
    "Gated Community Hyderabad",
    "Residential Projects Hyderabad",
    "Property in Ghatkesar",
    "Real Estate Hyderabad",
    "Apartments Near ORR Hyderabad",
    "Yamnampet Apartments",
  ],

  authors: [
    {
      name: "Bliss Ventures",
      url: "https://blissventures.co",
    },
  ],

  creator: "Bliss Ventures",
  publisher: "Bliss Ventures",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://blissventures.co",
    siteName: "Bliss Ventures",

    title: "Bliss Ventures | Premium Gated Community Apartments in Hyderabad",

    description:
      "Explore premium 2 & 3 BHK apartments by Bliss Ventures in Ghatkesar, Hyderabad. Experience modern living with world-class amenities and excellent connectivity.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bliss Ventures",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bliss Ventures | Premium Apartments in Hyderabad",

    description:
      "Discover thoughtfully designed gated community apartments by Bliss Ventures in Hyderabad.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "Real Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <meta
            name="google-site-verification"
            content="zScuppe2wZNvfSGo9Zat0cRlXFqLoMfnc6irdgBTEEw"
          />

          <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    "@id": "https://blissventures.co/#organization",
                    name: "Bliss Ventures",
                    url: "https://blissventures.co",
                    logo: "https://blissventures.co/logo.png",
                    image: "https://blissventures.co/og-image.jpg",
                    description:
                      "Bliss Ventures is a trusted real estate developer in Hyderabad, offering premium gated community apartments with modern amenities and sustainable living.",
                    sameAs: [
                      "https://www.instagram.com/blissventures_pvt.ltd/",
                      "https://www.facebook.com/people/Bliss-Ventures/100092061741531/",
                      "https://www.linkedin.com/company/bliss-ventures/",
                      "https://x.com/blissventuresin",
                    ],
                    contactPoint: {
                      "@type": "ContactPoint",
                      telephone: "+91-9800014477",
                      contactType: "Sales",
                      areaServed: "IN",
                      availableLanguage: ["English", "Telugu"],
                    },
                  },
                  {
                    "@type": "RealEstateAgent",
                    "@id": "https://blissventures.co/#realestate",
                    name: "Bliss Ventures",
                    url: "https://blissventures.co",
                    image: "https://blissventures.co/og-image.jpg",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Hyderabad",
                      addressRegion: "Telangana",
                      addressCountry: "IN",
                    },
                    telephone: "+91-9800014477",
                    priceRange: "₹₹₹",
                  },
                ],
              }),
            }}
          />
        </head>

        <body className={`${poppins.variable} antialiased`}>
          {children}
          <FloatingActionButtons />

          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-QELCYZH447"
            strategy="afterInteractive"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QELCYZH447');
          `}
          </Script>
        </body>
    </html>
  );
}