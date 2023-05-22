import { FunctionComponent, useEffect } from 'react'
import BlogRelatedPostItem from './blog-related-post-item'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import contentService from '@lib/services/content-service'
import useCursor from '@lib/hooks/use-cursor'

/**
 * # BlogRelatedPost
 *
 * section to show the related post after
 * the user reach the end of post
 *
 * @returns JSX.Element
 */
const BlogRelatedPost: FunctionComponent = (): JSX.Element => {
  const router = useRouter()
  const slug = router.query.slug![0] as string
  const cursor = useCursor()

  const query = useQuery(['blog', 'related', slug], () =>
    contentService.getRelatedBlogPost(slug)
  )

  useEffect(() => {
    cursor.reload()
  }, [query.data])

  return (
    <>
      {query.data && query.data.length > 0 && (
        <div className="flex flex-col gap-14 mt-24 container mx-auto px-10">
          <h4 className="flex w-full border-b border-b-gray-100 pb-3 text-4xl font-semibold">
            Related Post
          </h4>

          <div className="flex w-full gap-6">
            {query.data.map((post, index) => (
              <BlogRelatedPostItem data={post} key={index} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default BlogRelatedPost
