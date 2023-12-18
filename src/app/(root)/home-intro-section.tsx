'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '~/components/ui/button'

export default function HomeIntroSection() {
  return (
    <section
      className="flex flex-col container mx-auto laptop:px-20 intro px-5 laptop:py-24"
      data-animation="body-background-transition"
    >
      <h2
        className="text-5xl laptop:text-8xl !leading-tight laptop:w-10/12"
        data-cursor-size="200"
        data-cursor-exclusion
        data-animation="text-char-opacity"
      >
        Web design & seo expert for business.
      </h2>

      <div className="flex mt-10" data-animation="slide-up">
        <div
          className="flex items-center flex-wrap gap-5 mt-16"
          data-animation-target
        >
          <Button
            asChild
            variant="outline"
            className="transition-all duration-500 hover:scale-95"
          >
            <Link href={'/about'}>
              About me <i className="fi fi-sr-video-camera" />
            </Link>
          </Button>
          <Button
            asChild
            size={'md'}
            variant={'primary'}
            className="transition-all duration-500 hover:scale-95"
          >
            <Link href={'/services'}>
              My Services
              <i className="fi fi-rr-arrow-right" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
