import { useRouter } from 'next/router'
import { FunctionComponent, ReactNode, useEffect, useRef } from 'react'
import styles from '@styles/components/buttons/outline-button.module.scss'
import { gsap } from 'gsap'

interface OutlineButtonProps {
  isProcess?: boolean
  children?: ReactNode | ReactNode[]
  className?: string
  disabled?: boolean
  link?: string
  type?: string
  onClick?: () => void
  form?: string
}

/**
 * # OutlineButton
 *
 * the button with outline,
 * also some effect
 * @returns JSX.Element
 */
const OutlineButton: FunctionComponent<OutlineButtonProps> = ({
  children,
  className,
  disabled,
  link,
  type,
  onClick,
  form,
  isProcess,
}): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const backdropRef = useRef<HTMLSpanElement>(null)
  const router = useRouter()

  // view the link
  // using router or open in new tab
  const viewLink = () => {
    if (link!.includes('http://') || link!.includes('https://')) {
      window.open(link!)
    } else {
      router.push(link!)
    }
  }

  useEffect(() => {
    const ctx = gsap.context((self) => {
      // adding hover animate
      self.add('onHover', () => {
        gsap.set(backdropRef.current, {
          x: '-110%',
        })
        gsap.to(backdropRef.current, {
          x: 0,
          duration: 0.7,
          ease: 'none',
        })
      })

      self.add('outHover', () => {
        gsap.set(backdropRef.current, {
          x: '0',
        })
        gsap.to(backdropRef.current, {
          x: '110%',
          duration: 0.7,
          ease: 'none',
        })
      })

      // process animation
      const processAnim = gsap
        .timeline({
          repeat: -1,
          defaults: { ease: 'power2', immediateRender: false },
          paused: true,
        })
        .set(buttonRef.current, {
          color: '#ffffff',
        })
        .to(backdropRef.current, {
          x: '-110%',
        })
        .to(backdropRef.current, {
          x: 0,
          duration: 0.7,
        })
        .to(backdropRef.current, {
          x: '110%',
          duration: 0.7,
        })

      self.add('startProcess', () => {
        processAnim.play()
      })
      self.add('stopProcess', () => {
        processAnim.pause().kill()
      })
    }, buttonRef)

    if (isProcess) {
      ctx.startProcess()
    } else {
      ctx.stopProcess()
    }

    // hover animation
    if (!disabled) {
      buttonRef.current?.addEventListener('mouseenter', () => ctx.onHover())
      buttonRef.current?.addEventListener('mouseleave', () => ctx.outHover())
    }

    return () => {
      ctx.revert()
      buttonRef.current?.removeEventListener('mouseenter', () => {})
      buttonRef.current?.removeEventListener('mouseleave', () => {})
    }
  }, [isProcess, disabled])

  return (
    <button
      ref={buttonRef}
      data-cursor-magnetic
      data-cursor-stick
      disabled={disabled}
      type={type as any}
      form={form}
      onClick={link ? viewLink : onClick}
      className={`${styles.button} ${className}`}
    >
      <span ref={backdropRef} className={styles.backdrop}></span>
      <span className={`${styles.content}`}>{children}</span>
    </button>
  )
}

export default OutlineButton
