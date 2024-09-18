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
        <span className="cursor-pointer text-foreground/50">@moono</span>
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
        <span className="cursor-pointer text-foreground/50">@weecraft</span>
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

// Badge for open work or looking for new opportunity
function OpenWorkBadge(): React.ReactElement {
  return (
    <div>
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
    </div>
  )
}

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 laptop:py-36">
      <OpenWorkBadge />

      <h2 className="flex flex-col text-2xl laptop:text-6xl !leading-tight font-medium mt-10 laptop:mt-16 gap-6 laptop:gap-16">
        <span className="text-foreground/40">Hello,</span>
        <span>
          I'm a designer, developer & creator loves to crafts solutions for
          global audiences.
        </span>
        <span>
          Mostly focus on crafts{' '}
          <span className="cursor-pointer text-fuchsia-600">saas</span>,{' '}
          <span className="cursor-pointer text-orange-600">products</span>,{' '}
          <span className="cursor-pointer text-blue-600">goodies</span> &{' '}
          <span className="cursor-pointer text-pink-600">sharing tips</span>{' '}
          that help people to solve their problem.
        </span>
        <span>
          Currently focus on building career, projects & business at{' '}
          <WeecraftHoverStatus /> , <MoonoHoverStatus />
        </span>
      </h2>
    </section>
  )
}
