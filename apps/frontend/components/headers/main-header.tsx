import { TextButton } from '@components/buttons'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent, useEffect, useRef } from 'react'
import styles from '@styles/components/headers/main-header.module.scss'
import { FullMenu } from '@components/menu'
import { useRouter } from 'next/router'
import { gsap } from 'gsap'

/**
 * # MainHeader
 *
 * the header for all of the pages
 * showing some menus, button and the brand of logo
 *
 * @returns JSX.Element
 */
const MainHeader: FunctionComponent = (): JSX.Element => {
  const router = useRouter()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(['.brand-anim', '.contact-anim', '.menu-button-anim'], {
        duration: 2.9,
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        y: -40,
        ease: 'elastic',
        delay: 2.4,
      })
    }, headerRef)

    return () => ctx.revert()
  }, [router.pathname])

  return (
    <header ref={headerRef} id="main-header" className={styles.header}>
      <div
        className={`${styles.brand} brand-anim`}
        data-cursor-exclusion
        data-cursor-magnetic="fixed"
      >
        <Link href={'/'} className={styles.link}>
          <Image
            src={'/images/logo.png'}
            alt="Logo"
            width={32.44}
            height={40.78}
          />
        </Link>
      </div>
      <div className={styles.spacer}></div>
      <div className={styles.menu}>
        <div
          className={`${styles.wrapper} contact-anim`}
          data-cursor-size="40"
          data-cursor-exclusion
          data-cursor-magnetic="fixed"
        >
          <TextButton link="/contact">Let's talk</TextButton>
        </div>
        <FullMenu />
      </div>
    </header>
  )
}

export default MainHeader
