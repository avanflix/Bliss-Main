import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],

    // Optimize images to reduce bundle size
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },

  // Optimize build output
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  async redirects() {
    return [
      {
        source: "/landing",
        destination: "https://bliss-one-ten.vercel.app",
        permanent: false,
      },
      {
        source: "/landing/:path*",
        destination: "https://bliss-one-ten.vercel.app/:path*",
        permanent: false,
      },
    ];
  }
};

export default nextConfig;