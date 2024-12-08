import Link from 'next/link'
import * as React from 'react'
import { Button } from '@shared/components'

export function AskSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center">
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
          <Link href={'/contact'}>Asks me a question</Link>
        </Button>
      </div>
    </section>
  )
}
