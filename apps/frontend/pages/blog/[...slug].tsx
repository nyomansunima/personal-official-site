import ContentPortable from '@components/content/portable-content'
import { BlogDetailLayout } from '@components/layouts'
import contentService from '@lib/services/content-service'
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { NextPageWithLayout } from '~/types/app'

interface BlogDetailPageProps {
  slug: string
}

/**
 * # BlogDetailPage
 *
 * Detail page to showing the blog pages
 * that's contain the header, footer, and sidebar
 *
 * @returns JSX.Element
 */
const BlogDetailPage: NextPageWithLayout<BlogDetailPageProps> = ({ slug }) => {
  const detailQuery = useQuery(['blog', slug], () =>
    contentService.getDetailBlog(slug)
  )

  return (
    <>
      <Head>
        <title>{detailQuery.data?.title} | Nyoman Sunima</title>
        <meta
          name="description"
          content={detailQuery.data?.desc.substring(0, 100)}
        />
      </Head>

      {/* showing actual content */}
      {detailQuery.data && (
        <article className="flex w-full flex-col p-5 border border-gray-100 rounded-3xl overflow-hidden">
          {/* thumbnail */}
          <picture className="flex w-full relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={detailQuery.data.thumbnail}
              alt={detailQuery.data.title}
              fill
              sizes="auto"
              className="object-cover"
            />
          </picture>

          {/* tags */}
          <div className="flex flex-wrap items-center gap-x-5 mt-10">
            {detailQuery.data.tags.map((tag, index) => (
              <span
                className="flex items-center justify-center px-4 py-2 rounded-full text-indigo-600 bg-indigo-100 font-medium"
                key={index}
              >
                {tag.title}
              </span>
            ))}
          </div>

          {/* title */}
          <h1 className="flex text-5xl font-medium mt-10 border-b border-b-gray-100 pb-5">
            {detailQuery.data.title}
          </h1>

          {/* actual content */}
          <ContentPortable
            content={detailQuery.data.content}
            className="px-3"
          />
        </article>
      )}
    </>
  )
}

BlogDetailPage.layout = (page) => {
  return <BlogDetailLayout>{page}</BlogDetailLayout>
}

const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params!.slug![0] as string
  if (!slug) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false,
      },
    }
  }

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['blog', slug], () =>
    contentService.getDetailBlog(slug)
  )

  return {
    props: {
      slug,
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export { getServerSideProps }
export default BlogDetailPage
