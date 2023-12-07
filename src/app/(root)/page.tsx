import HomeLearnSection from './home-learn-section'
import HomeContactSection from './home-contact-section'
import HomeIntroSection from './home-intro-section'
import HomeProjectSection from './home-project-section'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/lib/shared-metadata'

export const metadata: Metadata = {
  title: 'Product Designer, Fullstack Developer & Indie Hacker | Nyoman Sunima',
  description:
    'Product Designer & developer focused to build application from scratch and turn into business',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title:
      'Product Designer, Fullstack Developer & Indie Hacker | Nyoman Sunima',
    description:
      'Product Designer & developer focused to build application from scratch and turn into business',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title:
      'Product Designer, Fullstack Developer & Indie Hacker | Nyoman Sunima',
    description:
      'Product Designer & developer focused to build application from scratch and turn into business',
  },
}

export default function HomePage() {
  return (
    <main className="flex flex-col pt-28 py-32 laptop:py-28 gap-28 laptop:gap-80">
      <HomeIntroSection />
      <HomeProjectSection />
      <HomeLearnSection />
      <HomeContactSection />
    </main>
  )
}
