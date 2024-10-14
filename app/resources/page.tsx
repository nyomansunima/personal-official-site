import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'
import { SourcesSection } from './sources'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Get free resources and things that help your works',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Resources',
    description: 'Get free resources and things that help your works',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Resources',
    description: 'Get free resources and things that help your works',
  },
}

export default function ResourcesPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <SourcesSection />
    </div>
  )
}
