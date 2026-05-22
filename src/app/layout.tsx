import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import FloatingActionButtons from "@/components/FloatingActionButtons";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400","500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Bliss Ventures",
  description: "Bliss Ventures",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: 'icon',
      url: '/favicon.ico',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
       <meta name="google-site-verification" content="zScuppe2wZNvfSGo9Zat0cRlXFqLoMfnc6irdgBTEEw" />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
        <FloatingActionButtons />
      </body>
    </html>
  );
}
