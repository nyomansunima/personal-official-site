import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'
import { AboutSection } from './about'
import { ResourcesSection } from './resources'

export const metadata: Metadata = {
  title: 'Bio',
  description:
    'See and explore the latest things, moment, and resources shared into my world.',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Bio',
    description:
      'See and explore the latest things, moment, and resources shared into my world.',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Bio',
    description:
      'See and explore the latest things, moment, and resources shared into my world.',
  },
}

export default function SpeaksPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <AboutSection />
      <ResourcesSection />
    </div>
  )
}
