import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== habilita o export estático
  reactStrictMode: true,
  /* config options here */
};

module.exports = {
  assetPrefix: './',
  basePath: '/paulohenriquemendes',
  trailingSlash: true,
  images: {
    unoptimized: true, // Desativa a otimização de imagens
    loader: 'custom',
    loaderFile: './my-loader.ts',
  },
}

module.exports = nextConfig;

export default nextConfig;
