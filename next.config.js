/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? process.env.ASSET_PREFIX : '',
}

module.exports = nextConfig
