/** @type {import('next').NextConfig} */
const nextBuildId = require('next-build-id')
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/assets/:path*',
        destination: '/:path*',
      },
    ];
  },
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  typescript: {
    ignoreBuildErrors: false,
  }
}
module.exports = nextConfig
