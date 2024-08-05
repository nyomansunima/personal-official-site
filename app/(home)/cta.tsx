import Link from 'next/link'
import * as React from 'react'
import { Button } from '~/components/ui/button'

export function CTASection(): React.ReactElement {
  return (
    <div className="flex flex-col py-20 laptop:py-36 items-center">
      <h2 className="text-3xl laptop:text-4xl !leading-tight text-center font-medium mt-10">
        Let’s make your idea
        <br className="hidden tablet:block" />
        become reality
      </h2>

      <div className="flex mt-16 justify-center">
        <Button variant={'secondary'} size={'lg'} asChild>
          <Link href={'/contact'}>
            Connect now <i className="fi fi-rr-heart" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
