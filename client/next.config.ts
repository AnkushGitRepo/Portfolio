import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  images: {
    unoptimized: true,
  },
  // Disable server-side features when exporting
  trailingSlash: true,
};

export default nextConfig;
