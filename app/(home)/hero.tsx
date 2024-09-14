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

function SonibbleHoverStatus(): React.ReactElement {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer font-medium">@sonibble</span>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-80 transition-all duration-300 hover:scale-95">
        <div className="flex w-full gap-3 relative group">
          <div className="flex justify-center items-center h-12 w-12 rounded-xl bg-secondary/35">
            🏀
          </div>
          <div className="flex flex-col flex-1 justify-start items-start">
            <h3 className="text-sm font-medium">Sonibble</h3>
            <span className="text-sm text-foreground/90 text-clip">
              sonibble.one
            </span>

            <p className="text-sm text-foreground/60 mt-3 text-start">
              Helping business grow with design, website, copy and strategy.
            </p>
          </div>

          <Link
            href={'https://sonibble.one'}
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

function WeeboHoverStatus(): React.ReactElement {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer font-medium">@weebo</span>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-80 transition-all duration-300 hover:scale-95">
        <div className="flex w-full gap-3 relative group">
          <div className="flex justify-center items-center h-12 w-12 rounded-xl bg-secondary/35">
            🐔
          </div>
          <div className="flex flex-col flex-1 justify-start items-start">
            <h3 className="text-sm font-medium">Weebo</h3>
            <span className="text-sm text-foreground/90 text-clip">
              weebo.one
            </span>

            <p className="text-sm text-foreground/60 mt-3 text-start">
              Create unlimited website design for businesses
            </p>
          </div>

          <Link
            href={'https://weebo.one'}
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

function WeelabHoverStatus(): React.ReactElement {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer font-medium">@weelab</span>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-80 transition-all duration-300 hover:scale-95">
        <div className="flex w-full gap-3 relative group">
          <div className="flex justify-center items-center h-12 w-12 rounded-xl bg-secondary/35">
            🛍️
          </div>
          <div className="flex flex-col flex-1 justify-start items-start">
            <h3 className="text-sm font-medium">Weelab</h3>
            <span className="text-sm text-foreground/90 text-clip">
              weelab.space
            </span>

            <p className="text-sm text-foreground/60 mt-3 text-start">
              Create website, landing, micro sites collections as templates.
            </p>
          </div>

          <Link
            href={'https://weelab.space'}
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

function MoonoHoverStatus(): React.ReactElement {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer font-medium">@moono</span>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-80 transition-all duration-300 hover:scale-95">
        <div className="flex w-full gap-3 relative group">
          <div className="flex justify-center items-center h-12 w-12 rounded-xl bg-secondary/35">
            🛼
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

function OpenWorkBadge(): React.ReactElement {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex justify-center items-center px-4 h-9 rounded-full bg-fuchsia-100 dark:bg-fuchsia-600/10 text-fuchsia-800 text-xs gap-2 font-medium transition-all duration-300 hover:scale-95 cursor-pointer">
            <span className="h-2 w-2 rounded-full bg-fuchsia-800" />
            Open to work
          </div>
        </TooltipTrigger>
        <TooltipContent>
          Looking for teams to join in, Please contact me!
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 laptop:py-36 items-center">
      <OpenWorkBadge />

      <h2 className="text-2xl laptop:text-7xl !leading-tight text-center font-medium mt-10">
        Designer, developer & creator loves to crafts solutions for global
        audiences
      </h2>

      <div className="mt-10 tablet:w-10/12 laptop:w-5/12">
        <p className="text-foreground/80 !leading-relaxed text-center">
          Currently focus to work on business, projects, and creating side
          hustles - <SonibbleHoverStatus />, <MoonoHoverStatus />,{' '}
          <WeeboHoverStatus />, <WeelabHoverStatus />. Hunting a new opportunity
          to join the teams to build a things.
        </p>
      </div>
    </section>
  )
}
