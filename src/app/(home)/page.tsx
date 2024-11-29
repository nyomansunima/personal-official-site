import * as React from 'react'
import { Metadata } from 'next'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import { ResourcesSection, HeroSection } from '@features/home'

export const metadata: Metadata = {
  title: 'Nyoman Sunima',
  description:
    'Focused on crafting digital products, website, web app, mobile app to help business.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Nyoman Sunima',
    description:
      'Focused on crafting digital products, website, web app, mobile app to help business.',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Nyoman Sunima',
    description:
      'Focused on crafting digital products, website, web app, mobile app to help business.',
  },
}

export default function HomePage(): React.ReactElement {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <ResourcesSection />
    </div>
  )
}
