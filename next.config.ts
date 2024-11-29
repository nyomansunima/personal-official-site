import { NextConfig } from 'next'
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
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
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
