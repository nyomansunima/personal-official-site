import { GeneralLayout } from '@components/layouts'
import useCursor from '@lib/hooks/use-cursor'
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import { gsap } from 'gsap'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import { NextPageWithLayout } from '~/types/app'
import styles from '@styles/pages/home.module.scss'
import Image from 'next/image'
import { OutlineButton } from '@components/buttons'
import commonService from '@lib/services/common-service'
import { useRouter } from 'next/router'
import { ContactSection } from '@components/contact'

const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['home'], commonService.getHomeDetail)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

/**
 * # HomePage
 *
 * page to home and landing page
 *
 * @returns JSX.Element
 */
const HomePage: NextPageWithLayout = (): JSX.Element => {
  const mainRef = useRef<HTMLElement>(null)
  const cursor = useCursor()
  const detailQuery = useQuery(['home'], commonService.getHomeDetail)
  const router = useRouter()

  const openLink = (link: string) => {
    if (link.includes('https://') || link.includes('http://')) {
      window.open(link)
    } else {
      router.push(link)
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // animate overview section
      gsap.from('.overview-section .image', {
        delay: 2.4,
        y: 200,
        opacity: 0,
        duration: 1.2,
        ease: 'back',
      })
      gsap.from('.overview-section .attr', {
        delay: 2.4,
        y: 100,
        scale: 0.4,
        opacity: 0,
        stagger: 0.2,
        ease: 'back',
      })
      gsap.from('.overview-section .location', {
        delay: 2.4,
        opacity: 0,
        ease: 'back',
      })
      gsap.from('.overview-section .desc', {
        delay: 2.4,
        y: 200,
        opacity: 0,
        duration: 1.2,
        ease: 'back',
      })
      gsap.from('.overview-section .action', {
        delay: 2.6,
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'back',
      })

      gsap.to('.overview-section .location i', {
        delay: 2.4,
        rotate: '360deg',
        repeat: -1,
        ease: 'none',
        duration: 4.3,
      })

      // animate the stories section
      if (detailQuery.data?.stories && detailQuery.data.stories.length > 0) {
        gsap
          .timeline({
            delay: 0,
            scrollTrigger: {
              trigger: '.stories-section',
              start: 'top bottom',
              end: '+=1000',
              scrub: 0.7,
            },
          })
          .from('.stories-section .heading h2', {
            x: -200,
            ease: 'back',
            duration: 0.7,
            opacity: 0,
          })
          .from('.stories-section .content', {
            y: 200,
            opacity: 0,
          })
      }

      // animate blog section
      if (
        detailQuery.data?.blogPosts &&
        detailQuery.data.blogPosts.length > 0
      ) {
        gsap.to(document.body, {
          background: '#e4fdfd',
          ease: 'none',
          duration: 1.2,
          scrollTrigger: {
            trigger: '.blog-section .heading h2',
            start: 'top 75%',
            end: 'bottom top',
            scrub: true,
          },
        })
        gsap
          .timeline({
            delay: 0.3,
            defaults: {
              ease: 'back',
              duration: 0.7,
            },
            scrollTrigger: {
              trigger: '.blog-section',
              start: 'top center',
            },
          })
          .from('.blog-section .heading h2', {
            y: 200,
            opacity: 0,
            duration: 1.2,
          })
          .from('.blog-section .heading span', {
            y: 100,
            opacity: 0,
          })
          .from('.blog-section .slide', {
            opacity: 0,
          })

        const slideEl = document.body.querySelector(
          '.blog-section .slide'
        ) as HTMLElement

        gsap.to('.blog-section .slide', {
          xPercent:
            -60 *
            ((slideEl.clientWidth - window.innerWidth) / window.innerWidth),
          ease: 'none',
          duration: 1.5,
          scrollTrigger: {
            trigger: '.blog-section .slide',
            start: 'center center',
            end: '+=' + slideEl.clientWidth,
            scrub: true,
            pin: true,
            pinType: 'transform',
            pinSpacing: true,
          },
        })
      }

      // animate inspi section
      gsap.to(document.body, {
        background: '#fff7ff',
        ease: 'none',
        duration: 1.2,
        scrollTrigger: {
          trigger: '.inspi-section .heading h2',
          start: 'top 75%',
          end: 'bottom top',
          scrub: true,
        },
      })
      gsap
        .timeline({
          delay: 0.2,
          defaults: {
            ease: 'back',
            duration: 0.7,
          },
          scrollTrigger: {
            trigger: '.inspi-section',
            start: 'top 75%',
          },
        })
        .from('.inspi-section .heading h2', {
          y: 200,
          opacity: 0,
          duration: 1.2,
        })
        .from('.inspi-section .heading span', {
          y: 200,
          opacity: 0,
        })

      gsap.from('.inspi-section .content', {
        y: 200,
        opacity: 0,
        duration: 1.4,
        ease: 'back',
        scrollTrigger: {
          trigger: '.inspi-section .content',
          start: 'top 75%',
        },
      })

      // animate the explore section
      gsap.to(document.body, {
        background: '#f1f1ff',
        ease: 'none',
        duration: 1.2,
        scrollTrigger: {
          trigger: '.explore-section .left h2',
          start: 'top 75%',
          end: '+=400',
          scrub: true,
        },
      })

      gsap.to(document.body, {
        background: '#ffffff',
        ease: 'none',
        duration: 1.2,
        scrollTrigger: {
          trigger: '.explore-section',
          // start: 'bottom center',
          end: '+=1400',
        },
      })
      gsap
        .timeline({
          delay: 0.1,
          defaults: {
            ease: 'back',
            duration: 0.7,
          },
          scrollTrigger: {
            trigger: '.explore-section .left h2',
            start: 'top 80%',
            scrub: 4,
          },
        })
        .from('.explore-section .left h2', {
          x: -200,
          opacity: 0,
          duration: 1.2,
        })
        .from('.explore-section .left .actions', {
          y: 100,
          opacity: 0,
        })

      const exploreScroll = document.body.querySelector(
        '.explore-section .right'
      ) as HTMLElement
      const listChild = gsap.utils.toArray('.explore-section .right .item')

      gsap.to('.explore-section .left', {
        scrollTrigger: {
          trigger: '.explore-section .right',
          start: 'top top',
          end:
            '+=' +
            (exploreScroll.clientHeight - (700 + (listChild.length - 1) * 75)),
          pin: '.explore-section .left',
          pinType: 'transform',
        },
      })
    }, mainRef)

    cursor.reload()

    return () => {
      ctx.revert()
    }
  }, [detailQuery.data])

  return (
    <>
      <Head>
        <title>
          Product Designer, Fullstack Developer, & Indie App Maker | Nyoman
          Sunima
        </title>
        <meta
          name="description"
          content="Nyoman Sunima is Product Designer, UI UX Designer, Developer and Indie App Maker located in Bali, Indonesia."
        />
      </Head>

      <main ref={mainRef} className={styles.main}>
        {/* overview section */}
        <section className={`${styles.overview_section} overview-section`}>
          <div className={styles.content}>
            <div className={styles.left}>
              <span
                className={`${styles.attr} attr`}
                data-cursor-magnetic="fixed"
              >
                Product Designer
              </span>
              <span
                className={`${styles.attr} attr`}
                data-cursor-magnetic="fixed"
              >
                Indie app maker
              </span>
              <span
                className={`${styles.attr} attr`}
                data-cursor-magnetic="fixed"
              >
                Fullstack Developer
              </span>
              <span
                className={`${styles.attr} attr`}
                data-cursor-magnetic="fixed"
              >
                Content Creator
              </span>

              <div className={`${styles.location} location`}>
                <span>Located in Bali, Indonesia</span>
                <i className="fi fi-rr-globe"></i>
              </div>
            </div>

            <div className={`${styles.image} image`}>
              <picture>
                <Image
                  src={'/images/profile-image.png'}
                  fill
                  alt="Nyoman Sunima"
                  sizes="auto"
                  priority
                />
              </picture>
            </div>

            <div className={styles.right}>
              <span className={`${styles.desc} desc`}>
                Hi. I'm Nyoman Sunima! I'm a self-taught Senior Product
                Designer, Creative Fullstack Developer located in Bali,
                Indonesia.
              </span>
              <div className={styles.actions}>
                <OutlineButton magnetic={true} className="action" link="/about">
                  More about me
                </OutlineButton>
              </div>
            </div>
          </div>
        </section>

        {detailQuery.data?.stories && detailQuery.data.stories.length > 0 && (
          <section className={`${styles.stories_section} stories-section`}>
            <div className={`${styles.heading} heading`}>
              <h2 data-cursor-size="200" data-cursor-exclusion>
                So here is what's currently <span> i am doing on</span>
              </h2>
            </div>
            <div className={`${styles.content} content`}>
              {detailQuery.data.stories.map((story, index) => (
                <span
                  data-cursor-size="80"
                  data-cursor-text="View"
                  key={index}
                  data-cursor-color={story.accentColor}
                  onClick={() => window.open(story.url)}
                >
                  {story.title}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* latest blog posts */}
        {detailQuery.data?.blogPosts &&
          detailQuery.data.blogPosts.length > 0 && (
            <section className={`${styles.blog_section} blog-section`}>
              <div className={`${styles.heading} heading`}>
                <h2 data-cursor-exclusion data-cursor-size="200">
                  New day new articles
                </h2>
                <span>
                  I regulary create content in blog every day. I sharing across
                  the technique about design, development, and proces for
                  building projects
                </span>
              </div>
              <div className={styles.content}>
                <div className={`${styles.slide} slide`}>
                  {detailQuery.data.blogPosts.map((post, index) => (
                    <div
                      key={index}
                      className={styles.item}
                      onClick={() =>
                        openLink(
                          `${process.env.NEXT_PUBLIC_HASHNODE_BLOG_URL}/${post.slug}`
                        )
                      }
                    >
                      <picture
                        data-cursor-size="80"
                        data-cursor-icon="fi fi-rr-arrow-up-right"
                      >
                        <Image
                          src={post.coverImage}
                          fill
                          alt={post.title}
                          sizes="auto"
                        />
                      </picture>
                      <h4>{post.title}</h4>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.actions}>
                <OutlineButton magnetic={true} link="/blog">
                  Read more in Blog
                  <i className="fi fi-rr-arrow-right"></i>
                </OutlineButton>
              </div>
            </section>
          )}

        {/* inspirations */}
        {detailQuery.data?.inspirations &&
          detailQuery.data.inspirations.length > 0 && (
            <section className={`${styles.inspi_section} inspi-section`}>
              <div className={`${styles.heading} heading`}>
                <h2>New day, new inspiro</h2>
                <span>
                  I update every inspiration for project, design and
                  illustrations. Stay tune about the update and get inspiration
                  about your next project
                </span>
              </div>
              <div className={`${styles.content} content`}>
                {detailQuery.data.inspirations.map((inspi, index) => (
                  <div
                    className={styles.item}
                    key={index}
                    onClick={() => openLink(inspi.url)}
                  >
                    <picture
                      data-cursor-size="80"
                      data-cursor-text="Detail"
                      data-cursor-color="#c5a8ff"
                    >
                      <Image src={inspi.image} fill alt="Image" sizes="auto" />
                    </picture>
                    <h4>{inspi.title}</h4>
                  </div>
                ))}
              </div>

              <div className={styles.actions}>
                <OutlineButton magnetic={true} link="/inspiration">
                  More inspirations
                  <i className="fi fi-rr-arrow-right"></i>
                </OutlineButton>
              </div>
            </section>
          )}

        {/* explorations section */}
        <section className={`${styles.explore_section} explore-section`}>
          <div className={`${styles.left} left`}>
            <h2 data-cursor-size="200" data-cursor-exclusion>
              The important thing to enhance my skill{' '}
              <span> is doing exploration</span>
            </h2>

            <div className={`${styles.actions} actions`}>
              <OutlineButton link="/explore">🎉 More to explore</OutlineButton>
            </div>
          </div>
          <div className={`${styles.right} right`}>
            {detailQuery.data &&
              detailQuery.data.explorations.map((item, index) => (
                <div
                  className={`${styles.item} item`}
                  onClick={() => router.push(`/explore/${item.slug}`)}
                  key={index}
                >
                  <picture
                    data-cursor-size="100"
                    data-cursor-text="View Detail"
                  >
                    <Image
                      src={item.thumbnail}
                      fill
                      alt={item.title}
                      sizes="auto"
                    />
                  </picture>
                  <div className={styles.detail}>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* contact section */}
        <ContactSection />
      </main>
    </>
  )
}

HomePage.layout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>
}

export { getServerSideProps }
export default HomePage
