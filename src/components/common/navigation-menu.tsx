'use client'

import { Button } from '@components/ui/button'
import { Sheet, SheetContent } from '@components/ui/sheet'
import { Tooltip, TooltipContent, TooltipTrigger } from '@components/ui/tooltip'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import { sideNavMenus } from '~/constants/menu'
import { socials } from '~/constants/social'

export function NavigationMenu() {
  const pathname = usePathname()
  const [isOpen, setOpen] = React.useState<boolean>(false)

  React.useEffect(
    function closeSheetOnPathChange() {
      setOpen(false)
    },
    [pathname],
  )

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size={'icon'}
            variant={'outline'}
            onClick={() => setOpen(true)}
          >
            <i className="fi fi-rr-apps-add" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Open Menu</TooltipContent>
      </Tooltip>

      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetContent className="laptop:py-16 laptop:px-20">
          <div className="flex">
            <div className="flex flex-col w-4/12">
              <span className="text-lg text-slate-500 dark:text-slate-700">
                Connect on
              </span>

              <ul className="flex flex-col list-none gap-3 mt-5">
                {socials.map((social, i) => (
                  <li
                    className="flex items-center font-medium transition-all duration-500 hover:-translate-x-1"
                    key={i}
                  >
                    <Link href={social.url} target="_blank">
                      {social.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col w-7/12">
              <span className="text-lg text-slate-500 dark:text-slate-700">
                Explore now
              </span>

              <ul className="flex flex-col gap-6 mt-5">
                {sideNavMenus.map((menu, i) => (
                  <li
                    key={i}
                    className="flex items-center text-5xl transition-all duration-700 hover:-translate-x-1"
                    data-cursor-size="80"
                  >
                    <Link href={menu.link}>{menu.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
