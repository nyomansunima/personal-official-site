import { FunctionComponent } from 'react'
import BlogRelatedPostItem from './blog-related-post-item'

/**
 * # BlogRelatedPost
 *
 * section to show the related post after
 * the user reach the end of post
 *
 * @returns JSX.Element
 */
const BlogRelatedPost: FunctionComponent = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-14 mt-24 container mx-auto px-10">
      <h4 className="flex w-full border-b border-b-gray-100 pb-3 text-4xl font-semibold">
        Related Post
      </h4>

      <div className="flex w-full gap-6">
        {[1, 2, 3].map((index) => (
          <BlogRelatedPostItem key={index} />
        ))}
      </div>
    </div>
  )
}

export default BlogRelatedPost
