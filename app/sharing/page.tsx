import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'
import { PublicationSection } from './publication'
import { RecentlySection } from './recent'

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
    <div className="flex flex-col">
      <section className="flex flex-col py-20">
        <p className="text-foreground !leading-relaxed laptop:w-10/12">
          Writing, recording and create content become my daily activity. I make
          tips about design, development, indie hacking, business, entrepreneur,
          productivity, story and self improvement.
        </p>
      </section>

      <PublicationSection />
      <RecentlySection />
    </div>
  )
}
