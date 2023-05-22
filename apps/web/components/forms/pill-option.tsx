import { FunctionComponent, ReactNode, useEffect, useRef } from 'react'
import styles from '@styles/components/forms/pill-option.module.scss'
import { gsap } from 'gsap'

interface PillOptionProps {
  selected?: boolean
  children?: ReactNode | ReactNode[]
  className?: string
  onSelect?: (data: any) => void
  disabled?: boolean
}

/**
 * # PillOption
 *
 * the option as pill capsule to
 * handle the options, chip, and also choices
 *
 * @returns JSX.Element
 */
const PillOption: FunctionComponent<PillOptionProps> = ({
  selected,
  children,
  className,
  onSelect,
  disabled,
}): JSX.Element => {
  const buttonRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLSpanElement>(null)
  const contentRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const ctx = gsap.context((self) => {
      self.add('active', () => {
        gsap.set(backdropRef.current, {
          x: '-110%',
        })
        gsap.to(backdropRef.current, {
          x: 0,
          duration: 0.7,
          ease: 'power2',
        })
        gsap.to(contentRef.current, {
          color: 'var(--clr-white)',
        })
      })

      self.add('disable', () => {
        gsap.to(backdropRef.current, {
          x: '110%',
          duration: 0.7,
          ease: 'expo',
        })
      })
    }, buttonRef)
    if (selected) {
      ctx.active()
    } else {
      ctx.disable()
    }

    return () => ctx.revert()
  }, [selected])

  return (
    <div
      ref={buttonRef}
      onClick={onSelect}
      data-cursor-stick
      data-cursor-magnetic
      data-cursor-magnetic-amount=".02"
      data-cursor-exclusion
      className={`${styles.option} ${className}`}
    >
      <span ref={backdropRef} className={`${styles.backdrop}`}></span>
      <span className={`${styles.content} ${selected ? styles.active : ''}`}>
        {children}
      </span>
    </div>
  )
}

export default PillOption
