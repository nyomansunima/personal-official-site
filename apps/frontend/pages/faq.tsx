import { GeneralLayout } from '@components/layouts'
import Head from 'next/head'
import { NextPageWithLayout } from '~/types/app'
import styles from '@styles/pages/faq.module.scss'
import useCursor from '@lib/hooks/use-cursor'
import { useEffect, useRef } from 'react'
import { OutlineButton, TextButton } from '@components/buttons'
import { gsap } from 'gsap'
import { FAQCard } from '@components/faq'
import { start } from 'repl'
import { GetServerSideProps } from 'next'
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import faqService from '@lib/services/faq-service'

interface Social {
  label: string
  link: string
}

const socials: Social[] = [
  { label: 'Instagram', link: 'https://instagram.com/nyomansunima' },
  { label: 'Twitter', link: 'https://twitter.com/nyomansunima' },
]

const getServerSideProps: GetServerSideProps = async ({}) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    ['faqs'],
    faqService.getAllFAQGroupedByCategory
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

/**
 * # FAQPage
 *
 * showing the most asked question
 * and following with their answer
 *
 * @returns JSX.Element
 */
const FAQPage: NextPageWithLayout = (): JSX.Element => {
  const cursor = useCursor()
  const mainRef = useRef<HTMLElement>(null)
  const groupedFAQQuesry = useQuery(
    ['faqs'],
    faqService.getAllFAQGroupedByCategory
  )

  useEffect(() => {
    cursor.reload()

    const ctx = gsap.context(() => {
      // animate the header
      gsap
        .timeline({ delay: 0.4 })
        .from('.headline-section-anim h1', {
          y: 100,
          opacity: 0,
          ease: 'back',
          duration: 1.2,
        })
        .from('.headline-section-anim span', {
          y: 100,
          opacity: 0,
          ease: 'back',
          duration: 1.4,
        })

      // animate the list of questions
      gsap
        .timeline({
          delay: 0.4,
          defaults: {
            ease: 'none',
            stagger: 0.4,
            duration: 0.7,
          },
          scrollTrigger: {
            trigger: '.question-section-anim .wrapper-anim',
            start: 'top 75%',
            end: '+=600',
            scrub: 0.7,
          },
        })
        .from('.question-section-anim .wrapper-anim h4', {
          y: 100,
          opacity: 0,
        })
        .from('.question-section-anim .wrapper-anim ul li', {
          opacity: 0,
          y: 80,
          scale: 0.9,
        })

      // animate the asked section
      gsap
        .timeline({
          delay: 0.4,
          defaults: {
            ease: 'back',
            duration: 0.7,
          },
          scrollTrigger: {
            trigger: '.asked-section-anim',
            start: 'top 75%',
          },
        })
        .from('.asked-section-anim h2', {
          y: 100,
          opacity: 0,
        })
        .from('.asked-section-anim p', {
          y: 40,
          opacity: 0,
        })
        .from('.asked-section-anim button', {
          y: 100,
          opacity: 0,
          stagger: 0.2,
        })
    }, mainRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Frequently Asked Questions - Nyoman Sunima</title>
        <meta
          name="description"
          content="Gost question?, here are the answer of most question asked to me"
        />
      </Head>

      <main ref={mainRef} className={styles.main}>
        <section className={`${styles.headline_section} headline-section-anim`}>
          <div className={`${styles.wrapper}`}>
            <h1 data-cursors-size="200" data-cursor-exclusion>
              Got Questions ?
            </h1>
            <span>
              Here are the most common question i get from social media and
              emails. Explore may can help and get solutions faster.
            </span>
          </div>
        </section>

        <section className={`${styles.question_section} question-section-anim`}>
          {groupedFAQQuesry.data &&
            groupedFAQQuesry.data.map((data, index) => (
              <div className={`${styles.wrapper} wrapper-anim`} key={index}>
                <div className={styles.category_side}>
                  <h4 data-cursor-exclusion data-cursor-size="80">
                    {data.title}
                  </h4>
                </div>
                <ul className={styles.list}>
                  {data.faqs.map((faq, index) => (
                    <FAQCard faq={faq} key={index} />
                  ))}
                </ul>
              </div>
            ))}
        </section>

        <section
          className={`${styles.ask_something_section} asked-section-anim`}
        >
          <div className={styles.wrapper}>
            <h2 data-cursor-size="200" data-cursor-exclusion>
              Got one?
            </h2>
            <p>
              If you're have something to asked about. You better contact me on
              social media and we can discus about your faced problems.
            </p>
            <div className={styles.list}>
              {socials.map((social, index) => (
                <OutlineButton link={social.link} key={index}>
                  {social.label}
                </OutlineButton>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

FAQPage.layout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>
}

export default FAQPage
