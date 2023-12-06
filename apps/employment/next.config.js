const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  pageExtensions: ['page.tsx', 'page.ts'],
  compress: true,
};

module.exports = withVanillaExtract(nextConfig);
