'use client'

import * as React from 'react'

type Props = {
  children: React.ReactNode
}

import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all'
import SplitType from 'split-type'
import { usePathname } from 'next/navigation'

// the scroll trigger animation
// that allow to trigger several element to start animating
function triggerAnimationOnScroll(
  trigger: HTMLElement,
  timeline: gsap.core.Timeline,
  start?: any,
) {
  ScrollTrigger.create({
    trigger,
    start: 'top 70%',
    onEnter: () => {
      timeline.play()
    },
  })

  ScrollTrigger.create({
    trigger,
    start: 'top bottom',
    onLeaveBack: () => {
      timeline.pause(0)
    },
  })
}

/**
 * # runAnimation
 *
 * start running the animation under the
 * secify elements.
 *
 * all animation is running after the content load
 * so this will match if call after mounted.
 *
 * ******* NOTE **********
 * Animation run using gsap
 */
export function runAnimation() {
  // find the several elements
  // that match with the data query
  // then start create the animation based on the element
  gsap.set('[data-animation] [data-animation-target]', {
    opacity: 1,
  })

  const animEls =
    document.body.querySelectorAll<HTMLElement>('[data-animation]')
  animEls.forEach((el) => {
    const animation = el.getAttribute('data-animation')
    const duration = parseInt(
      el.getAttribute('data-animation-duration') || '1.2',
    )
    const target = el.querySelector('[data-animation-target]') ?? el
    const targets = el.querySelectorAll('[data-animation-target]') ?? [el]
    const animationDelay = el.getAttribute('data-animation-delay') ?? 0

    function startAnimate() {
      if (animation == 'text-word-slide-up') {
        const tl = gsap.timeline({ paused: true })
        tl.from(target.querySelectorAll('.word'), {
          yPercent: 100,
          opacity: 0,
          duration,
          ease: 'back',
          stagger: 0.1,
        })
        triggerAnimationOnScroll(el, tl)
      }

      if (animation == 'text-char-slide-up') {
        const tl = gsap.timeline({ paused: true })
        tl.from(target.querySelectorAll('.char'), {
          yPercent: 100,
          opacity: 0,
          duration,
          ease: 'back',
          stagger: 0.02,
        })
        triggerAnimationOnScroll(el, tl)
      }

      if (animation == 'text-char-slide-down') {
        const tl = gsap.timeline({ paused: true })
        tl.from(target.querySelectorAll('.char'), {
          yPercent: -100,
          opacity: 0,
          duration,
          ease: 'back',
          stagger: 0.02,
        })
        triggerAnimationOnScroll(el, tl)
      }

      if (animation == 'text-char-opacity') {
        const tl = gsap.timeline({ paused: true })
        tl.from(target.querySelectorAll('.char'), {
          opacity: 0.1,
          duration,
          ease: 'expo',
          stagger: 0.05,
        })
        triggerAnimationOnScroll(el, tl, 'top 80%')
      }

      if (animation == 'text-line-mask-opacity-scrub') {
        target.querySelectorAll('.line').forEach((line) => {
          const lineMaskEl = document.createElement('div')
          lineMaskEl.classList.add('line-mask')
          line.appendChild(lineMaskEl)
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: line,
              start: 'top 70%',
              end: 'bottom 30%',
              scrub: 1,
            },
          })
          tl.to(lineMaskEl, {
            width: '0%',
            duration,
          })
        })
      }

      if (animation == 'item-slide-up-scrub' && targets.length > 0) {
        const yAmount = el.getAttribute('animation-amount') ?? '200'
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: targets,
            scrub: true,
          },
        })
        tl.from(targets, {
          y: yAmount,
          stagger: 0.1,
          ease: 'back',
        })
      }

      if (animation == 'slide-up') {
        const tl = gsap.timeline({ paused: true })
        tl.from(target, {
          yPercent: 100,
          opacity: 0,
          ease: 'expo',
          duration,
          delay: animationDelay,
        })
        triggerAnimationOnScroll(el, tl)
      }

      if (animation == 'fade') {
        const tl = gsap.timeline({ paused: true })
        tl.from(target, {
          opacity: 0,
          ease: 'expo',
          duration,
        })

        triggerAnimationOnScroll(el, tl)
      }

      // body transfrom and transition animation
      // including the backhround colors, and elements
      if (animation === 'body-background-transition') {
        const animationColor =
          el.getAttribute('data-animation-body-color') ?? 'var(--background)'

        const anim = gsap.to(document.body, {
          paused: true,
          duration: 1.2,
          ease: 'expo',
          background: animationColor,
        })

        ScrollTrigger.create({
          trigger: target,
          start: 'top 90%',
          onEnter: () => {
            anim.restart()
          },
        })

        ScrollTrigger.create({
          trigger: target,
          start: 'bottom top',
          onLeaveBack: () => {
            anim.restart()
          },
        })
      }
    }

    // split text some of the element that can
    // run the text animation
    // can be run also when the window is being reized
    if (
      animation?.includes('text-word') ||
      animation?.includes('text-char') ||
      animation?.includes('text-line')
    ) {
      const splitTypes = new SplitType(el)
      // resize and start animate
      window.addEventListener('resize', (e) => {
        if (window.innerWidth < 1024) {
          splitTypes.split({})
          startAnimate()
        }
      })
    }

    // trigger the animation to start
    startAnimate()
  })
}

export default function AnimationProvider({ children }: Props) {
  const pathname = usePathname()

  React.useEffect(function registerAnimationEffect() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
    const lenis = new Lenis({})

    // lenis.on('scroll', ScrollTrigger.update)
    // gsap.ticker.add((time) => {
    //   lenis.raf(time * 1000)
    // })
    // gsap.ticker.lagSmoothing(0)

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      runAnimation()
    })

    return () => ctx.revert()
  }, [pathname])

  return <>{children}</>
}
