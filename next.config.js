/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/assets/:path*',
        destination: '/:path*',
      },
    ];
  },
}

module.exports = nextConfig
