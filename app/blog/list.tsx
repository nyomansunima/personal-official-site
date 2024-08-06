import * as React from 'react'
import { Button } from '~/components/ui/button'
import { BlogItemCard } from './item'
import { getBlogPosts } from './blog-service'
import Link from 'next/link'

interface BlogPostListProps {
  searchParams: {
    page?: string
  }
}

export default async function BlogPostList({
  searchParams,
}: BlogPostListProps): Promise<React.ReactElement> {
  const { page } = searchParams
  const parsedPage = page ? parseInt(page, 10) : undefined

  const paginatedPosts = await getBlogPosts({
    limit: 9,
    page: parsedPage,
  })

  return (
    <div className="flex flex-col mt-36 laptop:w-10/12">
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-4 gap-y-20">
        {paginatedPosts.posts.map((post, index) => (
          <BlogItemCard post={post} key={index} />
        ))}
      </div>

      <div className="flex justify-center mt-20 laptop:mt-36 gap-3">
        {paginatedPosts.pageInfo.hasPreviousPage && (
          <Button
            className="transition-all duration-500 hover:scale-95"
            variant={'secondary'}
            size={'lg'}
            asChild
          >
            <Link
              href={{
                pathname: '/blog',
                query: {
                  page: paginatedPosts.pageInfo.previousPage,
                },
              }}
            >
              <i className="fi fi-rr-arrow-left" /> Prev
            </Link>
          </Button>
        )}

        {paginatedPosts.pageInfo.hasNextPage && (
          <Button
            className="transition-all duration-500 hover:scale-95"
            variant={'secondary'}
            size={'lg'}
            asChild
          >
            <Link
              href={{
                pathname: '/blog',
                query: {
                  page: paginatedPosts.pageInfo.nextPage,
                },
              }}
            >
              Next <i className="fi fi-rr-arrow-right" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
