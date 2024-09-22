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
import { usePathname } from 'next/navigation'
import { useClickOutside, useKeyEvent, usePathChange } from '~/lib/hooks/event'

interface NavMenuItemProps {
  children: React.ReactNode
  href: string
  target?: React.HTMLAttributeAnchorTarget
}

export function NavMenuItem({
  children,
  href,
  target,
}: NavMenuItemProps): React.ReactElement {
  return (
    <li className="flex w-full col-span-1">
      <Link
        href={href}
        target={target}
        className="flex justify-center items-center text-sm transition-all duration-300 hover:-translate-x-1"
      >
        {children}
      </Link>
    </li>
  )
}

function Menu(): React.ReactElement {
  const modalRef = React.useRef<HTMLDivElement>(null)
  const [isShow, setShow] = React.useState<boolean>(false)
  const path = usePathname()

  useClickOutside(modalRef, () => {
    setShow(false)
  })

  usePathChange(() => {
    setShow(false)
  })

  useKeyEvent('keydown', 'Escape', () => {
    setShow(false)
  })

  return (
    <div className="relative">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={'outline'}
              size={'icon'}
              onClick={() => setShow(true)}
              className="hover:scale-95 rounded-2xl"
            >
              <i className="fi text-xs fi-rr-menu-burger" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Explore all of the menus, support & contact
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {isShow && (
        <div
          className="flex px-6 py-5 rounded-xl border border-border bg-ambient w-[300px] absolute z-20 top-12 right-0"
          ref={modalRef}
        >
          <ul className="grid grid-cols-2 w-full gap-x-4 gap-y-4">
            <NavMenuItem href="/works">Works</NavMenuItem>
            <NavMenuItem href="/sharing">Sharing</NavMenuItem>
            <NavMenuItem href="/resources">Resources</NavMenuItem>
            <NavMenuItem href="/about">About</NavMenuItem>
            <NavMenuItem href="/contact">Contact</NavMenuItem>
            <NavMenuItem href="https://ko-fi.com/nyomansunima" target="_blank">
              Support me
            </NavMenuItem>
            <NavMenuItem
              href="https://nyomansunima.lemonsqueezy.com"
              target="_blank"
            >
              Stores
            </NavMenuItem>
          </ul>
        </div>
      )}
    </div>
  )
}

export function Actions(): React.ReactElement {
  return (
    <div className="flex relative z-10 gap-2">
      <Menu />
    </div>
  )
}
