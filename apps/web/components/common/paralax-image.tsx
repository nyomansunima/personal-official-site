import Image from 'next/image'
import { FunctionComponent, useEffect, useRef } from 'react'
import styles from '@styles/components/common/paralax-image.module.scss'
import { gsap } from 'gsap'

interface ParalaxImageProps {
  className?: string
  image: string
  alt: string
  size?: 'large' | 'medium'
}

/**
 * # ParalaxImage
 *
 * the image to show as paralax
 * animation and use to show case some image
 * @returns JSX.Element
 */
const ParalaxImage: FunctionComponent<ParalaxImageProps> = ({
  className,
  image,
  alt,
  size = 'large',
}): JSX.Element => {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          delay: 0,
          defaults: {
            ease: 'none',
          },
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top bottom',
            scrub: true,
          },
        })
        .from(imageRef.current?.querySelector('picture')!, {
          yPercent: -30,
        })
        .to(imageRef.current?.querySelector('picture')!, {
          yPercent: 30,
        })
    }, imageRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div
      ref={imageRef}
      className={`${styles.illustration} ${className} ${styles[size]}`}
    >
      <picture>
        <Image src={image} fill alt={alt} />
      </picture>
    </div>
  )
}

export default ParalaxImage
