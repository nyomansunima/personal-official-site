/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'cdn.dribbble.com' },
      { hostname: 'cdn.hashnode.com' },
      { hostname: 'images.unsplash.com' },
    ],
  },
}

module.exports = nextConfig
