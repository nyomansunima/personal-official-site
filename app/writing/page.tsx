import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'
import { PublicationSection } from './publication'

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'I write something to share with other people, help in business, sharing idea, blog, tips and tricks',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Writing',
    description:
      'I write something to share with other people, help in business, sharing idea, blog, tips and tricks',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Writing',
    description:
      'I write something to share with other people, help in business, sharing idea, blog, tips and tricks',
  },
}

export default function WritingPage(): React.ReactElement {
  return (
    <div className="px-5 laptop:px-0 container mx-auto">
      <section className="flex flex-col py-20 items-center">
        <h1 className="text-2xl laptop:text-3xl text-center !leading-tight font-medium">
          Writes
        </h1>

        <p className="text-foreground/80 text-center tablet:w-8/12 laptop:w-5/12 mt-7 !leading-relaxed">
          Writing become my daily activity. I wrote something about design,
          development, indie hacking, business, entrepreneur, productivity,
          story and self improvement.
        </p>
      </section>

      <PublicationSection />
    </div>
  )
}
