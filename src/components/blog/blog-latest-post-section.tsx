'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { blogService } from '~/services/blog-service'
import * as React from 'react'
import { BlogPostItemCard } from './blog-post-item'
import { Button } from '@components/ui/button'

export default function BlogLatestPostSection() {
  const allPost = useInfiniteQuery({
    queryKey: ['blog', 'posts'],
    initialPageParam: null,
    queryFn: blogService.getAllBlogPosts,
    getNextPageParam: (lastPage, allPages) => lastPage.pageInfo.endCursor,
  })

  return (
    <section className="container mx-auto laptop:px-20 px-5">
      {allPost.isSuccess && (
        <>
          <div className="w-full grid laptop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-x-6 gap-y-16">
            {allPost.data.pages.map((group, i) => (
              <React.Fragment key={i}>
                {group.posts.map((post, i) => (
                  <BlogPostItemCard post={post} key={i} />
                ))}
              </React.Fragment>
            ))}
          </div>

          <div className="flex justify-center mt-28">
            {allPost.hasNextPage && (
              <Button
                disabled={!allPost.hasNextPage || allPost.isFetchingNextPage}
                onClick={() => allPost.fetchNextPage()}
              >
                {allPost.isFetchingNextPage ? (
                  <>
                    Loading more
                    <i className="fi fi-rr-spinner animate-spin" />
                  </>
                ) : (
                  'Load more'
                )}
              </Button>
            )}
          </div>
        </>
      )}
    </section>
  )
}
