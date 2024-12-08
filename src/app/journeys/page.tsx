import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import { ExperienceSection, LogListSection } from '@features/journeys'

export const metadata: Metadata = {
  title: 'Journeys',
  description: 'The whole story of me, nyoman sunima and all of the journey',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Journeys',
    description: 'The whole story of me, nyoman sunima and all of the journey',
  },
  twitter: {
    ...sharedMetadata.twitter,
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
