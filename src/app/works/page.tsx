import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/lib/shared-metadata'
import WorksIntroSection from './components/works-intro-section'
import WorksListSection from './components/works-list-section'

export const metadata: Metadata = {
  title: 'Design, development & indie hacking works | Nyoman Sunima',
  description: 'My works and all of the playground',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Design, development & indie hacking works | Nyoman Sunima',
    description: 'My works and all of the playground',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Design, development & indie hacking works | Nyoman Sunima',
    description: 'My works and all of the playground',
  },
}

export default function WorksPage() {
  return (
    <main className="flex flex-col laptop:py-28 py-20">
      <WorksIntroSection />
      <WorksListSection />
    </main>
  )
}
