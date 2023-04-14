import { GeneralLayout } from '@components/layouts'
import Head from 'next/head'
import { NextPageWithLayout } from '~/types/app'
import styles from '@styles/pages/inspiration.module.scss'
import { useEffect, useRef } from 'react'
import useCursor from '@lib/hooks/use-cursor'
import { gsap } from 'gsap'
import { InspirationCard } from '@components/inspiration'
import { GetServerSideProps } from 'next'
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import inspirationService from '@lib/services/inspiration-service'
import Image from 'next/image'

interface SourceItem {
  icon: string
  label: string
  link: string
}

const sources: SourceItem[] = [
  {
    icon: 'fi fi-brands-dribbble',
    label: '@nyomansunima',
    link: 'https://dribbble.com/nyomansunima',
  },
  {
    icon: 'fi fi-brands-instagram',
    label: '@nyomansunima',
    link: 'https://instagram.com/nyomansunima',
  },
]

const getServerSideProps: GetServerSideProps = async ({}) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    ['inspiration', 'sources'],
    inspirationService.getAllSource
  )
  await queryClient.prefetchQuery(
    ['inspiration', 'list'],
    inspirationService.getAllInspiration
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

/**
 * # InspirationPage
 *
 * Showing the inspiration list
 * including the instagram post, dribble, and behance
 *
 * @returns JSX.Element
 */
const InspirationPage: NextPageWithLayout = (): JSX.Element => {
  const cursor = useCursor()
  const mainRef = useRef<HTMLElement>(null)
  const sourcesQuery = useQuery(
    ['inspiration', 'sources'],
    inspirationService.getAllSource
  )
  const inspirationsQuery = useQuery(
    ['inspiration', 'list'],
    inspirationService.getAllInspiration
  )

  const openLink = (link: string) => {
    window.open(link)
  }

  useEffect(() => {
    cursor.reload()

    const ctx = gsap.context(() => {
      gsap
        .timeline({ delay: 0.1 })
        .from('.head-section-anim h1', {
          opacity: 0,
          y: 100,
          scale: 0.5,
          ease: 'back',
          duration: 0.7,
        })
        .from('.option-anim', {
          opacity: 0,
          y: 100,
          ease: 'back',
          stagger: 0.2,
          duration: 0.7,
        })
        .from('.list-anim', {
          opacity: 0,
          y: 200,
          duration: 0.7,
          ease: 'expo',
        })

      gsap.to('.list-anim .card-anim', {
        ease: 'none',
        y: -100,
        stagger: 3,
        duration: 2.3,
        scrollTrigger: {
          trigger: '.card-anim',
          start: 'top 75%',
          end: '+=1000px',
          scrub: true,
        },
      })
    }, mainRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Inpirations - Nyoman Sunima</title>
        <meta
          name="description"
          content="All in one inspiration for your next project and product"
        />
      </Head>

      <main ref={mainRef} className={styles.main}>
        {/* headline sections */}
        <section className={`${styles.headline_section} head-section-anim`}>
          <h1 data-cursor-size="200" data-cursor-exclusion>
            All in one daily inspiration
          </h1>
        </section>

        {/* sources section */}
        <section className={styles.source_section}>
          <div className={styles.wrapper}>
            {sourcesQuery.data &&
              sourcesQuery.data.map((data, index) => (
                <div
                  onClick={() => openLink(data.url)}
                  className={`${styles.item} option-anim`}
                  key={index}
                  data-cursor-stick
                  data-cursor-size="40"
                  data-cursor-exclusion
                >
                  <Image
                    src={data.icon}
                    alt={data.name}
                    height={20}
                    width={20}
                  />
                  <span>{data.name}</span>
                </div>
              ))}
          </div>
        </section>

        {/* inspiration list */}
        <section className={`${styles.inspiration_list_section} list-anim`}>
          <div className={styles.wrapper}>
            {inspirationsQuery.data &&
              inspirationsQuery.data.map((data, index) => (
                <InspirationCard
                  data={data}
                  key={index}
                  className="card-anim"
                />
              ))}
          </div>
        </section>
      </main>
    </>
  )
}

InspirationPage.layout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>
}

export { getServerSideProps }
export default InspirationPage
