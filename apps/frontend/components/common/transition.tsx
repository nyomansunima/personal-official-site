import { FunctionComponent, ReactNode, useEffect, useRef } from 'react'
import styles from '@styles/components/common/transition.module.scss'
import { useRouter } from 'next/router'
import { gsap } from 'gsap'

interface TransitionProps {
  children?: ReactNode | ReactNode[]
}

/**
 * # Transition
 *
 * adding transition, and loading animation
 * each pages, also enable to customize in each pages
 * @returns JSX.Element
 */
const Transition: FunctionComponent<TransitionProps> = ({
  children,
}): JSX.Element => {
  const transitionRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          delay: 0.2,
        })
        .to('.overlay-transition', {
          clipPath: 'circle(5% at 50% 50%)',
          duration: 1.2,
          ease: 'elastic',
        })
        .to('.overlay-transition', {
          clipPath: 'circle(100% at 50% 50%)',
          duration: 0.6,
          ease: 'none',
        })
        .to('.overlay-transition', {
          clipPath: 'circle(0% at 50% 50%)',
          duration: 0.4,
          ease: 'none',
        })
        .from('.child-transition', {
          opacity: 0,
          ease: 'none',
        })
    }, transitionRef)

    return () => {
      ctx.revert()
    }
  }, [router.pathname])

  return (
    <>
      <div ref={transitionRef}>
        <div className="child-transition">{children}</div>
        <div className={`${styles.overlay} overlay-transition`}></div>
      </div>
    </>
  )
}

export default Transition
