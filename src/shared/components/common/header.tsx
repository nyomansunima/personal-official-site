'use client'
import * as React from 'react'

import Link from 'next/link'
import { Button } from '@shared/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { usePathname } from 'next/navigation'
import {
  useClickOutside,
  useKeyEvent,
  usePathChange,
} from '@shared/hooks/use-event'

interface NavMenuItemProps {
  children: React.ReactNode
  href: string
  target?: React.HTMLAttributeAnchorTarget
}

/**
 * Renders the brand based on the current pathname.
 *
 * @param pathname - The current pathname.
 * @returns The brand name to be displayed.
 */
function renderPathBrand(pathname: string): string {
  if (pathname === '/') {
    return 'home'
  } else {
    const brand = pathname.replace('/', '')
    return brand
  }
}

/**
 * Renders the brand name based on the current pathname.
 *
 * @param pathname - The current pathname.
 * @returns The brand name to be displayed.
 */
export function Brand(): React.ReactElement {
  const pathname = usePathname()

  return (
    <div className="text-foreground/50 dark:text-foreground/70 text-sm gap-3 flex relative z-10">
      <Link
        href={'/'}
        className="transition-all duration-300 hover:-translate-x-1"
      >
        <span className="font-medium">nyomansunima.one</span>
      </Link>
      <span className="text-foreground hidden tablet:block">/</span>
      <span className="text-foreground transition-all duration-300 hover:-translate-x-1 cursor-pointer hidden tablet:block">
        {renderPathBrand(pathname)}
      </span>
    </div>
  )
}

/**
 * Renders a navigation menu item.
 *
 * @param children - The content of the navigation menu item.
 * @param href - The URL of the navigation menu item.
 * @param target - The target of the navigation menu item.
 * @returns A React element representing a navigation menu item.
 */
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

/**
 * Renders the navigation menu.
 *
 * @returns A React element representing the navigation menu.
 */
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
              className="hover:-translate-y-1"
            >
              <i className="fi text-xs fi-rr-bookmark" />
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
            <NavMenuItem href="/crafts">Crafts</NavMenuItem>
            <NavMenuItem href="/stories">Stories</NavMenuItem>
            <NavMenuItem href="/journeys">Journeys</NavMenuItem>
            <NavMenuItem href="/resources">Resources</NavMenuItem>
            <NavMenuItem href="/about">About</NavMenuItem>
            <NavMenuItem href="/contact">Contact</NavMenuItem>
            <NavMenuItem
              href="https://ko-fi.com/nyomansunima?ref=nyomansunima"
              target="_blank"
            >
              Donate
            </NavMenuItem>
            <NavMenuItem
              href="https://nyomansunima.lemonsqueezy.com?ref=nyomansunima"
              target="_blank"
            >
              Goodies
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

/**
 * Renders the header component.
 *
 * @returns A React element representing the header component.
 */
export default function Header(): React.ReactElement {
  return (
    <header className="flex items-center justify-between h-20 tablet:h-44">
      <Brand />
      <Actions />
    </header>
  )
}
