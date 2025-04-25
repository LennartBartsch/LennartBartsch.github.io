import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',  // Exports static HTML files for GitHub Pages
  images: {
    unoptimized: true, // For static export
  },
  basePath: '/LennartBartsch.github.io',
};

export default nextConfig;
