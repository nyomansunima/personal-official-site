import Image from 'next/image'
import Link from 'next/link'
import { createImageBlur } from '~/lib/image'
import { Post } from './blog-service'
import { formatReadableDate } from '~/lib/utils'

interface BlogItemProps {
  post: Post
}

function CategoryLabel({ children }) {
  return (
    <span className="flex justify-center items-center px-3 h-8 rounded-full bg-secondary border border-black/60 absolute right-5 bottom-5 text-xs font-normal !leading-none">
      {children}
    </span>
  )
}

export async function BlogItemCard({ post }: BlogItemProps) {
  const imageUrl = post.coverImage.url
  const featuredTags = post.tags[0]
  const parsedPublishDate = formatReadableDate(post.publishedAt)

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-col col-span-1 transition-all duration-500 hover:-translate-y-1"
    >
      <div className="flex relative bg-ambient border border-border rounded-2xl p-1">
        <picture className="flex w-full relative overflow-hidden h-[280px] rounded-xl">
          <Image
            src={imageUrl}
            alt="Image"
            priority
            fill
            sizes="auto"
            quality={100}
            className="object-cover transition-all duration-500 hover:scale-105"
          />
        </picture>

        {featuredTags && <CategoryLabel>{featuredTags}</CategoryLabel>}
      </div>

      <div className="flex flex-col px-1">
        <h3 className="text-lg text-foreground/80 font-medium mt-7">
          {post.title}
        </h3>
        <span className="text-sm text-foreground/60 mt-4">
          {parsedPublishDate}
        </span>
      </div>
    </Link>
  )
}
