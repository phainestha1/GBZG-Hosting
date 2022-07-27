/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["search.pstatic.net", "modo-phinf.pstatic.net"],
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
};

module.exports = nextConfig;
