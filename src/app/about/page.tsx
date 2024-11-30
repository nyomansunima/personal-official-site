import * as React from 'react'
import { Metadata } from 'next'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import {
  DetailSection,
  SharingSection,
  ActivitySection,
  IndieSection,
  AchievementSection,
  EndWordSection,
} from '@features/about'
import { ArticleContent } from '@shared/components/common/content'

export const metadata: Metadata = {
  title: 'About',
  description: 'The whole story about me, nyoman sunima and all of the journey',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'About',
    description:
      'The whole story about me, nyoman sunima and all of the journey',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'About',
    description:
      'The whole story about me, nyoman sunima and all of the journey',
  },
}

export default function AboutPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <ArticleContent>
        <DetailSection />
        <ActivitySection />
        <SharingSection />
        <IndieSection />
        <AchievementSection />
        <EndWordSection />
      </ArticleContent>
    </div>
  )
}
