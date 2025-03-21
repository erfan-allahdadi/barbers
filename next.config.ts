import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lookee.nwhco.ir"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/barbers",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
