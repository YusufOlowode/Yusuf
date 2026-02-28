import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable source maps in development for faster builds
  productionBrowserSourceMaps: false,


  // Optimize image handling
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Reduce image optimization overhead in development
    unoptimized: process.env.NODE_ENV === 'development',
  },

  // Enable experimental features for faster compilation
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
};

export default nextConfig;
