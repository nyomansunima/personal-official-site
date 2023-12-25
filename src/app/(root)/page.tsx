import HomeLearnSection from './home-learn-section'
import HomeContactSection from './home-contact-section'
import HomeIntroSection from './home-intro-section'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/lib/shared-metadata'

export const metadata: Metadata = {
  title:
    'Product Designer, Fullstack Developer, Web design expert | Nyoman Sunima',
  description:
    'Focused on crafting digital products, website, web app, mobile app to help business.',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title:
      'Product Designer, Fullstack Developer, Web design expert | Nyoman Sunima',
    description:
      'Focused on crafting digital products, website, web app, mobile app to help business.',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title:
      'Product Designer, Fullstack Developer, Web design expert | Nyoman Sunima',
    description:
      'Focused on crafting digital products, website, web app, mobile app to help business.',
  },
}

export default function HomePage() {
  return (
    <main className="flex flex-col pt-28 py-32 laptop:py-28 gap-28 laptop:gap-80">
      <HomeIntroSection />
      <HomeLearnSection />
      <HomeContactSection />
    </main>
  )
}
