/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/experianciaCulinaria',
  assetPrefix: '/experianciaCulinaria/',
};

module.exports = nextConfig;
