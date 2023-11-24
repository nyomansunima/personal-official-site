import Image from 'next/image'
import Link from 'next/link'
import { Post } from '~/types'
import * as React from 'react'

type Props = {
  post: Post
}

type BlogTagProps = {
  tags: string[]
}

type BlogPillProps = {
  children: React.ReactNode
}

function BlogTag({ tags }: BlogTagProps) {
  return (
    <span className="absolute top-4 right-4 px-5 text-sm py-2 rounded-full bg-background border border-border">
      {tags[0]}
    </span>
  )
}

function BlogPill({ children }: BlogPillProps) {
  return (
    <span className="flex gap-2 px-4 text-sm py-2 rounded-full bg-background border border-border">
      {children}
    </span>
  )
}

export function BlogPostItemCard({ post }: Props) {
  const postURL = `/blog/${post.slug}`

  return (
    <Link href={postURL} className="flex flex-col w-full">
      <picture className="relative w-full h-[450px] overflow-hidden rounded-2xl">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-all duration-1000 hover:scale-105"
        />

        <BlogTag tags={post.tags} />
        <div className="flex items-center gap-2 absolute bottom-4 left-4">
          <BlogPill>
            <i className="fi fi-rr-video-camera-alt" />
            {post.totalViews}
          </BlogPill>
          <BlogPill>
            <i className="fi fi-rr-face-awesome" />
            {post.reactionCount}
          </BlogPill>
        </div>
      </picture>

      <h3 className="mt-6 text-2xl !leading-tight line-clamp-2">
        {post.title}
      </h3>
    </Link>
  )
}
