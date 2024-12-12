'use client'

import Link from 'next/link'
import * as React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@shared/components'
import { motion } from 'motion/react'

function OpenWorkBadge(): React.ReactElement {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={'/contact'}
            className="flex justify-center items-center px-3 h-9 rounded-xl bg-fuchsia-100 dark:bg-fuchsia-400/10 border border-fuchsia-200 dark:border-fuchsia-200/20 text-fuchsia-800 dark:text-fuchsia-400 text-xs gap-2 font-medium transition-all duration-300 hover:scale-95 cursor-pointer"
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
     dark:bg-orange-400/10 dark:text-orange-400 dark:border-orange-200/20 transition-all duration-300 hover:scale-95"
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
      <div className="flex items-center gap-3 flex-wrap">
        <OpenWorkBadge />
        <NewBadge />
      </div>

      <div className="flex flex-col text-2xl tablet:text-3xl laptop:text-3xl !leading-normal font-medium gap-6 laptop:gap-12 mt-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: '1.2', delay: 0.1 }}
          viewport={{
            once: true,
            margin: '-300px 0px',
          }}
        >
          Hello, I am a{' '}
          <span className="cursor-pointer text-rose-600 dark:text-rose-400">
            product designer
          </span>
          {', '}
          <span className="cursor-pointer text-orange-600 dark:text-orange-400">
            software engineer
          </span>
          {' & '}
          <span className="cursor-pointer text-indigo-600 dark:text-indigo-400">
            creator
          </span>{' '}
          loves to craft solutions for global audiences.
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: '1.2', delay: 0.1 }}
          viewport={{
            once: true,
            margin: '-300px 0px',
          }}
        >
          Focus to shipping great, effective & impactful products, services,
          saas, goodies, sites & contents.
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: '1.2', delay: 0.1 }}
          viewport={{
            once: true,
            margin: '-300px 0px',
          }}
        >
          Talks about indie hacking, product shipping, and business.
        </motion.h2>
      </div>
    </section>
  )
}
