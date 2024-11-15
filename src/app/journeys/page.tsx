import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '@shared/lib/shared-metadata'
import { ExperienceSection, LogListSection } from '@features/journeys'

export const metadata: Metadata = {
  title: 'Journeys',
  description: 'The whole story of me, nyoman sunima and all of the journey',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Journeys',
    description: 'The whole story of me, nyoman sunima and all of the journey',
  },
  twitter: {
    ...defaultTwitterMetadata,
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
