import { OutlineButton } from '@components/buttons'
import Image from 'next/image'
import { FunctionComponent, useEffect, useRef } from 'react'
import styles from '@styles/components/services/service-section.module.scss'
import { gsap } from 'gsap'
import { PreviewService } from '~/types/service'
import Link from 'next/link'

interface ServiceSectionProps {
  data: PreviewService
}

/**
 * # ServiceSection
 *
 * section of service offer
 * item
 * @returns JSX.Element
 */
const ServiceSection: FunctionComponent<ServiceSectionProps> = ({
  data,
}): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const splitColor = gsap.utils.splitColor(data.overview.cursorColor)

      gsap
        .timeline({
          delay: 0.4,
          defaults: {
            ease: 'none',
            duration: 0.7,
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            scrub: true,
            end: '+=700px',
          },
        })
        .to(document.body, {
          background: `rgba(${splitColor[0]}, ${splitColor[1]}, ${splitColor[2]}, .13)`,
          ease: 'none',
          duration: 1.7,
        })
        .from(sectionRef.current!.querySelector('h2'), {
          y: 100,
          opacity: 0,
        })
        .from(sectionRef.current!.querySelector('.image-anim'), {
          opacity: 0.9,
          y: 400,
          duration: 1.4,
        })
        .from(sectionRef.current!.querySelector('.detail-anim span'), {
          opacity: 0,
          y: 100,
        })
        .from(sectionRef.current!.querySelector('.detail-anim button'), {
          opacity: 0,
          y: 80,
          stagger: 0.2,
        })

      // adding paralax effect on image
      gsap.to(sectionRef.current!.querySelector('.paralax-anim'), {
        y: 200,
        scrollTrigger: {
          trigger: sectionRef.current!.querySelector('.paralax-anim'),
          start: 'top center',
          scrub: true,
          end: '+=1000',
        },
      })

      // hover image animation
      const svgDistortion = document.querySelector('#svg-distortion-filter')
      const turbolenceAnim = gsap
        .timeline({
          paused: true,
          repeat: -1,
          delay: 0,
        })
        .to(svgDistortion!.querySelector('feTurbulence'), {
          attr: { seed: gsap.utils.random(2, 150) },
        })
        .to(svgDistortion!.querySelector('feDisplacementMap'), {
          attr: { scale: gsap.utils.random(80, 120) },
          duration: 1.4,
          ease: 'expo.out',
        })
        .to(svgDistortion!.querySelector('feDisplacementMap'), {
          attr: { scale: 1 },
          duration: 2.4,
          ease: 'expo.out',
        })
        .to(svgDistortion!.querySelector('feDisplacementMap'), {
          attr: { scale: gsap.utils.random(50, 100) },
          duration: 1.4,
          ease: 'expo.out',
        })
        .to(svgDistortion!.querySelector('feDisplacementMap'), {
          attr: { scale: 1 },
          duration: 2.4,
          ease: 'expo.out',
        })

      self.add('onHover', () => {
        turbolenceAnim.play()
      })
      self.add('outHover', () => {
        turbolenceAnim.reverse(1).pause(0)
      })
    }, sectionRef)

    const hoverTarget = sectionRef.current?.querySelector(
      '.image-anim'
    ) as HTMLElement
    hoverTarget.addEventListener('mouseenter', () => ctx.onHover())
    hoverTarget.addEventListener('mouseleave', () => ctx.outHover())

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`${styles.service_section} service-section-anim`}
    >
      <div className={styles.wrapper}>
        <h2 data-cursor-size="200" data-cursor-exclusion>
          {data.overview.title}
        </h2>
        <div className={styles.content}>
          <div
            data-cursor-size="100"
            data-cursor-text="Read More"
            data-cursor-color={data.overview.cursorColor}
            className={`${styles.image} image-anim`}
          >
            <div className={`${styles.paralax} paralax-anim`}>
              <Link href={`/services/${data.slug}`}>
                <Image
                  src={data.overview.thumbnail}
                  fill
                  alt={data.overview.title}
                />
              </Link>
            </div>
          </div>
          <div className={`${styles.detail} detail-anim`}>
            <span className={styles.desc}>{data.overview.desc}</span>
            <div className={styles.actions}>
              <OutlineButton link={`/services/${data.slug}`}>
                Read More <i className="fi fi-rr-arrow-right"></i>
              </OutlineButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
