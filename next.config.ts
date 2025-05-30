/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/experianciaCulinaria' : '',
  assetPrefix: isProd ? '/experianciaCulinaria/' : '',
  experimental: {
    optimizeCss: true,  // 👈 inlining de Tailwind CSS!
  },
};


module.exports = nextConfig;
