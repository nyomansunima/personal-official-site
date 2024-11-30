import { Metadata } from 'next'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import { ExperienceSection, LogListSection } from '@features/journeys'

export const metadata: Metadata = {
  title: 'Journeys',
  description: 'The whole story of me, nyoman sunima and all of the journey',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Journeys',
    description: 'The whole story of me, nyoman sunima and all of the journey',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Journeys',
    description: 'The whole story of me, nyoman sunima and all of the journey',
  },
}

export default function JourneysPage(): React.ReactElement {
  return (
    <div className="flex flex-col gap-20">
      <ExperienceSection />
      <LogListSection />
    </div>
  )
}
