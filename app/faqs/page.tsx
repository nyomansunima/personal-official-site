import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '../shared-metadata'
import { FAQListSection } from './list'
import { AskSection } from './ask-section'

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Most asked questions by people around the world',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'FAQs',
    description: 'Most asked questions by people around the world',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'FAQs',
    description: 'Most asked questions by people around the world',
  },
}

export default function FAQsPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <FAQListSection />
      <AskSection />
    </div>
  )
}
