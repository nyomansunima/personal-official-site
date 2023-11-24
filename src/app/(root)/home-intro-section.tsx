'use client'

import Link from 'next/link'
import { Button } from '~/components/ui/button'

export default function HomeIntroSection() {
  return (
    <section
      className="flex flex-col container mx-auto laptop:px-20 intro px-5 laptop:py-24"
      data-animation="body-background-transition"
    >
      <h2
        className="text-5xl laptop:text-8xl !leading-tight"
        data-cursor-size="200"
        data-cursor-exclusion
        data-animation="text-char-opacity"
      >
        <span className="laptop:pl-20"></span>
        Specialized in crafting apps from scratch.
      </h2>

      <div className="flex flex-col mt-24">
        <div
          className="flex flex-col gap-10 text-xl laptop:text-2xl !leading-relaxed laptop:w-10/12"
          data-animation="slide-up"
          data-animation-delay=".4"
        >
          <p data-animation-target>
            5+ years as a product designer and full stack developer. Been
            focusing on crafting apps through research, design, and development.
            My day to day revolves around designing and developing digital
            products. I've been passionate about this work from the start,
            combining style with functionality to create user-friendly
            experiences.
          </p>
        </div>
      </div>

      <div
        className="flex items-center flex-wrap gap-5 mt-16"
        data-animation="slide-up"
      >
        <Button
          asChild
          variant="primary"
          data-cursor-size="40"
          data-cursor-stick
          data-cursor-exclusion
          data-animation-target
        >
          <Link href={'/about'}>
            About me <i className="fi fi-sr-video-camera" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
