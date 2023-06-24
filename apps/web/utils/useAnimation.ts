import { gsap } from 'gsap'

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
  const fadeSlideUps = document.body.querySelectorAll<HTMLElement>(
    '[data-anim-slide-up]',
  )

  const sickSlideUps = document.body.querySelectorAll<HTMLElement>(
    '[data-anim-sick-slide-up]',
  )

  fadeSlideUps.forEach((el) => {
    gsap.from(el, {
      y: 200,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })
  })

  sickSlideUps.forEach((el) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          scrub: true,
        },
      })
      .to(el, {
        y: -700,
        stagger: 0.2,
        scrub: true,
      })
  })
}
