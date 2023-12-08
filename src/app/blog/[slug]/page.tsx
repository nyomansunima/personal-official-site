import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { blogService } from '~/services/blog-service'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/lib/shared-metadata'
import BlogDetailHeaderSection from '../blog-detail-header-section'
import BlogDetailArticleSection from '../blog-detail-article-section'
import BlogDetailNewsletterSection from './blog-detail-newsletter-section'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = params.slug

  const meta = await blogService.getPostMetadata(slug)

  if (!slug || !meta) {
    return notFound()
  }

  return {
    title: `${meta.title} | Nyoman Sunima`,
    description: meta.desc,
    openGraph: {
      ...defaultOpenGraphMetadata,
      title: `${meta.title} | Nyoman Sunima`,
      description: meta.desc,
      images: [meta.image],
    },
    twitter: {
      ...defaultTwitterMetadata,
      title: `${meta.title} | Nyoman Sunima`,
      description: meta.desc,
      images: [meta.image],
    },
  }
}

export default function BlogDetailPage({ params }: Props) {
  return (
    <main className="flex flex-col items-center laptop:py-28 container mx-auto px-5">
      <div className="flex flex-col w-7/12 mx-auto">
        <BlogDetailHeaderSection />
        <BlogDetailArticleSection slug={params.slug} />
        <BlogDetailNewsletterSection />
      </div>
    </main>
  )
}
