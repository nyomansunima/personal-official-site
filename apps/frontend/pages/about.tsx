import { GeneralLayout } from '@components/layouts'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import { NextPageWithLayout } from '~/types/app'
import styles from '@styles/pages/about.module.scss'
import Image from 'next/image'
import useCursor from '@lib/hooks/use-cursor'
import { GetServerSideProps } from 'next'
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import { gsap } from 'gsap'
import commonService from '@lib/services/common-service'
import { useRouter } from 'next/router'
import { format, parse } from 'date-fns'

const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['about'], commonService.getAboutDetail)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

/**
 * # AboutPage
 *
 * show informationa about the user
 * including the certficate, skills, resume, and other one
 *
 * @returns JSX.Element
 */
const AboutPage: NextPageWithLayout = (): JSX.Element => {
  const cursor = useCursor()
  const mainRef = useRef<HTMLElement>(null)
  const router = useRouter()
  const detailQuery = useQuery(['about'], commonService.getAboutDetail)

  const openLink = (link?: string) => {
    if (link?.includes('https://') || link?.includes('http://')) {
      window.open(link!)
    } else {
      router.push(link!)
    }
  }

  useEffect(() => {
    cursor.reload()

    const ctx = gsap.context(() => {
      // animate overview
      gsap
        .timeline({
          delay: 0.3,
          defaults: {
            ease: 'back',
            duration: 0.7,
          },
          scrollTrigger: {
            trigger: '.overview-section',
            start: 'center center',
            end: '+=2000',
            scrub: 2,
            pin: '.overview-section',
            pinSpacing: true,
            pinType: 'transform',
          },
        })
        .from('.overview-section .attr', {
          opacity: 0,
          y: 100,
          stagger: 0.24,
        })
        .from('.overview-section .content .image', {
          y: 400,
          opacity: 0,
          duration: 2.4,
          ease: 'none',
        })
        .from('.overview-section .content .image picture', {
          y: 400,
          ease: 'none',
        })

      // animate about
      gsap
        .timeline({
          delay: 0.3,
          defaults: {
            ease: 'back',
            duration: 0.7,
          },
          scrollTrigger: {
            trigger: '.about-section',
            start: 'top center',
          },
        })
        .from('.about-section .content h2', {
          y: 200,
          opacity: 0,
        })
        .from('.about-section .content span', {
          y: 100,
          opacity: 0,
          stagger: 0.35,
        })

      // animate goal section
      gsap
        .timeline({
          delay: 0,
          defaults: {
            ease: 'none',
            duration: 1.6,
          },
          scrollTrigger: {
            trigger: '.goal-section .image',
            start: 'top center',
            end: '+=1200',
            scrub: true,
          },
        })
        .from('.goal-section .image picture', {
          yPercent: -30,
        })
        .to('.goal-section .image picture', {
          yPercent: 30,
        })

      // animate status
      if (detailQuery.data?.stories && detailQuery.data.stories.length > 0) {
        gsap
          .timeline({
            delay: 0.3,
            defaults: {
              ease: 'back',
              duration: 0.7,
            },
            scrollTrigger: {
              trigger: '.status-section',
              start: 'top center',
            },
          })
          .from('.status-section .heading h2', {
            y: 200,
            opacity: 0,
          })
          .from('.status-section .content', {
            y: 200,
            opacity: 0,
            duration: 1.4,
          })
      }

      // animate certificat sections
      if (
        detailQuery.data?.certificates &&
        detailQuery.data.certificates.length > 0
      ) {
        gsap
          .timeline({
            delay: 0.3,
            defaults: {
              ease: 'back',
              duration: 0.7,
            },
            scrollTrigger: {
              trigger: '.certificate-section',
              start: 'top center',
            },
          })
          .from('.certificate-section .heading h2', {
            y: 200,
            opacity: 0,
          })
          .from('.certificate-section .heading span', {
            y: 100,
            opacity: 0,
          })
          .from('.certificate-section .content .item', {
            y: 200,
            opacity: 0,
            stagger: 0.25,
          })

        const slideEl = document.body.querySelector(
          '.certificate-section .content .slide'
        ) as HTMLElement

        gsap.to('.certificate-section .content .slide', {
          yPercent:
            -100 *
            ((slideEl.clientHeight - window.innerHeight) /
              (window.innerHeight - 200)),
          xPercent:
            -80 *
            ((slideEl.clientWidth - window.innerWidth) / window.innerWidth),
          duration: 2.1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.certificate-section .content',
            start: 'top top',
            end: '+=2000',
            scrub: true,
            pin: '.certificate-section .content',
            pinType: 'transform',
            pinSpacing: true,
          },
        })
      }

      if (detailQuery.data?.clients && detailQuery.data.clients.length > 0) {
        gsap
          .timeline({
            delay: 0.4,
            defaults: {
              ease: 'back',
              duration: 0.7,
            },
            scrollTrigger: {
              trigger: '.client-section',
              start: 'top center',
            },
          })
          .from('.client-section .heading h2', {
            y: 200,
            opacity: 0,
          })
          .from('.client-section .heading span', {
            y: 100,
            opacity: 0,
          })
          .from('.client-section .content .item', {
            y: 100,
            opacity: 0,
            scale: 0.9,
            stagger: 0.24,
          })
      }

      // animate experience section
      const timelineEl = document.body.querySelector(
        '.experience-section .content ul'
      ) as HTMLElement

      if (
        detailQuery.data?.timelines &&
        detailQuery.data.timelines.length > 0
      ) {
        gsap
          .timeline({
            delay: 0.2,
            defaults: {
              ease: 'back',
              duration: 0.7,
            },
            scrollTrigger: {
              trigger: '.experience-section .heading',
              start: 'top 30%',
              pin: '.experience-section .heading',
              end: '+=' + (timelineEl.clientHeight - window.innerHeight / 2),
              pinType: 'transform',
            },
          })
          .from('.experience-section .heading h2', {
            y: 200,
            opacity: 0,
          })
          .from('.experience-section .heading span', {
            y: 100,
            opacity: 0,
          })
          .from('.experience-section .content ul li', {
            y: 200,
            opacity: 0,
            stagger: 0.2,
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
        <title>About - Nyoman Sunima</title>
        <meta
          name="description"
          content="Hey, may name is Nyoman Sunima. and i am a product designer and developer"
        />
      </Head>

      <main ref={mainRef} className={styles.main}>
        {/* overview section */}
        <section className={`${styles.overview_section} overview-section`}>
          <div className={`${styles.content} content`}>
            <div className={`${styles.image} image`}>
              <picture>
                <Image src={'/images/profile-image.png'} fill alt="Image" />
              </picture>
            </div>
            <h2>Nyoman Sunima</h2>
          </div>

          <span className={`${styles.attr} attr`} data-cursor-magnetic="fixed">
            Developer
          </span>
          <span className={`${styles.attr} attr`} data-cursor-magnetic="fixed">
            Product Designer
          </span>
          <span className={`${styles.attr} attr`} data-cursor-magnetic="fixed">
            Creator
          </span>
          <span className={`${styles.attr} attr`} data-cursor-magnetic="fixed">
            Self taught
          </span>
          <span className={`${styles.attr} attr`} data-cursor-magnetic="fixed">
            Indie Maker
          </span>
        </section>

        {/* about section */}
        <section className={`${styles.about_section} about-section`}>
          <div className={`${styles.content} content`}>
            <h2 data-cursor-size="200" data-cursor-exclusion>
              About me in a few seconds
            </h2>
            <div className={styles.detail}>
              <span>
                Hi. I'm Nyoman Sunima! I'm a self-taught Senior Product
                Designer, YouTuber, Webflow Developer, Entrepreneur located in
                Bali, Indonesia, but above all, I'm a storyteller. I work as
                multi platform developer. In 2022 I just created my all idea
                into the Sonibble. I start to write and sharing all of my
                knowledge over the youtube channel
              </span>
              <span>
                I always learning about something and start to enhance
                everything to close to be perfect. My daily start to make
                product that share to people around the world.
              </span>
            </div>
          </div>
        </section>

        {/* goal section */}
        <section className={`${styles.goal_section} goal-section`}>
          <div className={`${styles.image} image`}>
            <picture>
              <Image src={'/images/full-work-profile.jpg'} alt="Image" fill />
            </picture>
          </div>
          <div className={`${styles.content} content`}>
            <div className={styles.heeading}>
              <h4>My Goals</h4>
            </div>
            <div className={styles.detail}>
              <span>
                My goals is to help people finish their project, very simple.
                But aside of that i have ambition to make something that work
                with amazing experience of user. By combine all stack, design,
                and creativity
              </span>
            </div>
          </div>
        </section>

        {/* Stories section */}
        {detailQuery.data?.stories && detailQuery.data.stories.length > 0 && (
          <section className={styles.stories_section}>
            <div className={styles.content}>
              <div className={styles.list}>
                {detailQuery.data.stories.map((story, index) => (
                  <div
                    className={styles.item}
                    key={index}
                    data-cursor-image={story.image}
                    data-cursor-size="200"
                    onClick={() => window.open(story.url)}
                    style={{
                      background: story.accentColor,
                    }}
                  >
                    <div className={styles.detail}>
                      <h5>{story.title}</h5>
                    </div>

                    <button className={styles.action}>
                      <i className="fi fi-rr-badge"></i>
                    </button>
                  </div>
                ))}
              </div>
              <div className={styles.heading}>
                <h2>What i do recently</h2>
                <h2>is recorded on Stories</h2>
              </div>
            </div>
          </section>
        )}

        {/* certificate section */}
        {detailQuery.data?.certificates &&
          detailQuery.data.certificates.length > 0 && (
            <section
              className={`${styles.certificate_section} certificate-section`}
            >
              <div className={`${styles.heading} heading`}>
                <h2 data-cursor-size="200" data-cursor-exclusion>
                  My certificate license
                </h2>
                <span>
                  Always steady to make something on track. Here are all of my
                  certificate that belong to my skill. This will help you gain
                  more info about me
                </span>
              </div>

              <div className={`${styles.content} content`}>
                <div className={`${styles.slide} slide`}>
                  {detailQuery.data.certificates.map((cert, index) => (
                    <div className={styles.wrapper} key={index}>
                      <div
                        className={`${styles.item} item`}
                        style={{ marginTop: index * 200 }}
                        data-cursor-size="400"
                        data-cursor-image={cert.image}
                      >
                        <h5>{cert.title}</h5>
                        <div className={styles.info}>
                          <span className={styles.publisher}>
                            {cert.publisher}
                          </span>
                          <span className={styles.date}>
                            {format(new Date(cert.publishedAt), 'MMMM, yyyy')}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

        {/* experience section */}
        {detailQuery.data?.timelines &&
          detailQuery.data.timelines.length > 0 && (
            <section
              className={`${styles.experience_section} experience-section`}
            >
              <div className={`${styles.heading} heading`}>
                <h2 data-cursor-exclusion data-cursor-size="200">
                  Capture in the timeline
                </h2>
                <span>
                  Everytime i achive something i wrote into the timeline. All my
                  experience and history are clearly saved in special place with
                  contain all moment
                </span>
              </div>
              <div className={`${styles.content} content`}>
                <ul>
                  {detailQuery.data.timelines.map((timeline, index) => (
                    <li
                      key={index}
                      data-cursor-size="400"
                      data-cursor-image={timeline.image}
                    >
                      <h4>
                        {index + 1}. {timeline.title}
                      </h4>
                      <span>{timeline.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

        {/* client section */}
        {detailQuery.data?.clients && detailQuery.data.clients.length > 0 && (
          <section className={`${styles.client_section} client-section`}>
            <div className={`${styles.heading} heading`}>
              <h2 data-cursor-exclusion data-cursor-size="200">
                I collaborate with world
              </h2>
              <span>
                Over 4+ work i just pleasure to get the oppurtunity to
                collaborate with amazing brand name around the world to create
                awesome things
              </span>
            </div>
            <div className={`${styles.content} content`}>
              {detailQuery.data.clients.map((client, index) => (
                <div
                  onClick={() => openLink(client.url)}
                  key={index}
                  className={`${styles.item} item`}
                  data-cursor-text={client.name}
                  data-cursor-size="80"
                  data-cursor-color="black"
                >
                  <picture>
                    <Image
                      src={client.image}
                      alt="Image"
                      height={100}
                      width={100}
                    />
                  </picture>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  )
}

AboutPage.layout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>
}

export { getServerSideProps }
export default AboutPage
