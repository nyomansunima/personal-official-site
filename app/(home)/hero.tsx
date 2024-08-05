import Link from 'next/link'
import * as React from 'react'
import { Button } from '~/components/ui/button'

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

      <h2 className="text-3xl laptop:text-4xl !leading-tight text-center font-medium mt-10">
        Hello, I’am a designer, developer & writer
        <br className="hidden tablet:block" />
        <span className="text-foreground/60">
          {' '}
          loves to crafts products, apps, &
          <br className="hidden tablet:block" />
          solutions for people
        </span>
      </h2>

      <div className="mt-10 tablet:w-10/12 laptop:w-5/12">
        <p className="text-foreground/80 text-center !leading-relaxed">
          Currently focus to work on business, projects, and creating side
          hustles -{' '}
          <Link
            className="font-medium text-foreground"
            href={'https://sonibble.com'}
          >
            Sonibble
          </Link>
          ,{' '}
          <Link
            className="font-medium text-foreground"
            href={'https://weebo.com'}
          >
            Weebo
          </Link>
          ,{' '}
          <Link
            className="font-medium text-foreground"
            href={'https://weelab.com'}
          >
            Weelab
          </Link>
          . Hunting a new opportunity to join the teams to build a things.
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
