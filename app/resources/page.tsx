import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'
import { SourcesSection } from './sources'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Get free resources and things that help your works',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Resources',
    description: 'Get free resources and things that help your works',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Resources',
    description: 'Get free resources and things that help your works',
  },
}

export default function ResourcesPage(): React.ReactElement {
  return (
    <div className="px-5 laptop::px-0 container mx-auto">
      <section className="flex flex-col py-20 items-center">
        <h1 className="text-3xl laptop:text-4xl text-center !leading-tight font-medium">
          Resources
        </h1>

        <p className="text-foreground/80 text-center tablet:w-8/12 laptop:w-5/12 mt-7 !leading-relaxed">
          Helpful websites, references, sources that I've been using for years
          that have helped me in career, works, business and much more. 🔥
        </p>
      </section>

      <SourcesSection />
    </div>
  )
}
