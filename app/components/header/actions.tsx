import * as React from 'react'

import Link from 'next/link'
import { Button } from '~/components/ui/button'

export function Actions(): React.ReactElement {
  return (
    <div className="flex items-center gap-3">
      <Button
        asChild
        variant={'outline'}
        size={'icon'}
        className="hover:scale-95"
      >
        <Link href={'https://ko-fi.com/nyomansunima'} target="_blank">
          <i className="fi fi-rr-heart" />
        </Link>
      </Button>

      <Button
        asChild
        variant={'outline'}
        size={'icon'}
        className="hover:scale-95"
      >
        <Link href={'https://nyomansunima.lemonsqueezy.com/'} target="_blank">
          <i className="fi fi-rr-shop" />
        </Link>
      </Button>

      <Button
        asChild
        variant={'secondary'}
        size={'base'}
        className="hover:scale-95"
      >
        <Link href={'/contact'}>Say hello”</Link>
      </Button>
    </div>
  )
}
