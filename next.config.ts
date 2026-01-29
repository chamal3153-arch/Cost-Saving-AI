import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
