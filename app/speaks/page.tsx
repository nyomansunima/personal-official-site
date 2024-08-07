import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'
import { PublicationSection } from './publication'

export const metadata: Metadata = {
  title: 'Speaks',
  description:
    'See where i share something through talks. Talks that help you find some solutions and i share something',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Speaks',
    description:
      'See where i share something through talks. Talks that help you find some solutions and i share something',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Speaks',
    description:
      'See where i share something through talks. Talks that help you find some solutions and i share something',
  },
}

export default function SpeaksPage(): React.ReactElement {
  return (
    <div className="px-5 laptop:px-0 container mx-auto">
      <section className="flex flex-col py-20 items-center">
        <h1 className="text-2xl laptop:text-3xl text-center !leading-tight font-medium">
          Speaks
        </h1>

        <p className="text-foreground/80 text-center tablet:w-8/12 laptop:w-5/12 mt-7 !leading-relaxed">
          Talks in any of are, find interested topics around business, indie
          hacking, podcasts, and entrepreneur. See the videos, or podcast from
          any creators, events with me.
        </p>
      </section>

      <PublicationSection />
    </div>
  )
}
