import { GeneralLayout } from '@components/layouts'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import { NextPageWithLayout } from '~/types/app'
import styles from '@styles/pages/explore/explore-detail.module.scss'
import Image from 'next/image'
import { OutlineButton } from '@components/buttons'
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import contentService from '@lib/services/content-service'
import { GetServerSideProps } from 'next'
import { PortableContent } from '@components/content'
import { gsap } from 'gsap'
import useCursor from '@lib/hooks/use-cursor'
import { ExploreStackItem } from '@components/explore'
import { ParalaxImage } from '@components/common'

const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient()
  const slug = query.slug as string

  await queryClient.prefetchQuery(['explore', slug], () =>
    contentService.loadDetailExploration(slug)
  )

  return {
    props: { slug, dehydratedState: dehydrate(queryClient) },
  }
}

interface ExploreDetailPageProps {
  slug: string
}

/**
 * # ExploreDetailPage
 *
 * the explore detail page
 * to show the detail and info about
 * explorations
 * @returns JSX.Element
 */
const ExploreDetailPage: NextPageWithLayout<ExploreDetailPageProps> = ({
  slug,
}): JSX.Element => {
  const mainRef = useRef<HTMLElement>(null)
  const detaiQuery = useQuery(['explore', slug], () =>
    contentService.loadDetailExploration(slug)
  )
  const cursor = useCursor()

  // animate all contents
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          delay: 0.4,
          defaults: {
            ease: 'back',
            duration: 0.7,
          },
        })
        .from('.overview h1', {
          y: 200,
          opacity: 0,
        })
        .from('.overview picture', {
          y: 200,
          opacity: 0,
          duration: 1.2,
        })

      gsap.from('.overview .about p', {
        y: 200,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        scrollTrigger: {
          trigger: '.overview .about',
          start: 'top 75%',
        },
      })
      gsap.from('.overview .actions button', {
        y: 100,
        opacity: 0,
        duration: 0.7,
        stagger: 0.24,
        ease: 'back',
        scrollTrigger: {
          trigger: '.overview .actions',
          start: 'top 75%',
        },
      })

      // animate the stack section
      gsap
        .timeline({
          delay: 0.4,
          defaults: {
            ease: 'back',
            duration: 0.7,
          },
          scrollTrigger: {
            trigger: '.stack .heading',
            start: 'top center',
          },
        })
        .from('.stack .heading h2', {
          y: 200,
          opacity: 0,
        })
        .from('.stack .heading span', {
          y: 200,
          opacity: 0,
        })

      gsap.from('.stack .content div', {
        y: 100,
        opacity: 0,
        duration: 1.4,
        stagger: 0.24,
        ease: 'back',
        scrollTrigger: {
          trigger: '.stack .content',
          start: 'top 75%',
        },
      })

      // animate the content section
      gsap
        .timeline({
          delay: 0.4,
          defaults: {
            ease: 'back',
            duration: 0.7,
          },
          scrollTrigger: {
            trigger: '.content-section',
            start: 'top 75%',
          },
        })
        .from('.content-section .heading h2', {
          y: 200,
          opacity: 0,
        })
        .from('.content-section .detail', {
          y: 200,
          opacity: 0,
        })

      // animate the next step
      if (detaiQuery.data?.nextExploration) {
        gsap.from('.next div a', {
          y: 200,
          opacity: 0,
          duration: 1.2,
          ease: 'back',
          scrollTrigger: {
            trigger: '.next',
            start: 'top 75%',
          },
        })
      }
    }, mainRef)

    cursor.reload()

    return () => {
      ctx.revert()
    }
  }, [detaiQuery.data])

  return (
    <>
      <Head>
        <title>{`${detaiQuery.data?.title} Exploration`} | Nyoman Sunima</title>
        <meta name="description" content={detaiQuery.data?.abouts[0]} />
      </Head>

      {detaiQuery.data && (
        <main ref={mainRef} className={styles.main}>
          <section className={`${styles.overview} overview`}>
            <h1 data-cursor-size="200" data-cursor-exclusion>
              {detaiQuery.data.title}
            </h1>
            <ParalaxImage
              image={detaiQuery.data.thumbnail}
              alt={detaiQuery.data.title}
            />
            <div className={styles.wrapper}>
              <div className={`${styles.about} about`}>
                {detaiQuery.data.abouts.map((about, index) => (
                  <p key={index}>{about}</p>
                ))}
              </div>
              <div className={`${styles.actions} actions`}>
                {detaiQuery.data.actions.map(({ label, url }, index) => (
                  <OutlineButton magnetic={true} link={url} key={index}>
                    {label}
                  </OutlineButton>
                ))}
              </div>
            </div>
          </section>

          <section className={`${styles.stack} stack`}>
            <div className={`${styles.heading} heading`}>
              <h2 data-cursor-size="200" data-cursor-exclusion>
                Build on top of stacks
              </h2>
              <span>
                To building this exploration project. I just using some of stack
                that can help move faster and plexible to moving on. Here are
                the list, you can know more here.
              </span>
            </div>
            <div className={`${styles.content} content`}>
              {detaiQuery.data.stacks.map((stack, index) => (
                <ExploreStackItem {...stack} key={index} />
              ))}
            </div>
          </section>

          <section className={`${styles.content} content-section`}>
            <div className={`${styles.heading} heading`}>
              <h2 data-cursor-size="200" data-cursor-exclusion>
                Here's how this happen
              </h2>
            </div>
            <div className={`${styles.content} detail`}>
              <PortableContent content={detaiQuery.data.content} />
            </div>
          </section>

          {detaiQuery.data.nextExploration && (
            <section className={`${styles.next} next`}>
              <div className={styles.wrapper}>
                <a
                  href={`/explore/${detaiQuery.data.nextExploration.slug}`}
                  data-cursor-size="200"
                  data-cursor-text="Next Exploration"
                  data-cursor-text-size="28"
                >
                  {detaiQuery.data.nextExploration.title}
                </a>
              </div>
            </section>
          )}
        </main>
      )}
    </>
  )
}

ExploreDetailPage.layout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>
}

export { getServerSideProps }
export default ExploreDetailPage
