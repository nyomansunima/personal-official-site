import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '../shared-metadata'
import { HeroSection } from './hero'
import { NewsletterSection } from './newsletter'
import { CTASection } from './cta'

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
    <div className="px-5 laptop:px-0 container mx-auto">
      <HeroSection />
      <NewsletterSection />
      <CTASection />
    </div>
  )
}