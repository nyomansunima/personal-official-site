import Link from 'next/link'
import * as React from 'react'
import { Button } from '~/components/ui/button'

export function AskSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 laptop:py-56 items-center">
      <h2 className="text-2xl laptop:text-3xl text-center !leading-tight font-medium">
        Asks.
      </h2>

      <p className="mt-7 !leading-relaxed text-center text-foreground/80 tablet:w-10/12 laptop:w-8/12">
        Feeling stuck with a nagging problem or idea that just won't go away?
        Don't let that confusion linger any longer. Take the first step and
        contact me now.
      </p>

      <div className="flex justify-center mt-16">
        <Button
          variant={'text'}
          size={'lg'}
          asChild
          className="transition-all duration-500 hover:scale-95"
        >
          <Link href={'/contact'}>
            Connect Now <i className="fi fi-rr-heart" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
