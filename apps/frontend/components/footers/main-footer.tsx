import { FunctionComponent, useEffect, useRef } from 'react'
import styles from '@styles/components/footers/main-footer.module.scss'
import { useRouter } from 'next/router'
import { gsap } from 'gsap'
import { useQuery } from '@tanstack/react-query'
import commonService from '@lib/services/common-service'
import useCursor from '@lib/hooks/use-cursor'

interface SocialMenu {
  icon: string
  link: string
}

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
      { label: 'Inspirations', link: '/inspiration' },
      { label: 'Courses', link: '/courses' },
      { label: 'Products', link: 'https://sonibble.com' },
    ],
  },
  {
    headline: 'Services',
    menus: [
      { label: 'Web Development', link: '/services/web-development' },
      { label: 'Mobile Development', link: '/services/mobile-development' },
      { label: 'UI & UX Design', link: '/services/ui-ux-design' },
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
  const cursor = useCursor()
  const router = useRouter()
  const footerRef = useRef<HTMLElement>(null)
  const socialsQuery = useQuery(['socials'], commonService.loadAllSocialMedia, {
    onSuccess: () => {
      cursor.reload()
    },
  })

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
            ease: 'back',
            duration: 0.7,
          },
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top center',
          },
        })
        .from('#footer nav span', {
          opacity: 0,
          y: 40,
          stagger: 0.3,
        })
        .from('#footer nav ul', {
          stagger: 0.2,
          opacity: 0,
          y: 40,
        })

      if (socialsQuery.data) {
        gsap
          .timeline({
            delay: 0,
            defaults: {
              ease: 'back',
              duration: 0.7,
            },
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top center',
            },
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
      }
    }, footerRef)

    return () => {
      ctx.revert()
    }
  }, [router.pathname, socialsQuery.data])

  return (
    <footer ref={footerRef} id="footer" className={styles.footer}>
      <div className={styles.wrapper}>
        {mainMenus.map(({ headline, menus }, index) => (
          <nav key={index}>
            <span>{headline}</span>
            <ul>
              {menus.map(({ label, link }, menuIndex) => (
                <li
                  data-cursor-size="80"
                  data-cursor-exclusion
                  key={menuIndex}
                  onClick={() => openLink(link)}
                >
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
          {socialsQuery.data &&
            socialsQuery.data.map(({ iconCode, url }, index) => (
              <li
                data-cursor-stick
                data-cursor-size="60"
                data-cursor-exclusion
                key={index}
                onClick={() => openLink(url)}
              >
                <i className={iconCode}></i>
              </li>
            ))}
        </ul>
      </div>
    </footer>
  )
}

export default MainFooter
