import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'

export const metadata: Metadata = {
  title: 'Works',
  description:
    'See all of my works including projects, apps, products, case studies, idea and playground',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Works',
    description:
      'See all of my works including projects, apps, products, case studies, idea and playground',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Works',
    description:
      'See all of my works including projects, apps, products, case studies, idea and playground',
  },
}

export default function ResourcesPage(): React.ReactElement {
  return (
    <div className="px-5 laptop::px-0 container mx-auto">
      <section className="flex flex-col py-20 items-center">
        <h1 className="text-2xl laptop:text-3xl text-center !leading-tight font-medium">
          Works
        </h1>

        <p className="text-foreground/80 text-center tablet:w-8/12 laptop:w-5/12 mt-7 !leading-relaxed">
          All of my works in my careers and something that i crafted to public.
          See everything including projects, apps, products, case studies, idea
          and playground.
        </p>
      </section>
    </div>
  )
}
