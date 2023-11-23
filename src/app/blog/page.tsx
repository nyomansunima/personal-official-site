import BlogLatestPostSection from './blog-latest-post-section'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/lib/shared-metadata'

export const metadata: Metadata = {
  title: 'Blog | Nyoman Sunima',
  description: 'Explore Blog Article',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Blog | Nyoman Sunima',
    description: 'Explore Blog Article',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Blog | Nyoman Sunima',
    description: 'Explore Blog Article',
  },
}

export default function BlogPage() {
  return (
    <main className="flex flex-col py-20 laptop:py-28 gap-40 laptop:gap-80">
      <BlogLatestPostSection />
    </main>
  )
}
