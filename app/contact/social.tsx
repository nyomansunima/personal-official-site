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

interface Social {
  label: string
  href: string
  icon: string
  className?: string
}

interface SocialItemProps {
  social: Social
}

// predefined socials and links that help to
// connect with the author
const socials: Social[] = [
  {
    label: 'Subscribe',
    href: 'https://youtube.com/@nyomansunima',
    icon: 'fi fi-brands-youtube',
  },
  {
    label: 'Follow on twitter',
    href: 'https://twitter.com/nyomansunima',
    icon: 'fi fi-brands-twitter',
  },
  {
    label: 'See on Threads',
    href: 'https://threads.net/@nyomansunima',
    icon: 'fi fi-rr-knitting',
    className: 'laptop:w-28',
  },
  {
    label: 'Connect now',
    href: 'https://linkedin.com/in/nyomansunima',
    icon: 'fi fi-brands-linkedin',
  },
  {
    label: 'See story',
    href: 'https://facebook.com/nyomansunima',
    icon: 'fi fi-brands-facebook',
  },
  {
    label: 'See the gallery',
    href: 'https://instagram.com/nyomansunima',
    icon: 'fi fi-brands-instagram',
  },
  {
    label: 'Design tweets',
    href: 'https://layers.to/nyomansunima',
    icon: 'fi fi-rr-multiple-alt',
    className: 'laptop:w-28',
  },
  {
    label: 'Coding projects',
    href: 'https://github.com/nyomansunima',
    icon: 'fi fi-brands-github',
    className: 'laptop:w-28',
  },
  {
    label: 'Design projects',
    href: 'https://dribbble.com/nyomansunima',
    icon: 'fi fi-brands-dribbble',
  },
  {
    label: 'Past Coding projects',
    href: 'https://gitlab.com/nyomansunima',
    icon: 'fi fi-brands-gitlab',
    className: 'laptop:w-36',
  },
  {
    label: 'Connect on Peerlist',
    href: 'https://peerlist.io/nyomansunima',
    icon: 'fi fi-rr-circle-p',
  },
]

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
