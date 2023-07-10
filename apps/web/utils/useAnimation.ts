import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import SplitType from 'split-type'

// the scroll trigger animation
// that allow to trigger several element to start animating
function triggerAnimationOnScroll(
  trigger: HTMLElement,
  timeline: gsap.core.Timeline,
  start?: any,
) {
  ScrollTrigger.create({
    trigger: trigger,
    start: start || 'top 70%',
    onEnter: () => {
      timeline.play()
    },
  })

  ScrollTrigger.create({
    trigger: trigger,
    start: 'top bottom',
    onLeaveBack: () => {
      timeline.pause(0)
    },
  })
}

/**
 * # useAnimation
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
export default function useAnimation() {
  // find the several elements
  // that match with the data query
  // then start create the animation based on the element
  gsap.set('[animation] [animation-target]', {
    opacity: 1,
  })

  const animEls = document.body.querySelectorAll<HTMLElement>('[animation]')
  animEls.forEach((el) => {
    const animation = el.getAttribute('animation')
    const duration = parseInt(el.getAttribute('animation-duration') || '1.2')
    const target = el.querySelector('[animation-target]') ?? el
    const targets = el.querySelectorAll('[animation-target]') ?? [el]
    const triggerStart = el.getAttribute('animation-trigger-start')
    const triggerEnd = el.getAttribute('animation-trigger-end')

    function startAnimate() {
      // filter the animation
      if (animation == 'text-word-slide-up') {
        let tl = gsap.timeline({ paused: true })
        tl.from(target.querySelectorAll('.word'), {
          yPercent: 100,
          opacity: 0,
          duration: duration,
          ease: 'back',
          stagger: 0.1,
        })
        triggerAnimationOnScroll(el, tl)
      }

      if (animation == 'text-char-slide-up') {
        let tl = gsap.timeline({ paused: true })
        tl.from(target.querySelectorAll('.char'), {
          yPercent: 100,
          opacity: 0,
          duration: duration,
          ease: 'back',
          stagger: 0.02,
        })
        triggerAnimationOnScroll(el, tl)
      }

      if (animation == 'text-char-slide-down') {
        let tl = gsap.timeline({ paused: true })
        tl.from(target.querySelectorAll('.char'), {
          yPercent: -100,
          opacity: 0,
          duration: duration,
          ease: 'back',
          stagger: 0.02,
        })
        triggerAnimationOnScroll(el, tl)
      }

      if (animation == 'text-char-opacity') {
        let tl = gsap.timeline({ paused: true })
        tl.from(target.querySelectorAll('.char'), {
          opacity: 0.1,
          duration: duration,
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
            duration: duration,
          })
        })
      }

      if (animation == 'item-slide-up-scrub') {
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
          duration: duration,
        })
        triggerAnimationOnScroll(el, tl, triggerStart)
      }

      if (animation == 'fade') {
        const tl = gsap.timeline({ paused: true })
        tl.from(target, {
          opacity: 0,
          ease: 'expo',
          duration: duration,
        })
        triggerAnimationOnScroll(el, tl)
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
