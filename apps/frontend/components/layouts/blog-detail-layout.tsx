import { BlogBreadscrumb, BlogRelatedPost } from '@components/blog'
import { BlogFooter } from '@components/footers'
import { BlogHeader } from '@components/headers'
import { FunctionComponent, ReactNode } from 'react'

interface BlogDetailLayoutProps {
  children?: ReactNode | ReactNode[]
}

/**
 * # BlogDetailLayout
 *
 * Handle the layout of blog detail page
 * @returns JSX.Element
 */
const BlogDetailLayout: FunctionComponent<BlogDetailLayoutProps> = ({
  children,
}): JSX.Element => {
  return (
    <>
      {/* header */}
      <BlogHeader />

      <main className="flex flex-col container mx-auto py-28 gap-10 items-center ">
        {/* the content article */}
        <div className="flex flex-col w-8/12 gap-10">
          <BlogBreadscrumb />
          {children}
        </div>

        {/* related post */}
        <BlogRelatedPost />
      </main>

      {/* footer */}
      <BlogFooter />
    </>
  )
}

export default BlogDetailLayout
