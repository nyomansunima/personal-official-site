import Link from 'next/link'
import * as React from 'react'

export function CTASection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 laptop:py-36 items-center">
      <Link
        href={'/contact'}
        className="text-2xl laptop:text-3xl !leading-tight font-medium text-center transition-all duration-300 hover:scale-95"
      >
        Alright, let’s connect
        <br className="hidden laptop:block" />& build something
      </Link>
    </section>
  )
}
