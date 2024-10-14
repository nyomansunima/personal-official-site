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

export default function SharingPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <PublicationSection />
      <RecentlySection />
    </div>
  )
}
