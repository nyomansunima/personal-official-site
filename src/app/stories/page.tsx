import * as React from 'react'
import { Metadata } from 'next'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import { PublicationSection, RecentlySection } from '@features/stories'

export const metadata: Metadata = {
  title: 'Stories',
  description:
    'Everyday i write, record, and create any resources to sharing into the social media and community platforms',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Stories',
    description:
      'Everyday i write, record, and create any resources to sharing into the social media and community platforms',
  },
  twitter: {
    ...defaultMetadata.twitter,
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
