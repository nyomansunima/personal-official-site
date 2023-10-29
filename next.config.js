/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'cdn.dribbble.com' }],
  },
}

module.exports = nextConfig
