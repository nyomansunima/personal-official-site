import Link from 'next/link'
import * as React from 'react'
import { Button } from '~/components/ui/button'
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '~/components/ui/hover-card'

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
    <div className="flex justify-center items-center px-4 h-9 rounded-full bg-green-200 text-green-800 text-xs gap-2 font-medium transition-all duration-300 hover:scale-95 cursor-pointer">
      <span className="h-2 w-2 rounded-full bg-green-800" />
      Open to work
    </div>
  )
}

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 laptop:py-36 items-center">
      <OpenWorkBadge />

      <h2 className="text-2xl laptop:text-3xl !leading-tight font-medium text-center mt-10">
        Hello, I’am a designer, developer & creator{' '}
        <br className="hidden tablet:block" />
        loves to crafts products, apps, services{' '}
        <br className="hidden tablet:block" />
        for global audiences
      </h2>

      <div className="mt-10 tablet:w-10/12 laptop:w-5/12">
        <p className="text-foreground/80 text-center !leading-relaxed">
          Currently focus to work on business, projects, and creating side
          hustles - <SonibbleHoverStatus />, <MoonoHoverStatus />,{' '}
          <WeeboHoverStatus />, <WeelabHoverStatus />. Hunting a new opportunity
          to join the teams to build a things.
        </p>
      </div>

      <div className="flex flex-col laptop:flex-row justify-center gap-4 mt-16">
        <Button
          variant={'secondary'}
          className="transition-all duration-300 hover:scale-95"
          size={'lg'}
          asChild
        >
          <Link href={'/contact'}>
            Connect <i className="fi fi-rr-heart" />
          </Link>
        </Button>

        <Button
          variant={'outline'}
          className="transition-all duration-300 hover:scale-95"
          size={'lg'}
          asChild
        >
          <Link href={'/about'}>
            About me <i className="fi fi-rr-arrow-right" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
