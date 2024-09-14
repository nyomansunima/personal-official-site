import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'
import { PublicationSection } from './publication'

export const metadata: Metadata = {
  title: 'Sharing',
  description:
    'Everyday i write, record, and create any resources to sharing into the social media and community platforms',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Sharing',
    description:
      'Everyday i write, record, and create any resources to sharing into the social media and community platforms',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Sharing',
    description:
      'Everyday i write, record, and create any resources to sharing into the social media and community platforms',
  },
}

export default function WritingPage(): React.ReactElement {
  return (
    <div className="px-5 laptop:px-0 container mx-auto">
      <section className="flex flex-col py-20 items-center">
        <h1 className="text-2xl laptop:text-3xl text-center !leading-tight font-medium">
          Sharing
        </h1>

        <p className="text-foreground/80 text-center tablet:w-8/12 laptop:w-5/12 mt-7 !leading-relaxed">
          Writing, recording and create content become my daily activity. I make
          tips about design, development, indie hacking, business, entrepreneur,
          productivity, story and self improvement.
        </p>
      </section>

      <PublicationSection />
    </div>
  )
}
