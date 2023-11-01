import AboutActivitySection from './components/about-activity-section'
import AboutCareerSection from './components/about-career-section'
import AboutContactSection from './components/about-contact-section'
import AboutIntroSection from './components/about-intro-section'
import AboutProfileSection from './components/about-profile-section'
import AboutTimelineSection from './components/about-timeline-section'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/lib/shared-metadata'

export const metadata: Metadata = {
  title: 'About | Nyoman Sunima',
  description: 'Fullstack develper & Product designer',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'About | Nyoman Sunima',
    description: 'Fullstack develper & Product designer',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'About | Nyoman Sunima',
    description: 'Fullstack develper & Product designer',
  },
}

export default function AboutPage() {
  return (
    <main className="flex flex-col py-28 pb-80 gap-40 laptop:gap-80">
      <AboutIntroSection />
      <AboutProfileSection />
      <AboutActivitySection />
      <AboutTimelineSection />
      <AboutCareerSection />
      <AboutContactSection />
    </main>
  )
}
