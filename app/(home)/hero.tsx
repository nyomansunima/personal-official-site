import Link from 'next/link'
import * as React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '~/components/ui/tooltip'

function OpenWorkBadge(): React.ReactElement {
  return (
    <div className="mb-10">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href={'/contact'}
              className="flex justify-center items-center px-3 h-9 rounded-full bg-fuchsia-100 dark:bg-fuchsia-400/10 border border-fuchsia-200 dark:border-fuchsia-200/20 text-fuchsia-800 dark:text-fuchsia-400 text-xs gap-2 font-medium transition-all duration-300 hover:scale-95 cursor-pointer"
            >
              Open to work
            </Link>
          </TooltipTrigger>
          <TooltipContent>Looking for solid works & teams</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <OpenWorkBadge />

      <div className="flex flex-col text-2xl tablet:text-3xl laptop:text-3xl !leading-normal font-medium gap-6 laptop:gap-12">
        <h2>
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
            creator.
          </span>{' '}
          Loves to craft solutions for global audiences.
        </h2>
        <h2>
          Focus on shipping saas, goodies, digital products, sites & contents to
          help people solve their problems.
        </h2>
        <h2>
          Talks about self improvement, productivity, life hacks, design,
          development, product shipping, and business.
        </h2>
        <h2>Currently focus on building career, brands & businesses.</h2>
      </div>
    </section>
  )
}
