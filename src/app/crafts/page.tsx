import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '@shared/lib/shared-metadata'
import { CraftListSection } from '@features/crafts'

export const metadata: Metadata = {
  title: 'Crafts',
  description:
    'See all of my projects, business, products, side husltes and something that i built',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Crafts',
    description:
      'See all of my projects, business, products, side husltes and something that i built',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Crafts',
    description:
      'See all of my projects, business, products, side husltes and something that i built',
  },
}

export default function CraftsPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <CraftListSection />
    </div>
  )
}
