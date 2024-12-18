'use client'

import Link from 'next/link'
import * as React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@shared/components'

function OpenWorkBadge(): React.ReactElement {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={'/contact'}
            className="flex justify-center items-center px-3 h-9 rounded-xl bg-fuchsia-100 dark:bg-fuchsia-400/10 border border-fuchsia-200 dark:border-fuchsia-200/20 text-fuchsia-800 dark:text-fuchsia-400 text-xs gap-2 font-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none"
          >
            <i className="fi fi-rr-coffee-heart" />
            Open to work
          </Link>
        </TooltipTrigger>
        <TooltipContent>Looking for solid works & teams</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function NewBadge(): React.ReactElement {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={'https://devcrates.site?ref=nyomansunima'}
            target="_blank"
            className="flex gap-5 justify-between h-9 px-4 items-center rounded-xl bg-orange-100 text-orange-700 text-xs font-medium border border-orange-200
     dark:bg-orange-400/10 dark:text-orange-400 dark:border-orange-200/20 transition-all duration-300 hover:-translate-y-1 select-none"
          >
            <span>New craft: Developer Resources</span>
            <i className="fi fi-rr-broken-chain-link-wrong" />
          </Link>
        </TooltipTrigger>
        <TooltipContent>Something new in this week</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex items-center gap-2 flex-wrap">
        <OpenWorkBadge />
        <NewBadge />
      </div>

      <div className="flex flex-col gap-6 text-base !leading-7 text-pretty mt-10">
        <p>
          Hello, I am a{' '}
          <span className="cursor-pointer inline-flex transition-all duration-300 hover:text-foreground text-fuchsia-500 dark:text-fuchsia-300">
            product designer
          </span>
          ,{' '}
          <span className="cursor-pointer inline-flex transition-all duration-300 hover:text-foreground text-red-500 dark:text-red-300">
            software engineer
          </span>{' '}
          &{' '}
          <span className="cursor-pointer inline-flex transition-all duration-300 hover:text-foreground text-blue-500 dark:text-blue-300">
            creator
          </span>{' '}
          that loves to craft solutions for global audiences. Focus to shipping
          great, effective & impactful products, services, saas, goodies, sites
          & contents. Talks about indie hacking, product shipping, and business.
        </p>
        <p>
          Currently working as product designer, and developer to craft a
          product, services at{' '}
          <Link
            href={'https://www.tryweebo.one'}
            target="_blank"
            className="text-blue-500 dark:text-blue-300 cursor-pointer inline-flex transition-all duration-300 hover:text-foreground"
          >
            weebo
          </Link>
          {', '}
          <Link
            href={'https://www.moono.space'}
            target="_blank"
            className="text-blue-500 dark:text-blue-300 cursor-pointer inline-flex transition-all duration-300 hover:text-foreground"
          >
            moono
          </Link>
          {' & '}
          <Link
            href={'https://www.weecraft.club'}
            target="_blank"
            className="text-blue-500 dark:text-blue-300 cursor-pointer inline-flex transition-all duration-300 hover:text-foreground"
          >
            weecraft
          </Link>{' '}
          also building the brands. Open for collaborations and contributions.
        </p>
      </div>
    </section>
  )
}
