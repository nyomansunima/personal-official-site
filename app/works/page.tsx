import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'
import { WorksListSection } from './list'
import { ComingSoonSection } from './coming-soon'

export const metadata: Metadata = {
  title: 'Works',
  description:
    'See all of my works including projects, apps, products, case studies, idea and playground',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Works',
    description:
      'See all of my works including projects, apps, products, case studies, idea and playground',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Works',
    description:
      'See all of my works including projects, apps, products, case studies, idea and playground',
  },
}

export default function WorksPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <WorksListSection />
      <ComingSoonSection />
    </div>
  )
}
