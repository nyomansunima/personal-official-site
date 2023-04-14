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
import {
  ServiceProcessItem,
  ServicePurposeItem,
  ServiceRelatedProjectItem,
  ServiceReqItem,
} from '@components/services'
import { StackItem } from '@components/stack'
import { GetServerSideProps } from 'next'
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import offerService from '@lib/services/offer-service'
import ServicePlatformItem from '@components/services/service-platform-item'

const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params!.slug as string
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['service', slug], () =>
    offerService.getDetailService(slug)
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
    offerService.getDetailService(slug)
  )

  useEffect(() => {
    cursor.reload()

    const ctx = gsap.context(() => {
      // animate the platform
      if (
        detailQuery.data?.platform.platforms &&
        detailQuery.data.platform.platforms.length > 0
      ) {
        gsap
          .timeline({
            delay: 0.3,
            defaults: {
              ease: 'back',
              duration: 0.7,
            },
            scrollTrigger: {
              trigger: '.platform-section-anim',
              start: 'top 75%',
            },
          })
          .from('.platform-section-anim .heading h2', {
            y: 200,
            opacity: 0,
            duration: 1.7,
          })
          .from('.platform-section-anim .heading span', {
            y: 100,
            opacity: 0,
          })
          .from('.platform-section-anim .content', {
            x: 200,
            opacity: 0,
            duration: 1.8,
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

      // animate the overview and about section
      gsap
        .timeline({
          delay: 0.2,
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

      gsap
        .timeline({
          delay: 0,
          defaults: {
            ease: 'none',
          },
          scrollTrigger: {
            trigger: '.overview-section-anim .illustration-anim',
            start: 'top bottom',
            scrub: true,
          },
        })
        .from('.overview-section-anim .illustration-anim picture', {
          yPercent: -30,
        })
        .to('.overview-section-anim .illustration-anim picture', {
          yPercent: 30,
        })

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
              end: '+=' + processListEl.scrollHeight,
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

      // animate the sample work section
      if (
        detailQuery.data?.result.works &&
        detailQuery.data.result.works.length > 0
      ) {
        gsap
          .timeline({
            delay: 0.3,
            defaults: {
              ease: 'back',
              duration: 0.7,
            },
            scrollTrigger: {
              trigger: '.sample-work-section-anim .heading-anim',
              start: 'top center',
            },
          })
          .from('.sample-work-section-anim .heading-anim h2', {
            opacity: 0,
            y: 200,
          })
          .from('.sample-work-section-anim .heading-anim span', {
            opacity: 0,
            y: 200,
          })

        gsap.from('.sample-work-section-anim .slider-anim', {
          opacity: 0,
          y: 200,
          scrollTrigger: {
            trigger: '.sample-work-section-anim .slider-anim',
            start: 'top center',
          },
        })

        gsap.to('.sample-work-section-anim .slider-anim', {
          xPercent:
            (-100 *
              ((
                document.body.querySelector(
                  '.sample-work-section-anim .slider-anim'
                ) as HTMLElement
              ).scrollWidth -
                window.innerWidth)) /
            window.innerWidth,
          scrollTrigger: {
            trigger: '.sample-work-section-anim .slider-anim',
            start: 'top 5%',
            end:
              '+=' +
              (
                document.body.querySelector(
                  '.sample-work-section-anim .slider-anim'
                ) as HTMLElement
              ).scrollWidth,
            scrub: true,
            pin: true,
            pinSpacing: true,
          },
        })
      }

      // animate req
      if (
        detailQuery.data?.requirement.reqs &&
        detailQuery.data.requirement.reqs.length > 0
      ) {
        gsap
          .timeline({
            delay: 0.2,
            defaults: {
              ease: 'back',
              duration: 0.7,
            },
            scrollTrigger: {
              trigger: '.req-section-anim',
              start: 'top center',
            },
          })
          .from('.req-section-anim .heading h2', {
            y: 200,
            opacity: 0,
            duration: 1.2,
          })
          .from('.req-section-anim .heading span', {
            y: 100,
            opacity: 0,
          })
          .from('.req-section-anim .content', {
            y: 200,
            opacity: 0,
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
        <title>{`${detailQuery.data?.seo.title} Service - Nyoman Sunima`}</title>
        <meta name="description" content={detailQuery.data?.seo.description} />
      </Head>

      {detailQuery.data && (
        <main ref={mainRef} className={styles.main}>
          {/* overview of service section */}
          <section
            className={`${styles.overview_section} overview-section-anim`}
          >
            <div className={`${styles.content} content-anim`}>
              <span data-cursor-size="100" data-cursor-text="Service">
                {detailQuery.data.overview.title}
              </span>
              <h1 data-cursor-size="200" data-cursor-exclusion>
                {detailQuery.data.overview.headline}
              </h1>
            </div>

            {/* adding about */}
            <div className={`${styles.illustration} illustration-anim`}>
              <picture>
                <Image
                  src={detailQuery.data.about.image}
                  fill
                  alt={detailQuery.data.overview.title}
                />
              </picture>
            </div>
            <div className={`${styles.summary} summary-anim`}>
              {detailQuery.data.about.descs.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
              <div className={styles.actions}>
                <OutlineButton link="/contact">
                  Let's work together
                </OutlineButton>
              </div>
            </div>
          </section>

          {/* purspose of services */}
          {detailQuery.data.purpose.purposes.length > 0 && (
            <section
              className={`${styles.purpose_section} purpose-section-anim`}
            >
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
          {detailQuery.data.process.detail.steps.length > 0 && (
            <section
              className={`${styles.process_section} process-section-anim`}
            >
              <div className={`${styles.illustration} illustration`}>
                <picture>
                  <Image
                    src={detailQuery.data.process.image}
                    fill
                    alt={detailQuery.data.seo.title}
                  />
                </picture>
              </div>

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

          {/* platform sections */}
          {detailQuery.data.platform.platforms.length > 0 && (
            <section
              className={`${styles.platform_section} platform-section-anim`}
            >
              <div className={`${styles.heading} heading`}>
                <h2 data-cursor-size="200" data-cursor-exclusion>
                  {detailQuery.data.platform.title}
                </h2>
                <span>{detailQuery.data.platform.desc}</span>
              </div>
              <div className={`${styles.content} content`}>
                {detailQuery.data.platform.platforms.map((platform, index) => (
                  <ServicePlatformItem data={platform} key={index} />
                ))}
              </div>
            </section>
          )}

          {/* tools and stacks sections */}
          {detailQuery.data.tools.stacks.length > 0 && (
            <section
              className={`${styles.tool_stack_section} tool-section-anim`}
            >
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

          {/* sample work of services */}
          {detailQuery.data.result.works.length > 0 && (
            <section
              className={`${styles.sample_work_section} sample-work-section-anim`}
            >
              <div className={`${styles.heading} heading-anim`}>
                <h2 data-cursor-size="200" data-cursor-exclusion>
                  {detailQuery.data.result.title}
                </h2>
                <span>{detailQuery.data.result.desc}</span>
              </div>
              <div className={`${styles.slider} slider-anim`}>
                {detailQuery.data.result.works &&
                  detailQuery.data.result.works.map((work, index) => (
                    <ServiceRelatedProjectItem data={work} key={index} />
                  ))}
              </div>
              <div className={`${styles.actions} action-anim`}>
                <OutlineButton link="/projects">
                  Explore more on works <i className="fi fi-rr-arrow-right"></i>
                </OutlineButton>
              </div>
            </section>
          )}

          {/* requirements sections */}
          {detailQuery.data.requirement.reqs.length > 0 && (
            <section
              className={`${styles.requirements_section} req-section-anim`}
            >
              <div className={`${styles.heading} heading`}>
                <h2 data-cursor-size="200" data-cursor-exclusion>
                  {detailQuery.data.requirement.title}
                </h2>
                <span>{detailQuery.data.requirement.desc}</span>
              </div>
              <div className={`${styles.content} content`}>
                {detailQuery.data.requirement.reqs.map((req, index) => (
                  <ServiceReqItem data={req} key={index} />
                ))}
              </div>
            </section>
          )}

          {/* contact section */}
          <ContactSection />
        </main>
      )}
    </>
  )
}

ServiceDetailPage.layout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>
}

export { getServerSideProps }
export default ServiceDetailPage
