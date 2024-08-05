import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '../shared-metadata'
import { DetailSection } from './detail'
import { ActivitySection } from './activity'
import { TimelineSection } from './timeline'
import { CTASection } from './cta'

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
    <div className="px-5 laptop:px-0 container mx-auto">
      <DetailSection />
      <ActivitySection />
      <TimelineSection />
      <CTASection />
    </div>
  )
}
