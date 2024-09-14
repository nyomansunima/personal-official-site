import * as React from 'react'

import Link from 'next/link'
import { Button } from '~/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'

export function Actions(): React.ReactElement {
  return (
    <div className="flex items-center gap-2 relative z-10">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              asChild
              variant={'outline'}
              size={'icon'}
              className="hover:scale-95 rounded-2xl"
            >
              <Link href={'https://ko-fi.com/nyomansunima'} target="_blank">
                <i className="fi text-xs fi-rr-heart" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Support me</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              asChild
              variant={'outline'}
              size={'icon'}
              className="hover:scale-95 rounded-2xl"
            >
              <Link
                href={'https://nyomansunima.lemonsqueezy.com/'}
                target="_blank"
              >
                <i className="fi text-xs fi-rr-shop" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Checkout store</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Button
        asChild
        variant={'secondary'}
        size={'base'}
        className="hover:scale-95 font-normal rounded-2xl"
      >
        <Link href={'/contact'}>⛺️ Say hello</Link>
      </Button>
    </div>
  )
}
