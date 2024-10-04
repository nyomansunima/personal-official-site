import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'
import { DetailSection } from './detail'
import { ActivitySection } from './activity'
import { TimelineSection } from './timeline'
import { SharingSection } from './sharing'

export const metadata: Metadata = {
  title: 'About',
  description: 'The whole story about me, nyoman sunima and all of the journey',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'About',
    description:
      'The whole story about me, nyoman sunima and all of the journey',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'About',
    description:
      'The whole story about me, nyoman sunima and all of the journey',
  },
}

export default function AboutPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <DetailSection />
      <ActivitySection />
      <SharingSection />
      <TimelineSection />
    </div>
  )
}
