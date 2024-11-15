import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '@shared/lib/shared-metadata'
import { PublicationSection, RecentlySection } from '@features/stories'

export const metadata: Metadata = {
  title: 'Stories',
  description:
    'Everyday i write, record, and create any resources to sharing into the social media and community platforms',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Stories',
    description:
      'Everyday i write, record, and create any resources to sharing into the social media and community platforms',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Stories',
    description:
      'Everyday i write, record, and create any resources to sharing into the social media and community platforms',
  },
}

export default function StoriesPage(): React.ReactElement {
  return (
    <div className="flex flex-col gap-20">
      <PublicationSection />
      <RecentlySection />
    </div>
  )
}
