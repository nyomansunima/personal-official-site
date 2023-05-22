import { GeneralLayout } from '@components/layouts'
import useCursor from '@lib/hooks/use-cursor'
import { gsap } from 'gsap'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import { NextPageWithLayout } from '~/types/app'
import styles from '@styles/pages/services/service-detail.module.scss'
import Image from 'next/image'
import { OutlineButton } from '@components/buttons'
import { ContactSection } from '@components/contact'
import { ServiceProcessItem, ServicePurposeItem } from '@components/services'
import { StackItem } from '@components/stack'
import { GetServerSideProps } from 'next'
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import contentService from '@lib/services/content-service'
import { ParalaxImage } from '@components/common'

const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params!.slug as string
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['service', slug], () =>
    contentService.getDetailService(slug)
  )

  return {
    props: {
      slug,
      dehydratedState: dehydrate(queryClient),
    },
  }
}

/**
 * # ServiceDetailPage
 *
 * showing the detail information and sections about the services
 *
 * @returns JSX.Element
 */
const ServiceDetailPage: NextPageWithLayout<{ slug: string }> = ({
  slug,
}): JSX.Element => {
  const cursor = useCursor()
  const mainRef = useRef<HTMLElement>(null)
  const detailQuery = useQuery(['service', slug], () =>
    contentService.getDetailService(slug)
  )

  useEffect(() => {
    cursor.reload()

    const ctx = gsap.context(() => {
      // animate the overview and about section
      if (detailQuery.data?.overview.title) {
        gsap
          .timeline({
            delay: 2.4,
            defaults: {
              ease: 'back',
              duration: 0.7,
            },
          })
          .from('.overview-section-anim .content-anim span', {
            opacity: 0,
            y: 40,
          })
          .from('.overview-section-anim .content-anim h1', {
            opacity: 0,
            y: 100,
            duration: 1.3,
          })
          .from('.overview-section-anim .illustration-anim', {
            opacity: 0,
            y: 200,
            ease: 'expo',
            duration: 0.7,
          })

        // paralax image

        // animate the about sections
        gsap
          .timeline({
            delay: 1,
            defaults: {
              ease: 'back',
              duration: 0.7,
            },
            scrollTrigger: {
              trigger: '.overview-section-anim .summary-anim',
              start: 'top bottom',
            },
          })
          .from('.overview-section-anim .summary-anim p', {
            opacity: 0,
            y: 200,
            stagger: 0.2,
          })
          .from('.overview-section-anim .summary-anim button', {
            y: 40,
            opacity: 0,
          })
      }

      // animate the purpose section
      if (
        detailQuery.data?.purpose.purposes &&
        detailQuery.data.purpose.purposes.length > 0
      ) {
        gsap
          .timeline({
            delay: 0.3,
            defaults: {
              ease: 'back',
              duration: 0.7,
            },
            scrollTrigger: {
              trigger: '.purpose-section-anim',
              start: 'top 75%',
            },
          })
          .from('.purpose-section-anim .heading h2', {
            y: 200,
            opacity: 0,
            duration: 1.2,
          })
          .from('.purpose-section-anim .heading span', {
            y: 100,
            opacity: 0,
          })
          .from('.purpose-section-anim .content', {
            y: 40,
            opacity: 0,
          })
      }

      // animate the process sections
      if (
        detailQuery.data?.process.detail.steps &&
        detailQuery.data.process.detail.steps.length > 0
      ) {
        gsap
          .timeline({
            delay: 0,
            defaults: {
              ease: 'none',
            },
            scrollTrigger: {
              trigger: '.process-section-anim .illustration',
              start: 'top bottom',
              scrub: true,
            },
          })
          .from('.process-section-anim .illustration picture', {
            yPercent: -30,
          })
          .to('.process-section-anim .illustration picture', {
            yPercent: 30,
          })

        gsap
          .timeline({
            delay: 0,
            defaults: {},
            scrollTrigger: {
              trigger: '.process-section-anim .content h2',
              start: 'top 75%',
            },
          })
          .from('.process-section-anim .content h2', {
            opacity: 0,
            y: 100,
          })
          .from('.process-section-anim .content span', {
            opacity: 0,
            y: 200,
          })

        gsap.from('.process-section-anim .detail', {
          opacity: 0,
          y: 300,
          ease: 'back',
          duration: 1.7,
          scrollTrigger: {
            trigger: '.process-section-anim .detail',
            start: 'top 75%',
          },
        })

        const processListEl = document.body.querySelector(
          '.process-section-anim .detail ul'
        ) as HTMLElement

        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.process-section-anim .detail',
              start: 'center center',
              end: '+=' + (processListEl.scrollHeight - 200),
              scrub: true,
              pin: true,
              pinSpacing: true,
              invalidateOnRefresh: true,
            },
          })
          .to('.process-section-anim .detail ul', {
            yPercent:
              -100 *
              (gsap.utils.toArray('.process-section-anim .detail ul li')
                .length -
                1),
            ease: 'none',
          })
      }

      // animate stack sections
      if (
        detailQuery.data?.tools.stacks &&
        detailQuery.data.tools.stacks.length > 0
      ) {
        gsap
          .timeline({
            delay: 0,
            defaults: {
              ease: 'back',
              duration: 0.7,
            },
            scrollTrigger: {
              trigger: '.tool-section-anim .heading',
              start: 'top 75%',
              pinSpacing: true,
            },
          })
          .from('.tool-section-anim .heading h2', {
            y: 100,
            opacity: 0,
          })
          .from('.tool-section-anim .heading span', {
            opacity: 0,
            y: 100,
          })
          .from('.tool-section-anim .list', {
            y: 200,
            opacity: 0,
            duration: 1.7,
          })
      }
    }, mainRef)

    return () => {
      ctx.revert()
    }
  }, [detailQuery.data])

  return (
    <>
      <Head>
        <title>{`${detailQuery.data?.overview.title} Service - Nyoman Sunima`}</title>
        <meta name="description" content={detailQuery.data?.overview.desc} />
      </Head>

      <main ref={mainRef} className={styles.main}>
        {/* overview of service section */}
        <section className={`${styles.overview_section} overview-section-anim`}>
          <div className={`${styles.content} content-anim`}>
            <span
              data-cursor-size="100"
              data-cursor-text="🎉"
              data-cursor-text-size="28"
            >
              {detailQuery.data && detailQuery.data.overview.title}
            </span>
            <h1 data-cursor-size="200" data-cursor-exclusion>
              {detailQuery.data && detailQuery.data.overview.headline}
            </h1>
          </div>

          {/* adding about */}
          <ParalaxImage
            className="illustration-anim"
            image={(detailQuery.data && detailQuery.data.about.image) || ''}
            alt={(detailQuery.data && detailQuery.data.overview.title) || ''}
          />
          <div className={`${styles.summary} summary-anim`}>
            {detailQuery.data &&
              detailQuery.data.about.descs.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            <div className={styles.actions}>
              <OutlineButton magnetic={true} link="/contact">
                Let's work together 💘
              </OutlineButton>
            </div>
          </div>
        </section>

        {/* purspose of services */}
        {detailQuery.data && detailQuery.data.purpose.title && (
          <section className={`${styles.purpose_section} purpose-section-anim`}>
            <div className={`${styles.heading} heading`}>
              <h2 data-cursor-size="200" data-cursor-exclusion>
                {detailQuery.data.purpose.title}
              </h2>
              <span>{detailQuery.data.purpose.desc}</span>
            </div>
            <div className={`${styles.content} content`}>
              {detailQuery.data.purpose.purposes.map((purpose, index) => (
                <ServicePurposeItem data={purpose} key={index} />
              ))}
            </div>
          </section>
        )}

        {/* process sections */}
        {detailQuery.data &&
          detailQuery.data.process.detail.steps.length > 0 && (
            <section
              className={`${styles.process_section} process-section-anim`}
            >
              <ParalaxImage
                image={detailQuery.data.process.image}
                alt={detailQuery.data.overview.title}
                size="medium"
              />

              <div className={`${styles.content} content`}>
                <h2 data-cursor-size="200" data-cursor-exclusion>
                  {detailQuery.data.process.title}
                </h2>
                <span>{detailQuery.data.process.desc}</span>
              </div>

              <div className={`${styles.detail} detail`}>
                <div className={`${styles.process_image} process-image-anim`}>
                  <picture data-cursor-size="80" data-cursor-text="Process">
                    <Image
                      src={detailQuery.data.process.detail.image}
                      fill
                      alt={detailQuery.data.process.title}
                    />
                  </picture>
                </div>
                <ul className={styles.process}>
                  {detailQuery.data.process.detail.steps.map((step, index) => (
                    <ServiceProcessItem
                      data={step}
                      position={index + 1}
                      key={index}
                    />
                  ))}
                </ul>
              </div>
            </section>
          )}

        {/* tools and stacks sections */}
        {detailQuery.data && detailQuery.data.tools.stacks.length > 0 && (
          <section className={`${styles.tool_stack_section} tool-section-anim`}>
            <div className={`${styles.heading} heading`}>
              <h2 data-cursor-exclusion data-cursor-size="200">
                {detailQuery.data.tools.title}
              </h2>
              <span>{detailQuery.data.tools.desc}</span>
            </div>
            <div className={`${styles.list} list`}>
              {detailQuery.data.tools.stacks.map((stack, index) => (
                <StackItem data={stack} key={index} />
              ))}
            </div>
          </section>
        )}

        {/* contact section */}
        <ContactSection />
      </main>
    </>
  )
}

ServiceDetailPage.layout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>
}

export { getServerSideProps }
export default ServiceDetailPage
