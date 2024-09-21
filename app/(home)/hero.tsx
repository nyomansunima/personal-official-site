import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '~/components/ui/hover-card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '~/components/ui/tooltip'

// Hover status that show the detail info
// and insight of current works
function MoonoHoverStatus(): React.ReactElement {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer text-orange-600">@moono</span>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-80 transition-all duration-300 hover:scale-95">
        <div className="flex w-full gap-3 relative group font-normal">
          <div>
            <Image
              src={'/images/moono.png'}
              alt="Moono"
              width={40}
              height={40}
              className=""
            />
          </div>
          <div className="flex flex-col flex-1 justify-start items-start">
            <h3 className="text-sm font-medium">Moono</h3>
            <span className="text-sm text-foreground/90 text-clip">
              moono.space
            </span>

            <p className="text-sm text-foreground/60 mt-3 text-start">
              The tiny studio for software projects, create micro, and simple
              saas.
            </p>
          </div>

          <Link
            href={'https://moono.space'}
            target="_blank"
            className="hidden w-7 h-7 rounded-lg bg-secondary/30 border border-border group-hover:flex justify-center items-center absolute top-0 right-0"
          >
            <i className="fi fi-rr-arrow-small-right -rotate-45" />
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

function WeecraftHoverStatus(): React.ReactElement {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer text-pink-600">@weecraft</span>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-80 transition-all duration-300 hover:scale-95">
        <div className="flex w-full gap-3 relative group font-normal">
          <div>
            <Image
              src={'/images/weecraft.png'}
              alt="Weecraft"
              width={40}
              height={40}
              className=""
            />
          </div>
          <div className="flex flex-col flex-1 justify-start items-start">
            <h3 className="text-sm font-medium">Weecraft</h3>
            <span className="text-sm text-foreground/90 text-clip">
              weecraft.club
            </span>

            <p className="text-sm text-foreground/60 mt-3 text-start">
              Tiny resources for better experience on code
            </p>
          </div>

          <Link
            href={'https://weecraft.club'}
            target="_blank"
            className="hidden w-7 h-7 rounded-lg bg-secondary/30 border border-border group-hover:flex justify-center items-center absolute top-0 right-0"
          >
            <i className="fi fi-rr-arrow-small-right -rotate-45" />
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

function OpenWorkBadge(): React.ReactElement {
  return (
    <div className="mb-10">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="flex justify-center items-center px-4 h-9 rounded-full bg-fuchsia-100 dark:bg-fuchsia-600/10 text-fuchsia-800 text-xs gap-2 font-medium transition-all duration-300 hover:scale-95 cursor-pointer">
              <span className="h-2 w-2 rounded-full bg-fuchsia-800" />
              Open to work
            </div>
          </TooltipTrigger>
          <TooltipContent>Looking for solid works & teams</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20">
      <OpenWorkBadge />
      <div className="flex flex-col text-2xl tablet:text-3xl laptop:text-3xl !leading-snug font-medium gap-6 laptop:gap-16">
        <h2>
          Hello, I am a designer, developer & creator who loves to craft
          solutions for global audiences, with strong experience in building
          better products.
        </h2>
        <h2>
          Mostly focus on shipping{' '}
          <span className="cursor-pointer text-fuchsia-600">saas</span>,{' '}
          <span className="cursor-pointer text-orange-600">products</span>,{' '}
          <span className="cursor-pointer text-blue-600">goodies</span> &{' '}
          <span className="cursor-pointer text-pink-600">sharing tips</span>{' '}
          that help people to solve their problems.
        </h2>
        <h2>
          Currently focus on building career, brands & businesses{' '}
          <WeecraftHoverStatus />, <MoonoHoverStatus />
        </h2>
      </div>
    </section>
  )
}
