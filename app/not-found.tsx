import * as React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '~/components/ui/button'

export const metadata: Metadata = {
  title: 'Not Found',
  description: ' Opps, good luck. You’re missing the pages',
}

export default function NotFound(): React.ReactElement {
  return (
    <div className="px-5 laptop:px-0 container mx-auto py-20 laptop:py-36">
      <section className="flex flex-col items-center">
        <h1 className="!leading-tight text-3xl tablet:text-4xl text-center font-medium">
          Not found
        </h1>

        <p className="mt-7 !leading-relaxed laptop:w-5/12 text-center text-foreground">
          You’re searching something wrong. This can be happen when the url is
          invalid or deleted, this mean your pages is not found. Start explore
          another one, we help you find better way to navigate through header
          and footer. “I’am your designer & developer”.
        </p>

        <div className="mt-16">
          <Button
            asChild
            variant={'secondary'}
            size={'lg'}
            data-cursor-size="40"
            className="transition-all hover:scale-95"
          >
            <Link href={'/'}>
              Bring me back <i className="fi fi-rr-arrow-right" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
