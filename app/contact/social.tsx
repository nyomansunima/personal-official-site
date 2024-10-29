'use client'

import * as React from 'react'
import { Button } from '~/components/ui/button'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '~/components/ui/tooltip'
import { mergeClass } from '~/lib/utils'
import jsonData from './data.json'

interface Social {
  label: string
  href: string
  icon: string
  className?: string
}

interface SocialItemProps {
  social: Social
}

const socials: Social[] = jsonData.socials as Social[]

export function SocialMediaList(): React.ReactElement {
  return (
    <div className="flex mt-4 tablet:mt-6">
      <ul className="flex flex-wrap items-center gap-2">
        {socials.map((soc, index) => (
          <SocialItem social={soc} key={index} />
        ))}
      </ul>
    </div>
  )
}

export function SocialItem({ social }: SocialItemProps): React.ReactElement {
  const { href, icon, label, className } = social

  return (
    <li className="flex">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger suppressHydrationWarning asChild>
            <Button
              variant={'outline'}
              size={'icon'}
              asChild
              className={mergeClass(
                `text-sm h-12 w-12 rounded-2xl transition-all duration-500 hover:-translate-y-1 bg-ambient`,
                className,
              )}
            >
              <Link href={href} target="_blank">
                <i className={icon} />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </li>
  )
}
