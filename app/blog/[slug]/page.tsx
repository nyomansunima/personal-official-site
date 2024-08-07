import * as React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { getBlogMetadata } from '../blog-service'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'
import { BlogArticle } from './article'

interface Props {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = params
  const previousOgImages = (await parent).openGraph?.images || []
  const previousTwitterImages = (await parent).twitter?.images || []
  const metadata = await getBlogMetadata(slug)

  return {
    title: `${metadata.title}`,
    description: metadata.description,
    openGraph: {
      ...defaultOpenGraphMetadata,
      title: `${metadata.title}`,
      description: metadata.description,
      images: [metadata.image, ...previousOgImages],
    },
    twitter: {
      ...defaultTwitterMetadata,
      title: `${metadata.title}`,
      description: metadata.description,
      images: [metadata.image, ...previousTwitterImages],
    },
  }
}

export default function BlogDetailPage({ params }: Props): React.ReactElement {
  return (
    <div className="px-5 laptop:px-0 container mx-auto">
      <div className="flex flex-col py-20 laptop:py-36">
        <div className="flex w-full tablet:w-10/12 laptop:w-6/12 mx-auto">
          <BlogArticle params={params} />
        </div>
      </div>
    </div>
  )
}
