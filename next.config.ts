import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Export static HTML files
  images: {
    unoptimized: true, // Required for Cloudflare Pages static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "costsaverai.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "budgetplanai.com",
        pathname: "/**",
      },
    ],
  },
  // Reduce preload warnings by optimizing resource hints
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },
  // Reduce unnecessary headers
  poweredByHeader: false,
};

export default nextConfig;
