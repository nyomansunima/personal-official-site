import { GeneralLayout } from '@components/layouts'
import Head from 'next/head'
import { NextPageWithLayout } from '~/types/app'
import styles from '@styles/pages/explore/explore.module.scss'
import { OutlineButton } from '@components/buttons'
import { ExploreItemCard } from '@components/explore'
import { GetServerSideProps } from 'next'
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import contentService from '@lib/services/content-service'
import { useEffect, useRef } from 'react'
import useCursor from '@lib/hooks/use-cursor'
import { gsap } from 'gsap'

const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    ['explore'],
    contentService.loadAllExploration
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

/**
 * # ExplorePage
 *
 * the page to explore all of
 * the exploration project and works
 *
 * @returns JSX.Element
 */
const ExplorePage: NextPageWithLayout = (): JSX.Element => {
  const mainRef = useRef<HTMLElement>(null)
  const listQuery = useQuery(['explore'], contentService.loadAllExploration)
  const cursor = useCursor()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.overview-section h1', {
        y: 200,
        opacity: 0,
        duration: 1.2,
        ease: 'back',
      })

      gsap
        .timeline({
          delay: 0.2,
          defaults: {
            ease: 'back',
            duration: 1.2,
          },
          scrollTrigger: {
            trigger: '.more-section',
            start: 'top 75%',
          },
        })
        .from('.more-section h2', {
          y: 200,
          opacity: 0,
        })
        .from('.more-section span', {
          y: 200,
          opacity: 0,
        })
    }, mainRef)

    cursor.reload()

    return () => {
      ctx.revert()
    }
  }, [listQuery.data])

  return (
    <>
      <Head>
        <title>Explorations | Nyoman Sunima</title>
        <meta
          name="description"
          content="All of my work and what i build for exploring are placed in here"
        />
      </Head>

      <main ref={mainRef} className={styles.main}>
        <section className={`${styles.overview_section} overview-section`}>
          <div className={styles.content}>
            <h1 data-cursor-size="200" data-cursor-exclusion>
              Better everyday through explorations
            </h1>
          </div>
        </section>
        <section className={styles.content_section}>
          <div className={styles.content}>
            {listQuery.data &&
              listQuery.data.map((item, index) => (
                <ExploreItemCard data={item} key={index} />
              ))}
          </div>
        </section>

        <section className={`${styles.more_section} more-section`}>
          <div className={styles.heading}>
            <h2 data-cursor-exclusion data-cursor-size="200">
              I explore more than you know
            </h2>
            <span>
              I always try to explore everthing to ensure my quality. I always
              learn, then create something that make me become a better learner
              with a new concept. You can grap all of my exploration on github,
              and gitlab repo.
            </span>
          </div>
        </section>
      </main>
    </>
  )
}

ExplorePage.layout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>
}

export { getServerSideProps }
export default ExplorePage
