import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'
import { CraftListSection } from './list'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'See all of my projects, business, products, side husltes and something that i built',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Projects',
    description:
      'See all of my projects, business, products, side husltes and something that i built',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Project',
    description:
      'See all of my projects, business, products, side husltes and something that i built',
  },
}

export default function ProjectsPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <CraftListSection />
    </div>
  )
}
