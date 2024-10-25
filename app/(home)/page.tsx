import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'
import { HeroSection } from './hero'
import { ResourcesSection } from './resources'

export const metadata: Metadata = {
  title: 'Nyoman Sunima',
  description:
    'Focused on crafting digital products, website, web app, mobile app to help business.',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Nyoman Sunima',
    description:
      'Focused on crafting digital products, website, web app, mobile app to help business.',
  },
  twitter: {
    ...defaultTwitterMetadata,
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
