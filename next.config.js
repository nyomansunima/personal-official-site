/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'cdn.dribbble.com' },
      { hostname: 'cdn.hashnode.com' },
      { hostname: 'media.graphassets.com' },
    ],
  },
}

module.exports = nextConfig
