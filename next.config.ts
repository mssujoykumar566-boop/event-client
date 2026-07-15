import type { NextConfig } from "next";

const backendApiUrl =
  process.env.BACKEND_API_URL ?? "https://event-server-nvtu.onrender.com/api";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${backendApiUrl}/:path*`,
      },
    ];
  },
};

export default nextConfig;
