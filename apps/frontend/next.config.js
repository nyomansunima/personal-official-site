/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'cdn.hashnode.com',
      'cdn.dribbble.com',
      'cdn.sanity.io',
      'seeklogo.com',
    ],
  },
}

module.exports = nextConfig
