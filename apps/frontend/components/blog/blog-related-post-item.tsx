import Image from 'next/image'
import { FunctionComponent } from 'react'

/**
 * # BlogRelatedPostItem
 *
 * Item of related post in section
 *
 * @returns JSX.Element
 */
const BlogRelatedPostItem: FunctionComponent = (): JSX.Element => {
  return (
    <div className="flex flex-col w-1/3 cursor-pointer">
      <picture
        className="flex w-full relative h-[360px] rounded-2xl overflow-hidden"
        data-cursor-size="120"
        data-cursor-text="Read Now"
      >
        <Image
          src={
            'https://cdn.dribbble.com/userupload/4868050/file/original-fa4d9cce4e53f82c335700f93ac8cf79.png?compress=1&resize=2048x1536'
          }
          fill
          alt="Image"
          sizes="auto"
          className="object-cover"
        />
      </picture>

      <span className="flex font-semibold text-pink-500 mt-3">Design</span>

      <h2 className="text-2xl font-medium line-clamp-2 mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        dolore.
      </h2>
    </div>
  )
}

export default BlogRelatedPostItem
