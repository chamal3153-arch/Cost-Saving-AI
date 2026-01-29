import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Export static HTML files
  images: {
    unoptimized: true, // Required for static export
    // Allow remote images for future leadership photos.
    // TODO: Replace "example.com" with your real image host (e.g., Cloudinary, S3, Webflow CDN).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        pathname: "/**",
      },
    ],
  },
  // Reduce preload warnings by optimizing resource hints
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },
};

export default nextConfig;
