import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@flaticon/flaticon-uicons'],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      { hostname: 'cdn.dribbble.com' },
      { hostname: 'cdn.hashnode.com' },
      { hostname: 'images.unsplash.com' },
    ],
  },
  skipTrailingSlashRedirect: true,
  transpilePackages: [],
}

export default nextConfig
