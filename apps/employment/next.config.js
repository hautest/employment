const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  compress: true,
};

module.exports = withVanillaExtract(nextConfig);
