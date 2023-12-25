'use client'

import Link from 'next/link'
import { Button } from '~/components/ui/button'

export default function HomeIntroSection() {
  return (
    <section className="flex flex-col container mx-auto laptop:px-20 px-5 laptop:pt-16 laptop:pb-28">
      <h2
        className="text-5xl laptop:text-8xl !leading-tight"
        data-animation="text-char-slide-up"
      >
        Product designer & developer focused on crafting digital products.
      </h2>

      <div className="flex mt-10" data-animation="slide-up">
        <div
          className="flex items-center flex-wrap gap-5 mt-16"
          data-animation-target
        >
          <Button
            asChild
            variant="primary"
            className="transition-all duration-500 hover:scale-95"
          >
            <Link href={'/about'}>
              About me <i className="fi fi-rr-arrow-right" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
