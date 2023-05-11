import { useRouter } from 'next/router'
import { FunctionComponent, useEffect, useRef, useState } from 'react'
import styles from '@styles/components/menu/full-menu.module.scss'
import { gsap } from 'gsap'

interface Menu {
  link: string
  label: string
}

const menus: Menu[] = [
  { label: 'What i do', link: '/services' },
  { label: 'My works', link: '/projects' },
  { label: 'About', link: '/about' },
  { label: 'Contact', link: '/contact' },
]

const supportMenus: Menu[] = [
  { label: 'My blog', link: '/blog' },
  { label: 'Resources', link: '/resources' },
  { label: 'Inspirations', link: '/inspirations' },
  { label: 'FAQ', link: '/faq' },
]

const socialMenus: Menu[] = [
  { label: 'Instagram', link: 'https://instagram.com/nyomansunima' },
  { label: 'Twitter', link: 'https://twitter.com/nyomansunima' },
  { label: 'Dribbble', link: 'https://dribbble.com/nyomansunima' },
  { label: 'Github', link: 'https://github.com/nyomansunima' },
  { label: 'Youtube', link: 'https://youtube.com/nyomansunima' },
]

/**
 * # FullMenu
 *
 * wrapper of menu, showing all menus
 * into a full screen pages
 *
 * @returns JSX.Element
 */
const FullMenu: FunctionComponent = (): JSX.Element => {
  const buttonRef = useRef(null)
  const menuRef = useRef(null)
  const [isShow, setShow] = useState(false)
  const router = useRouter()

  const openMenu = async (link: string) => {
    setTimeout(async () => {
      if (link.includes('http://') || link.includes('https://')) {
        window.open(link)
      } else {
        await router.push(link)
      }
    }, 1000)

    setShow(false)
  }

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const tl = gsap
        .timeline({
          delay: 0.2,
          defaults: {
            duration: 1.7,
            ease: 'back',
          },
          paused: true,
        })
        .set(menuRef.current, {
          display: 'flex',
          opacity: 1,
          duration: 0.2,
        })
        .to('.full-menu-overlay-anim', {
          clipPath: 'circle(135.9% at 95% 3%)',
          duration: 0.9,
          ease: 'expo',
          stagger: 0.2,
        })
        .from(
          [
            '.main-menu-label-anim',
            '.main-menu-list-anim',
            '.social-menu-anim span',
            '.social-menu-anim ul',
          ],
          {
            duration: 0.7,
            delay: 0,
            opacity: 0,
            ease: 'expo',
            stagger: 0.1,
            y: 40,
          }
        )
        .from('.support-menu-anim ul li', {
          duration: 1.3,
          opacity: 0,
          y: 40,
          stagger: 0.2,
          ease: 'elastic',
        })

      // show and hide the menu
      self.add('show', () => {
        tl.play()
      })
      self.add('hide', () => {
        tl.reverse()
      })
    }, menuRef)

    // start to show and hide the animation
    if (isShow) {
      ctx.show()
    } else {
      ctx.hide()
    }

    return () => ctx.revert()
  }, [isShow])

  return (
    <>
      {/* button trigger for the menu */}
      <button
        ref={buttonRef}
        className={`${styles.button} ${
          isShow ? styles.button_active : ''
        } menu-button-anim`}
        data-cursor-size="64"
        data-cursor-magnetic="fixed"
        data-cursor-exclusion
        data-cursor-stick
        onClick={() => setShow((state) => !state)}
      >
        <span className={`${styles.stick}`}></span>
        <span className={`${styles.stick}`}></span>
      </button>

      {/* full menu for the apps */}
      <div ref={menuRef} className={`${styles.full_menu}`}>
        <span className={`${styles.overlay} full-menu-overlay-anim`}></span>
        <span className={`${styles.overlay} full-menu-overlay-anim`}></span>

        <div className={styles.wrapper}>
          <div className={styles.top_menu}>
            {/* main menus */}
            <div className={`${styles.main} main-menu-anim`}>
              <span className={`${styles.label} main-menu-label-anim`}>
                Menu
              </span>
              <ul className={`${styles.list} main-menu-list-anim`}>
                {menus.map(({ label, link }, index) => (
                  <li
                    className={`${styles.item}`}
                    onClick={() => openMenu(link)}
                    key={index}
                    data-cursor-size="80"
                    data-cursor-exclusion
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            {/* social menus */}
            <div className={`${styles.socials} social-menu-anim`}>
              <span className={styles.label}>Social</span>
              <ul className={styles.list}>
                {socialMenus.map(({ label, link }, index) => (
                  <li
                    className={styles.item}
                    onClick={() => openMenu(link)}
                    key={index}
                    data-cursor-size="30"
                    data-cursor-exclusion
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* support menu */}
          <div className={`${styles.supports} support-menu-anim`}>
            <ul className={styles.list}>
              {supportMenus.map(({ label, link }, index) => (
                <li
                  className={`${styles.item} support-menu-item`}
                  onClick={() => openMenu(link)}
                  key={index}
                  data-cursor-stick
                  data-cursor-exclusion
                  data-cursor-size="60"
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default FullMenu
