import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '@shared/lib/shared-metadata'
import { DetailSection, SharingSection, ActivitySection } from '@features/about'
import { ArticleContent } from '@shared/components/content'

export const metadata: Metadata = {
  title: 'About',
  description: 'The whole story about me, nyoman sunima and all of the journey',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'About',
    description:
      'The whole story about me, nyoman sunima and all of the journey',
  },
  twitter: {
    ...defaultTwitterMetadata,
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
      </ArticleContent>
    </div>
  )
}
