import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "api.mafiastore.com",
      "i.ibb.co",
      "api.midtrans.com",
      "api.taktak.id",
      "chart.googleapis.com",
      "api.qrserver.com",
      // "api.globaljubel.id",
      // "api.globaljubel.com",
    ],
    // remotePatterns: [
    //   {
    //     protocol: "http",
    //     hostname: "hub.rapspoint.com",
    //     pathname: "/**",
    //   },
    // ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.mafiastore.com/api/:path*",
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
