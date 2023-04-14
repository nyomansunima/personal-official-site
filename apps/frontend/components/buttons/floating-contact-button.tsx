import { useRouter } from 'next/router'
import { FunctionComponent, useEffect, useRef } from 'react'
import styles from '@styles/components/buttons/floating-contact-button.module.scss'
import Image from 'next/image'
import { gsap } from 'gsap'

/**
 * # FloatingContactButton
 *
 * the button to accesible the contact
 * with special animation
 *
 * @returns JSX.Element
 */
const FloatingContactButton: FunctionComponent = (): JSX.Element => {
  const router = useRouter()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const circleTextRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (router.pathname == '/blog' || router.pathname == '/contact') {
      gsap.set(buttonRef.current, { display: 'none' })
    } else {
      gsap.set(buttonRef.current, {
        display: 'flex',
      })
    }

    const ctx = gsap.context((self) => {
      // animate the rotation text
      gsap.from(buttonRef.current, {
        y: 200,
        opacity: 0,
        duration: 2.1,
        ease: 'elastic',
      })
      gsap.to(circleTextRef.current, {
        rotate: '360deg',
        repeat: -1,
        duration: 9,
        ease: 'linear',
      })

      // hover animation
      const bounce = gsap.to(iconRef.current, {
        scale: 1.2,
        repeat: -1,
        duration: 0.7,
        yoyo: true,
        ease: 'power2',
        paused: true,
      })

      self.add('onHover', () => {
        gsap.to(circleTextRef.current, {
          scale: 0,
          duration: 1.4,
          ease: 'expo',
        })

        bounce.play()
      })

      self.add('outHover', () => {
        gsap.to(circleTextRef.current, {
          scale: 1,
          duration: 1.4,
          ease: 'expo',
        })
        bounce.pause(0)
      })
    }, buttonRef)

    buttonRef.current?.addEventListener('mouseenter', () => ctx.onHover())
    buttonRef.current?.addEventListener('mouseleave', () => ctx.outHover())

    return () => {
      buttonRef.current?.addEventListener('mouseenter', () => ctx.onHover())
      buttonRef.current?.addEventListener('mouseleave', () => ctx.outHover())
      ctx.revert()
    }
  }, [router.pathname])

  return (
    <>
      {/* hide when get into the contact */}
      <button
        data-cursor-magnetic="fixed"
        data-cursor-stick
        data-cursor-exclusion
        onClick={() => router.push('/contact')}
        ref={buttonRef}
        className={styles.floating_contact_button}
      >
        <div ref={circleTextRef} className={styles.circle_text}>
          {'GET IN TOUCH NOW | '.split('').map((char, index) => (
            <span
              className={styles.char}
              style={{
                transform: `rotate(${index * 19}deg)`,
              }}
              key={index}
            >
              {char}
            </span>
          ))}
        </div>
        <span ref={iconRef} className={styles.icon_circle}>
          <Image
            src={'/images/thums_up_emoji.png'}
            height={52}
            width={52}
            alt="Contact me"
          />
        </span>
      </button>
    </>
  )
}

export default FloatingContactButton
