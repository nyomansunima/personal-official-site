import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/lib/shared-metadata'
import BioIntroSection from './components/bio-intro-section'
import BioSocialSection from './components/bio-social-section'
import BioLinkSection from './components/bio-link-section'
import BioNewsletterSection from './components/bio-newsletter-section'

export const metadata: Metadata = {
  title:
    'Product Designer & Fullstack Developer specialized in crafting apps | Nyoman Sunima',
  description:
    'Product Designer & Fullstack Developer specialized in crafting apps',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title:
      'Product Designer & Fullstack Developer specialized in crafting apps | Nyoman Sunima',
    description:
      'Product Designer & Fullstack Developer specialized in crafting apps',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title:
      'Product Designer & Fullstack Developer specialized in crafting apps | Nyoman Sunima',
    description:
      'Product Designer & Fullstack Developer specialized in crafting apps',
  },
}

export default function BioPage() {
  return (
    <main className="flex flex-col laptop:py-28 py-20">
      <div className="container mx-auto laptop:w-1/2 px-5">
        <BioIntroSection />
        <BioSocialSection />
        <BioLinkSection />

        <div className="grid laptop:grid-cols-9 grid-cols-1 mt-20">
          <BioNewsletterSection />
        </div>
      </div>
    </main>
  )
}
