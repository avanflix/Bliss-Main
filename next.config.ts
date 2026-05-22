import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.unsplash.com',
    }],
    // Optimize images to reduce bundle size
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },

  // Optimize build output
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  /* config options here */
};

export default nextConfig;
