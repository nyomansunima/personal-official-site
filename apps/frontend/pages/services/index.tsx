import { GeneralLayout } from '@components/layouts'
import Head from 'next/head'
import { NextPageWithLayout } from '~/types/app'
import styles from '@styles/pages/services/services.module.scss'
import useCursor from '@lib/hooks/use-cursor'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ServiceFAQItem, ServiceSection } from '@components/services'
import { GetServerSideProps } from 'next'
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import offerService from '@lib/services/offer-service'
import { ContactSection } from '@components/contact'

const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    ['service', 'faq'],
    offerService.getAllServiceFAQ
  )
  await queryClient.prefetchQuery(
    ['service', 'list'],
    offerService.getAllServicePreview
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

/**
 * # ServicePage
 *
 * showing all service to offer
 * and will bring into the detail one
 *
 * @returns JSX.Element
 */
const ServicePage: NextPageWithLayout = (): JSX.Element => {
  const cursor = useCursor()
  const mainRef = useRef<HTMLElement>(null)
  const faqQuery = useQuery(['service', 'faq'], offerService.getAllServiceFAQ)
  const servicePreviewsQuery = useQuery(
    ['service', 'list'],
    offerService.getAllServicePreview
  )

  useEffect(() => {
    cursor.reload()

    const ctx = gsap.context(() => {
      // animate the headline
      gsap.timeline({ delay: 0.4 }).from('.head-section-anim div h1 span', {
        y: 80,
        opacity: 0,
        stagger: 0.07,
        ease: 'back',
        duration: 1.7,
      })

      // animate the explain section
      gsap
        .timeline({
          defaults: { ease: 'none', duration: 0.7 },
          scrollTrigger: {
            trigger: '.explain-section-anim',
            start: 'top center',
            end: '+=300',
            scrub: true,
          },
        })
        .from('.explain-section-anim h4', {
          y: 40,
          opacity: 0,
        })
        .from('.explain-section-anim span', {
          y: 100,
          opacity: 0,
        })
        .from('.explain-section-anim .illustration-anim', {
          y: 200,
          opacity: 0,
        })

      // animate the faq section
      gsap
        .timeline({
          delay: 0,
          defaults: { duration: 0.7, ease: 'none' },
          scrollTrigger: {
            trigger: '.faq-section-anim',
            start: 'top center',
            end: '+=700',
            scrub: true,
          },
        })
        .to(document.body, {
          background: '#ffffff',
          duration: 1.7,
          ease: 'none',
        })
        .from('.faq-section-anim div h1', {
          y: 100,
          opacity: 0,
        })
        .from('.faq-section-anim div span', {
          y: 40,
          opacity: 0,
        })
        .from('.faq-section-anim div ul li', {
          y: 80,
          opacity: 0,
          scale: 0.9,
          stagger: 1,
          delay: 1.4,
        })

      // animate the quote section
      gsap.from('.quote-section-anim h2', {
        y: 200,
        opacity: 0,
        duration: 1.7,
        ease: 'back',
        scrollTrigger: {
          trigger: '.quote-section-anim',
          start: 'top center',
          end: '+=400',
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
        <title>Services - Nyoman Sunima</title>
        <meta
          name="description"
          content="Explore all of my service offer to help you"
        />
      </Head>

      <main ref={mainRef} className={styles.main}>
        {/* svg filter for the image */}
        {/* use to filter of element */}
        <svg>
          <defs>
            <filter
              id="svg-distortion-filter"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
            >
              <feTurbulence
                baseFrequency="0.01 0.002"
                result="warp"
                numOctaves="2"
                id="turbulence"
                stitchTiles="noStitch"
                seed="2"
                type="fractalNoise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="warp"
                scale="5"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>

        {/* head sections */}
        <section className={`${styles.head_section} head-section-anim`}>
          <div className={styles.wrapper}>
            <h1 data-cursor-size="200" data-cursor-exclusion>
              {'Going beyond the limits'.split('').map((char, index) => (
                <span
                  className={`${char == ' ' ? styles.space : ''}`}
                  key={index}
                >
                  {char}
                </span>
              ))}
            </h1>
          </div>
        </section>

        {/* explain sections */}
        <section className={`${styles.explain_section} explain-section-anim`}>
          <div className={styles.content}>
            <div className={styles.heading}>
              <h4 data-cursor-size="100" data-cursor-exclusion>
                This is what i do
              </h4>
            </div>
            <div className={styles.desc}>
              <span>
                I am create an idea into a working product. Playing with
                creativity, technology, and collaboration to create beautiful
                and satisfied product for user around the world.
              </span>
            </div>
          </div>
          <div className={`${styles.illustrations} illustration-anim`}>
            <span className={styles.bubble}>Technology</span>
            <span className={styles.bubble}>Goals</span>
            <span className={styles.bubble}>User Need</span>
          </div>
        </section>

        {/* all of services sections */}
        {servicePreviewsQuery.data &&
          servicePreviewsQuery.data.map((data, index) => (
            <ServiceSection data={data} key={index} />
          ))}

        {/* faq about service sections */}
        <section className={`${styles.faq_section} faq-section-anim`}>
          <div className={styles.wrapper}>
            <h2>Got questions?</h2>
            <span>
              Maybe something you want to ask about the services. Here you can
              find most asked question that may related to your questions
            </span>
            <ul className={styles.list}>
              {faqQuery.data &&
                faqQuery.data.map((data, index) => (
                  <ServiceFAQItem data={data} key={index} />
                ))}
            </ul>
          </div>
        </section>

        {/* some quote sections */}
        <section className={`${styles.quotes_section} quote-section-anim`}>
          <div className={styles.wrapper}>
            <h2 data-cursor-size="200" data-cursor-exclusion>
              Carry about your problem and solve with the best solution
            </h2>
          </div>
        </section>

        {/* contact section */}
        <ContactSection />
      </main>
    </>
  )
}

ServicePage.layout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>
}

export { getServerSideProps }
export default ServicePage
