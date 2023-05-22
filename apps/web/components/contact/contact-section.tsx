import { FunctionComponent, useEffect, useRef } from 'react'
import styles from '@styles/components/contact/contact-section.module.scss'
import Link from 'next/link'
import { gsap } from 'gsap'

/**
 * # ContactSection
 *
 * the section of page to show
 * the contact button call to action
 *
 * @returns JSX.Element
 */
const ContactSection: FunctionComponent = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          delay: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        })
        .from(sectionRef.current!.querySelector('div h2'), {
          ease: 'back',
          y: 200,
          opacity: 0,
          duration: 1.7,
        })
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`${styles.contact_section} contact-section-anim`}
      data-cursor-color="#ffffff"
    >
      <div className={styles.wrapper}>
        <h2 data-cursor-size="200" data-cursor-exclusion>
          <span>Have an idea?</span>
          <Link href={'/contact'}>Tell me about it</Link>
        </h2>
      </div>
    </section>
  )
}

export default ContactSection
