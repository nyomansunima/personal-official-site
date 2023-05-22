import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { RelatedBlogPost } from '~/types/content'

interface BlogRelatedPostItemProps {
  data: RelatedBlogPost
}

/**
 * # BlogRelatedPostItem
 *
 * Item of related post in section
 *
 * @returns JSX.Element
 */
const BlogRelatedPostItem: FunctionComponent<BlogRelatedPostItemProps> = ({
  data,
}): JSX.Element => {
  return (
    <Link
      href={`/blog/${data.slug}`}
      className="flex flex-col w-1/3 cursor-pointer"
    >
      <picture
        className="flex w-full relative h-[360px] rounded-2xl overflow-hidden"
        data-cursor-size="120"
        data-cursor-text="Read Now"
      >
        <Image
          src={data.thumbnail}
          fill
          alt="Image"
          sizes="auto"
          className="object-cover"
        />
      </picture>

      <span className="flex font-semibold text-pink-500 mt-3">{data.tag}</span>

      <h2 className="text-2xl font-medium line-clamp-2 mt-4">{data.title}</h2>
    </Link>
  )
}

export default BlogRelatedPostItem
