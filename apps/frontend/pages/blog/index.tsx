import { BlogLayout } from '@components/layouts'
import Head from 'next/head'
import { NextPageWithLayout } from '~/types/app'
import styles from '@styles/pages/blog.module.scss'
import useCursor from '@lib/hooks/use-cursor'
import { useEffect, useRef } from 'react'
import { BlogCard, BlogNewsletter } from '@components/blog'
import { gsap } from 'gsap'
import { OutlineButton } from '@components/buttons'
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import contentService from '@lib/services/content-service'
import { GetServerSideProps } from 'next'

// define the blog resource come from
// this including the platform and url
interface MoreBlogResource {
  label: string
  icon: string
  link: string
}

const blogResources: MoreBlogResource[] = [
  {
    icon: 'fi fi-brands-dev',
    label: 'Dev.to',
    link: 'https://dev.to/nyomansunima',
  },
  {
    icon: 'fi fi-brands-medium',
    label: 'Medium',
    link: 'https://medium.com/@nyomansunima',
  },
]

const getServerSideProps: GetServerSideProps = async ({}) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['post', 'list'], contentService.getAllPosts)
  await queryClient.prefetchQuery(
    ['post', 'best-week'],
    contentService.getBestWeekPosts
  )
  await queryClient.prefetchQuery(
    ['post', 'recent'],
    contentService.getRecentPosts
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

/**
 * # BlogPage
 *
 * Showing my latest article to easily
 * engage with my potential client
 *
 * @returns JSX.Element
 */
const BlogPage: NextPageWithLayout = (): JSX.Element => {
  const cursor = useCursor()
  const mainRef = useRef<HTMLElement>(null)
  const allPostsQuery = useQuery(['post', 'list'], contentService.getAllPosts)
  const bestWeekPostsQuery = useQuery(
    ['post', 'best-week'],
    contentService.getBestWeekPosts
  )
  const recentPostsQuery = useQuery(
    ['post', 'recent'],
    contentService.getRecentPosts
  )

  useEffect(() => {
    cursor.reload()

    const ctx = gsap.context(() => {
      // animate the header
      gsap
        .timeline({ delay: 2.4, defaults: { ease: 'expo' } })
        .from('.featured-section-anim h1 span', {
          opacity: 0,
          y: 40,
          duration: 1.2,
          stagger: 0.02,
          ease: 'elastic',
        })
        .from('.featured-section-anim p', {
          opacity: 0,
          y: 40,
          duration: 0.8,
        })

      // animate the best week sections
      gsap
        .timeline({
          delay: 0.4,
          defaults: {
            ease: 'none',
          },
          scrollTrigger: {
            trigger: '.best-of-week-post-section-anim',
            start: 'top 50%',
            end: '+=1200px',
            scrub: true,
          },
        })
        .from('.best-of-week-post-section-anim h2', {
          opacity: 0,
          y: 40,
          duration: 1.2,
        })
        .from('.best-of-week-post-section-anim .wrapper-anim .card-anim', {
          opacity: 0,
          y: 400,
          scale: 0.8,
          stagger: 3,
          duration: 2.2,
        })

      // animate the new post section
      gsap
        .timeline({
          delay: 0.4,
          scrollTrigger: {
            trigger: '.new-post-section-anim',
            start: 'top 75%',
            end: 'bottom +=1000px',
            scrub: true,
          },
          defaults: {
            ease: 'none',
          },
        })
        .from('.new-post-section-anim h2', {
          opacity: 0,
          y: 40,
        })
        .from('.new-post-section-anim .wrapper-anim', {
          opacity: 0,
          y: 200,
        })

      const newPostWrapper = document.body.querySelector(
        '.new-post-section-anim .wrapper-anim'
      ) as HTMLElement
      const newPostCard = document.body.querySelector(
        '.new-post-section-anim .wrapper-anim .card-anim'
      ) as HTMLElement
      gsap.to('.new-post-section-anim .wrapper-anim', {
        x: -(
          newPostWrapper.scrollWidth +
          newPostCard.offsetWidth -
          window.innerWidth
        ),
        scrollTrigger: {
          trigger: '.new-post-section-anim',
          scrub: true,
          pin: true,
          start: 'center 40%',
          end: `+=${newPostWrapper.scrollWidth + newPostCard.offsetWidth}`,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      // animate the all post
      // sections
      gsap
        .timeline({
          delay: 0.4,
          defaults: {
            ease: 'none',
          },
          scrollTrigger: {
            trigger: '.post-section-anim',
            scrub: true,
            start: 'top 45%',
            end: 'bottom +=110%',
          },
        })
        .from('.post-section-anim h2', {
          opacity: 0,
          y: 40,
        })
        .from('.post-section-anim .card-anim', {
          y: 200,
          stagger: 0.3,
        })
    }, mainRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Blog - Nyoman Sunima</title>
        <meta
          name="description"
          content="Nyoman sunima blog content. Sharing all process to make app including product design, UI UX, and Development"
        />
      </Head>

      <main ref={mainRef} className={styles.main}>
        <section className={`${styles.header_section} featured-section-anim`}>
          <h1 data-cursor-size="200" data-cursor-exclusion>
            {'More than just sharing a idea and concept'
              .split('')
              .map((char, index) => (
                <span
                  key={index}
                  className={`${char == ' ' ? styles.space : ''}`}
                >
                  {char}
                </span>
              ))}
          </h1>
          <p>
            Hey, i create any content to share all of my experience to other
            developer and designer around the world. Now let's explore
          </p>

          <div className={styles.more_resources}>
            {blogResources.map((res, index) => (
              <div
                className={styles.item}
                onClick={() => window.open(res.link)}
                key={index}
                data-cursor-size="100"
                data-cursor-text={res.label}
                data-cursor-color="pink"
              >
                <i className={`${res.icon}`}></i>
              </div>
            ))}
          </div>
        </section>

        {/* showing the best of week post sections */}
        {bestWeekPostsQuery.data && (
          <section
            className={`${styles.best_of_week} best-of-week-post-section-anim`}
          >
            <h2>Best of week</h2>
            <div className={`${styles.wrapper} wrapper-anim`}>
              {bestWeekPostsQuery.data.map((post, index) => (
                <BlogCard
                  data={post}
                  key={index}
                  view="grid"
                  randomLayout={true}
                  className="card-anim"
                />
              ))}
            </div>
          </section>
        )}

        {/* subscribe newsletter form */}
        <section className="flex container mx-auto px-14">
          <BlogNewsletter />
        </section>

        {/* showing the new post of articles */}
        {recentPostsQuery.data && (
          <section className={`${styles.new_post} new-post-section-anim`}>
            <h2>New Posts</h2>
            <div className={`${styles.wrapper} wrapper-anim`}>
              {recentPostsQuery.data.map((post, index) => (
                <BlogCard
                  data={post}
                  key={index}
                  view="slide"
                  className="card-anim"
                />
              ))}
            </div>
          </section>
        )}

        {/* all post articles */}
        {allPostsQuery.data && (
          <section className={`${styles.all_post} post-section-anim`}>
            <h2>All Posts</h2>
            <div className={styles.wrapper}>
              {allPostsQuery.data.map((post, index) => (
                <BlogCard
                  data={post}
                  key={index}
                  view="full"
                  randomLayout={true}
                  className="card-anim"
                />
              ))}
            </div>
          </section>
        )}

        <section className={styles.more_section}>
          <OutlineButton link="https://nyomansunima.hashnode.dev/">
            View More <i className="fi fi-rr-arrow-right"></i>
          </OutlineButton>
        </section>
      </main>
    </>
  )
}

BlogPage.layout = (page) => {
  return <BlogLayout>{page}</BlogLayout>
}

export { getServerSideProps }
export default BlogPage
