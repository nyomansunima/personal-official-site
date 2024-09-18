'use client'
import * as React from 'react'

import Link from 'next/link'
import { Button } from '~/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { NavMenuItem } from './nav'

function SupportButton(): React.ReactElement {
  return (
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
  )
}

function StoreButton(): React.ReactElement {
  return (
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
  )
}

function ContactButton(): React.ReactElement {
  return (
    <Button
      asChild
      variant={'secondary'}
      size={'base'}
      className="hover:scale-95 font-normal rounded-2xl"
    >
      <Link href={'/contact'}>⛺️ Say hello</Link>
    </Button>
  )
}

// only show on desktop screen
function DesktopAction(): React.ReactElement {
  return (
    <div className="hidden laptop:flex items-center gap-2">
      <SupportButton />
      <StoreButton />
      <ContactButton />
    </div>
  )
}

// show when user on mobile phone
function MobileAction(): React.ReactElement {
  const [isShow, toggleMenu] = React.useState<boolean>(false)

  function TriggerButton(): React.ReactElement {
    return (
      <Button
        asChild
        variant={'outline'}
        size={'icon'}
        onClick={() => {
          toggleMenu((state) => !state)
        }}
        className="hover:scale-95 rounded-2xl"
      >
        <i className="fi text-xs fi-rr-menu-burger" />
      </Button>
    )
  }

  return (
    <div className="flex laptop:hidden gap-2 items-center">
      <TriggerButton />
      {isShow && (
        <div className="flex h-screen w-screen fixed inset-0 z-20 bg-background">
          <div className="flex flex-col w-full p-5">
            <div className="flex justify-end">
              <TriggerButton />
            </div>

            <div className="flex flex-col mt-4">
              <ul className="flex flex-col list-none items-start">
                <NavMenuItem href="/works">Works</NavMenuItem>
                <NavMenuItem href="/sharing">Sharing</NavMenuItem>
                <NavMenuItem href="/resources">Resources</NavMenuItem>
                <NavMenuItem href="/about">About</NavMenuItem>
              </ul>
            </div>

            <div className="flex items-center flex-wrap gap-2 mt-10">
              <SupportButton />
              <StoreButton />
              <ContactButton />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export function Actions(): React.ReactElement {
  return (
    <div className="flex relative z-10">
      <DesktopAction />
      <MobileAction />
    </div>
  )
}
