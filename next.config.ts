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
};

export default nextConfig;
