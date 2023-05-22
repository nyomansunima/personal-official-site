import { FunctionComponent, useCallback, useEffect, useRef } from 'react'
import { gsap, Expo, Power4 } from 'gsap'
import useCursor from '@lib/hooks/use-cursor'
import styles from '@styles/components/common/fancy-cursor.module.scss'

// position object
// use to indicate the x, and y position
interface Pos {
  x?: number
  y?: number
}

// the velocity of
// position object
interface Vel {
  x?: number
  y?: number
}

type Diff = number | undefined

function getScale(diffX: Diff, diffY: Diff) {
  if (diffX && diffY) {
    const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2))
    return Math.min(distance / 735, 0.35)
  }
  return
}

function getAngle(diffX: Diff, diffY: Diff) {
  if (diffX && diffY) {
    return (Math.atan2(diffY, diffX) * 180) / Math.PI
  }
  return
}

const EMPTY = {}

// create instance form
// object as a ref
function useInstance(value = {}) {
  const ref = useRef(EMPTY)
  if (ref.current === EMPTY) {
    ref.current = typeof value === 'function' ? value() : value
  }
  return ref.current
}

// ticker helper
// to manage loop animation
function useTicker(callback: () => void, paused?: boolean) {
  useEffect(() => {
    if (!paused && callback) {
      gsap.ticker.add(callback)
    }
    return () => {
      gsap.ticker.remove(callback)
    }
  }, [callback, paused])
}

interface FancyCursorProps {
  animationDuration?: number
  animationEase?: string | gsap.EaseFunction | undefined
  gellyAnimationAmount?: number
  gellyAnimationDuration?: number
  stickAnimationAmount?: number
  stickAnimationDuration?: number
  stickAnimationEase?: string | gsap.EaseFunction | undefined
  magneticAnimationAmount?: number
  magneticAnimationDuration?: number
  magneticAnimationEase?: string | gsap.EaseFunction | undefined
  colorAnimationEase?: string | gsap.EaseFunction | undefined
  colorAnimationDuration?: number
  backgroundImageAnimationEase?: string | gsap.EaseFunction | undefined
  backgroundImageAnimationDuration?: number
  sizeAnimationEase?: string | gsap.EaseFunction | undefined
  sizeAnimationDuration?: number
  textAnimationEase?: string | gsap.EaseFunction | undefined
  textAnimationDuration?: number
  cursorSize?: number
  cursorBackgrounColor?: string
  exclusionBackgroundColor?: string
  cursorInnerColor?: string
}

/**
 * # FancyCursor
 *
 * custom cursor follower that following with special effect
 * like booble, gelly, and animation
 *
 * @returns JSX.Element
 */
const FancyCursor: FunctionComponent<FancyCursorProps> = ({
  animationDuration = 1.25,
  animationEase = Expo.easeOut,
  gellyAnimationAmount = 72,
  stickAnimationDuration = 0.8,
  stickAnimationEase = Power4.easeOut,
  magneticAnimationDuration = 0.7,
  magneticAnimationEase = Power4.easeOut,
  colorAnimationEase = Power4.easeOut,
  colorAnimationDuration = 0.2,
  backgroundImageAnimationEase = undefined,
  backgroundImageAnimationDuration = 0,
  sizeAnimationEase = Expo.easeOut,
  sizeAnimationDuration = 1.5,
  textAnimationEase = Expo.easeOut,
  textAnimationDuration = 1,
  cursorSize = 12,
  cursorBackgrounColor = '#000',
  exclusionBackgroundColor = '#fff',
  cursorInnerColor = '#fff',
}): JSX.Element => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorInnerRef = useRef<HTMLDivElement>(null)
  const cursor = useCursor()

  // define the instance
  const pos: Pos = useInstance(() => ({ x: 0, y: 0 }))
  const vel: Vel = useInstance(() => ({ x: 0, y: 0 }))
  const set: any = useInstance()

  // handle the looping animation callback
  // when something update on position
  const loop = useCallback(() => {
    const rotation = getAngle(vel.x, vel.y)
    const scale = getScale(vel.x, vel.y)

    set.x(pos.x)
    set.y(pos.y)

    if (scale && rotation && cursorRef.current) {
      set.width(cursorRef.current?.style.height + scale * gellyAnimationAmount)
      set.r(rotation)
      set.sx(1 + scale)
      set.sy(1 - scale)
      set.rt(-rotation)
    }
  }, [gellyAnimationAmount, pos.x, pos.y, set, vel.x, vel.y])

  useEffect(() => {
    // define all cursor elements
    // including the text, color, background, and much more
    const sizeElements = document.querySelectorAll(
      '[data-cursor-size]'
    ) as unknown as NodeListOf<HTMLElement>
    const textElements = document.querySelectorAll(
      '[data-cursor-text]'
    ) as unknown as NodeListOf<HTMLElement>
    const iconElements = document.querySelectorAll(
      '[data-cursor-icon]'
    ) as unknown as NodeListOf<HTMLElement>
    const colorElements = document.querySelectorAll(
      '[data-cursor-color]'
    ) as unknown as NodeListOf<HTMLElement>
    const imageElements = document.querySelectorAll(
      '[data-cursor-image]'
    ) as unknown as NodeListOf<HTMLElement>
    const magneticElements = document.querySelectorAll(
      '[data-cursor-magnetic]'
    ) as unknown as NodeListOf<HTMLElement>
    const stickElements = document.querySelectorAll(
      '[data-cursor-stick]'
    ) as unknown as NodeListOf<HTMLElement>
    const exclusionElements = document.querySelectorAll(
      '[data-cursor-exclusion]'
    ) as unknown as NodeListOf<HTMLElement>
    const hideElements = document.querySelectorAll(
      '[data-cursor-exclusion]'
    ) as unknown as NodeListOf<HTMLElement>

    let stickStatus = false
    let stickTarget: any = null
    let hasExclusionAlready = false

    // default set of
    // cursor
    set.x = gsap.quickSetter(cursorRef.current, 'x', 'px')
    set.y = gsap.quickSetter(cursorRef.current, 'y', 'px')
    set.r = gsap.quickSetter(cursorRef.current, 'rotate', 'deg')
    set.sx = gsap.quickSetter(cursorRef.current, 'scaleX')
    set.sy = gsap.quickSetter(cursorRef.current, 'scaleY')
    set.width = gsap.quickSetter(cursorRef.current, 'width', 'px')
    set.rt = gsap.quickSetter(cursorInnerRef.current, 'rotate', 'deg')

    // wrap all animation in this
    // context in react
    const ctx = gsap.context((self) => {
      // move cursor
      // while mouse moving
      self.add('moveCursor', (x: number, y: number) => {
        let duration = animationDuration
        let ease = animationEase

        // handle the stick cursor
        if (stickStatus && stickTarget) {
          const bound = stickTarget?.getBoundingClientRect()
          if (bound) {
            y = bound.top + stickTarget.clientHeight / 2
            x = bound.left + stickTarget.clientWidth / 2
            duration = stickAnimationDuration
            ease = stickAnimationEase
          }
        }

        gsap.set(pos, {})

        const xTo = gsap.quickTo(pos, 'x', {
          duration,
          ease,
          onUpdate: () => {
            if (pos.x) vel.x = x - pos.x
          },
        })

        const yTo = gsap.quickTo(pos, 'y', {
          duration,
          ease,
          onUpdate: () => {
            if (pos.y) vel.y = y - pos.y
          },
        })

        xTo(x)
        yTo(y)

        loop()
      })

      // show cursor
      // while the pointer is on the surface
      self.add('showCursor', () => {
        gsap.to(cursorRef.current, {
          opacity: 1,
          duration: animationDuration,
          ease: animationEase,
        })
      })

      // hide cursor
      // while the pointer is out of surface
      self.add('hideCursor', () => {
        gsap.to(cursorRef.current, {
          opacity: 0,
          duration: animationDuration,
          ease: animationEase,
        })
      })
    }, cursorRef)

    // reload all documents
    // and also the cursor
    if (cursor.data) {
      gsap.set(document.body, { background: '#ffffff' })
      cursorInnerRef.current!.textContent = ''
      gsap.to(cursorRef.current, {
        width: cursorSize,
        height: cursorSize,
        background: cursorBackgrounColor,
      })
    }

    window.addEventListener('mousemove', (e) => {
      const x = e.clientX
      const y = e.clientY
      ctx.moveCursor(x, y)
    })

    document.body.addEventListener('mouseenter', (e: MouseEvent) => {
      if (e.target instanceof HTMLElement && cursorRef.current) {
        ctx.showCursor()
      }
    })

    document.body.addEventListener('mouseleave', (e: MouseEvent) => {
      if (e.target instanceof HTMLElement && cursorRef.current) {
        ctx.hideCursor()
      }
    })

    // mapping
    // all of the cursor elements
    sizeElements.forEach((el) => {
      el.addEventListener('mouseenter', (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursorRef.current) {
          gsap.to(cursorRef.current, {
            width: `${e.target.dataset['cursorSize']}`,
            height: `${e.target.dataset['cursorSize']}`,
            duration: sizeAnimationDuration,
            ease: sizeAnimationEase,
          })
        }
      })

      el.addEventListener('mouseleave', (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursorRef.current) {
          gsap.to(cursorRef.current, {
            width: `${cursorSize}`,
            height: `${cursorSize}`,
            duration: sizeAnimationDuration,
            ease: sizeAnimationEase,
          })
        }
      })
    })

    textElements.forEach((el) => {
      el.addEventListener('mouseenter', (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursorInnerRef.current) {
          cursorInnerRef.current.textContent = `${e.target.dataset['cursorText']}`
          const fontSize = e.target.dataset['cursorTextSize']
          if (fontSize) {
            cursorInnerRef.current.style.fontSize = `${fontSize}px`
          }
          gsap.to(cursorInnerRef.current, {
            scale: 1,
            opacity: 1,
            duration: textAnimationDuration,
            ease: textAnimationEase,
          })
        }
      })

      el.addEventListener('mouseleave', (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursorInnerRef.current) {
          cursorInnerRef.current.textContent = ''
          cursorInnerRef.current.style.fontSize = 'unset'
          gsap.to(cursorInnerRef.current, {
            scale: 0,
            opacity: 0,
            duration: textAnimationDuration,
            ease: textAnimationEase,
          })
        }
      })
    })

    iconElements.forEach((el) => {
      el.addEventListener('mouseenter', (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursorInnerRef.current) {
          cursorInnerRef.current.innerHTML = `<i class='${e.target.dataset['cursorIcon']}'/>`
          cursorInnerRef.current.style.fontSize = '32px'
          gsap.to(cursorInnerRef.current, {
            scale: 1,
            opacity: 1,
            duration: textAnimationDuration,
            ease: textAnimationEase,
          })
        }
      })

      el.addEventListener('mouseleave', (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursorInnerRef.current) {
          cursorInnerRef.current.style.fontSize = 'unset'
          cursorInnerRef.current.innerHTML = ''
          gsap.to(cursorInnerRef.current, {
            scale: 0,
            opacity: 0,
            duration: textAnimationDuration,
            ease: textAnimationEase,
          })
        }
      })
    })

    colorElements.forEach((el) => {
      el.addEventListener('mouseenter', (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursorRef.current) {
          gsap.to(cursorRef.current, {
            backgroundColor: `${e.target.dataset['cursorColor']}`,
            duration: colorAnimationDuration,
            ease: colorAnimationEase,
          })
        }
      })

      el.addEventListener('mouseleave', (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursorRef.current) {
          gsap.to(cursorRef.current, {
            backgroundColor: `${cursorBackgrounColor}`,
            duration: colorAnimationDuration,
            ease: colorAnimationEase,
          })
        }
      })
    })

    exclusionElements.forEach((el) => {
      el.addEventListener('mouseenter', (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursorRef.current) {
          // @ts-ignore: Unreachable code error
          cursorRef.current.style.mixBlendMode = 'exclusion'
          cursorRef.current.style.background = `${exclusionBackgroundColor}`
        }
      })

      el.addEventListener('mouseleave', (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursorRef.current) {
          // @ts-ignore: Unreachable code error
          cursorRef.current.style.mixBlendMode = ''
          cursorRef.current.style.background = `${cursorBackgrounColor}`
        }
      })
    })

    imageElements.forEach((el) => {
      el.addEventListener('mouseenter', (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursorInnerRef.current) {
          if (cursorRef.current) {
            cursorRef.current.style.backgroundColor = 'transform'
          }
          gsap.to(cursorInnerRef.current, {
            scale: 1,
            opacity: 1,
            background: `url("${e.target.dataset['cursorImage']}")`,
            duration: backgroundImageAnimationDuration,
            ease: backgroundImageAnimationEase,
          })
        }
      })

      el.addEventListener('mouseleave', (e: MouseEvent) => {
        if (e.target instanceof HTMLElement && cursorInnerRef.current) {
          if (cursorRef.current) {
            if (!hasExclusionAlready) {
              // @ts-ignore: Unreachable code error
              cursorRef.current.style.mixBlendMode = ''
              cursorRef.current.style.backgroundColor = `${cursorBackgrounColor}`
            } else {
              cursorRef.current.style.backgroundColor = `${exclusionBackgroundColor}`
            }
          }
          gsap.to(cursorInnerRef.current, {
            scale: 0,
            opacity: 0,
            background: ``,
            filter: 'none',
            duration: backgroundImageAnimationDuration,
          })
        }
      })
    })

    magneticElements.forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const areatarget = el as HTMLElement
        const type = areatarget.dataset['cursorMagnetic'] as string
        const amount = parseFloat(
          areatarget.dataset['cursorMagneticAmount'] || '.24'
        )

        if (type == 'fixed') {
          gsap.to(areatarget, {
            x:
              (e.clientX - areatarget.offsetLeft - areatarget.clientWidth / 2) *
              amount,
            y:
              (e.clientY - areatarget.offsetTop - areatarget.clientHeight / 2) *
              amount,
            duration: magneticAnimationDuration,
            ease: magneticAnimationEase,
          })
        } else {
          gsap.to(areatarget, {
            x:
              (e.clientX -
                (areatarget.offsetLeft - window.scrollX) -
                areatarget.clientWidth / 2) *
              amount,
            y:
              (e.clientY -
                (areatarget.offsetTop - window.scrollY) -
                areatarget.clientHeight / 2) *
              amount,
            duration: magneticAnimationDuration,
            ease: magneticAnimationEase,
          })
        }
      })

      el.addEventListener('mouseleave', () => {
        const areatarget = el as HTMLElement
        gsap.to(areatarget, {
          x: 0,
          y: 0,
          duration: magneticAnimationDuration,
          ease: magneticAnimationEase,
        })
      })
    })

    stickElements.forEach((el) => {
      el.addEventListener('mouseenter', (e) => {
        stickStatus = true
        stickTarget = el
      })
      el.addEventListener('mouseleave', () => {
        stickStatus = false
        stickTarget = null
      })
    })

    hideElements.forEach((el) => {
      el.addEventListener('mouseenter', (e) => {
        if (e.target instanceof HTMLElement && cursorRef.current) {
          gsap.to(cursorRef.current, {
            scale: 0,
            duration: animationDuration,
            ease: animationEase,
          })
        }
      })
      el.addEventListener('mouseleave', () => {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: animationDuration,
          ease: animationEase,
        })
      })
    })

    return () => {
      ctx.revert()
      // remove the cursor listener
      window.removeEventListener('mousemove', () => {})
      document.body.removeEventListener('mouseenter', () => {})
      document.body.removeEventListener('mouseleave', () => {})

      sizeElements.forEach((el) => {
        el.removeEventListener('mouseenter', () => {})
        el.removeEventListener('mouseleave', () => {})
      })

      textElements.forEach((el) => {
        el.removeEventListener('mouseenter', () => {})
        el.removeEventListener('mouseleave', () => {})
      })

      colorElements.forEach((el) => {
        el.removeEventListener('mouseenter', () => {})
        el.removeEventListener('mouseleave', () => {})
      })

      exclusionElements.forEach((el) => {
        el.removeEventListener('mouseenter', () => {})
        el.removeEventListener('mouseleave', () => {})
      })

      imageElements.forEach((el) => {
        el.removeEventListener('mouseenter', () => {})
        el.removeEventListener('mouseleave', () => {})
      })

      magneticElements.forEach((el) => {
        el.removeEventListener('mousemove', () => {})
        el.removeEventListener('mouseleave', () => {})
      })

      stickElements.forEach((el) => {
        el.removeEventListener('mouseenter', () => {})
        el.removeEventListener('mouseleave', () => {})
      })

      hideElements.forEach((el) => {
        el.removeEventListener('mouseenter', () => {})
        el.removeEventListener('mouseleave', () => {})
      })
    }
  }, [cursor.data])

  useTicker(loop)

  return (
    <div
      ref={cursorRef}
      id="fancy-cursor"
      className={styles.cursor}
      style={{
        width: cursorSize,
        height: cursorSize,
        background: cursorBackgrounColor,
      }}
    >
      <div
        style={{ color: cursorInnerColor }}
        ref={cursorInnerRef}
        id="fancy-cursor-inner"
        className={styles.inner}
      />
    </div>
  )
}

export default FancyCursor
