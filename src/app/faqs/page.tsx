import * as React from 'react'
import { Metadata } from 'next'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import { FAQListSection, AskSection } from '@features/faqs'

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Most asked questions by people around the world',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'FAQs',
    description: 'Most asked questions by people around the world',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'FAQs',
    description: 'Most asked questions by people around the world',
  },
}

export default function FAQsPage(): React.ReactElement {
  return (
    <div className="flex flex-col gap-20 tablet:gap-36">
      <FAQListSection />
      <AskSection />
    </div>
  )
}
