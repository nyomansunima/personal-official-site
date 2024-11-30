import * as React from 'react'
import { Button } from '@shared/components/ui/button'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@shared/components/ui/tooltip'
import { mergeClass } from '@shared/utils/helper'

export interface SocialData {
  label: string
  href: string
  icon: string
  className?: string
}

interface SocialItemProps {
  social: SocialData
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