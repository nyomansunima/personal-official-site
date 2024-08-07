import * as React from 'react'
import { ArticleContent, ProtectedHtmlContent } from '~/components/content'
import { getBlogDetail } from '../blog-service'
import Image from 'next/image'

interface Props {
  params: { slug: string }
}

interface BlogCoverImageProps {
  imageUrl: string
  alt: string
}

function BlogCoverImage({ imageUrl, alt }: BlogCoverImageProps) {
  return (
    <div className="flex justify-center items-center p-1 border border-border bg-ambient rounded-2xl mb-10 not-prose">
      <picture className="flex w-full h-[240px] tablet:h-[360px] relative overflow-hidden rounded-xl">
        <Image
          src={imageUrl}
          alt={alt}
          priority
          fill
          sizes="auto"
          quality={100}
          className="object-cover transition-all duration-500 hover:scale-105"
        />
      </picture>
    </div>
  )
}

export async function BlogArticle({
  params,
}: Props): Promise<React.ReactElement> {
  const { slug } = params
  const post = await getBlogDetail(slug)

  return (
    <div className="flex w-full">
      <ArticleContent>
        <h1>{post.title}</h1>
        <BlogCoverImage imageUrl={post.coverImage.url} alt={post.title} />
        <ProtectedHtmlContent>{post.content}</ProtectedHtmlContent>
      </ArticleContent>
    </div>
  )
}
