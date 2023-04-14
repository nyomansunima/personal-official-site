import { FunctionComponent, useEffect, useRef } from 'react'
import styles from '@styles/components/footers/main-footer.module.scss'
import { useRouter } from 'next/router'
import { gsap } from 'gsap'

interface SocialMenu {
  icon: string
  link: string
}

const socials: SocialMenu[] = [
  {
    icon: 'fi fi-brands-instagram',
    link: 'https://instagram.com/nyomansunima',
  },
  { icon: 'fi fi-brands-twitter', link: 'https://twitter.com/nyomansunima' },
  { icon: 'fi fi-brands-dribbble', link: 'https://dribbble.com/nyomansunima' },
  { icon: 'fi fi-brands-github', link: 'https://github.com/nyomansunima' },
  { icon: 'fi fi-brands-youtube', link: 'https://youtube.com/nyomansunima' },
]

interface MainMenu {
  headline: string
  menus: { label: string; link: string }[]
}

const mainMenus: MainMenu[] = [
  {
    headline: 'Explore',
    menus: [
      { label: 'About', link: '/about' },
      { label: 'Contact', link: '/contact' },
      { label: 'FAQ', link: '/faq' },
      { label: 'Privacy', link: '/privacy' },
    ],
  },
  {
    headline: 'Resources',
    menus: [
      { label: 'Blog', link: '/blog' },
      { label: 'Inspirations', link: '/inspirations' },
      { label: 'Courses', link: '/courses' },
      { label: 'Product', link: 'https://sonibble.com' },
    ],
  },
  {
    headline: 'Services',
    menus: [
      { label: 'Web Development', link: '/service/web-development' },
      { label: 'Mobile Development', link: '/mobile-development' },
      { label: 'UI & UX Design', link: '/services/ui-ux-design' },
      { label: 'Product from scratch', link: '/services/product-from-scratch' },
    ],
  },
]

/**
 * # MainFooter
 *
 * the footer for main purpose
 * use for all of the general layout
 * @returns JSX.Element
 */
const MainFooter: FunctionComponent = (): JSX.Element => {
  const router = useRouter()
  const footerRef = useRef<HTMLElement>(null)

  const openLink = (link: string) => {
    if (link.includes('https://') || link.includes('http://')) {
      window.open(link)
    } else {
      router.push(link)
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          delay: 0,
          defaults: {
            ease: 'none',
            duration: 0.7,
          },
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top center',
            end: 'bottom bottom',
            scrub: true,
          },
        })
        .to(document.body, {
          background: '#ffffff',
          duration: 0.7,
          ease: 'none',
        })
        .from('#footer nav span', {
          opacity: 0,
          y: 40,
          stagger: 0.3,
          ease: 'none',
        })
        .from('#footer nav ul', {
          stagger: 0.2,
          opacity: 0,
          y: 40,
          ease: 'none',
        })
        .from('#footer .credit-anim span', {
          y: 40,
          opacity: 0,
        })
        .from('#footer .credit-anim ul li', {
          opacity: 0,
          y: 100,
          stagger: 0.2,
          ease: 'none',
        })
    }, footerRef)

    return () => {
      ctx.revert()
    }
  }, [router.pathname])

  return (
    <footer ref={footerRef} id="footer" className={styles.footer}>
      <div className={styles.wrapper}>
        {mainMenus.map(({ headline, menus }, index) => (
          <nav key={index}>
            <span>{headline}</span>
            <ul>
              {menus.map(({ label, link }, menuIndex) => (
                <li key={menuIndex} onClick={() => openLink(link)}>
                  {label}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className={`${styles.credit} credit-anim`}>
        <span data-cursor-exclusion data-cursor-size="60">
          Copyright &copy; {new Date().getFullYear()} - Alright Reserved
        </span>
        <ul className={styles.socials}>
          {socials.map(({ icon, link }, index) => (
            <li
              // data-cursor-magnetic
              data-cursor-stick
              data-cursor-size="52"
              data-cursor-exclusion
              key={index}
              onClick={() => openLink(link)}
            >
              <i className={icon}></i>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default MainFooter
