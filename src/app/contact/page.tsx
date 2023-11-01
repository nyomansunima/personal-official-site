import ContactIntroSection from './components/contact-intro-section'
import ContactSocialSection from './components/contact-social-section'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/lib/shared-metadata'

export const metadata: Metadata = {
  title: 'Get in Touch | Nyoman Sunima',
  description: 'Get in touch with me and collaborate',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Get in Touch | Nyoman Sunima',
    description: 'Get in touch with me and collaborate',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Get in Touch | Nyoman Sunima',
    description: 'Get in touch with me and collaborate',
  },
}

export default function ContactPage() {
  return (
    <main className="flex flex-col laptop:py-28 py-32">
      <ContactIntroSection />
      <ContactSocialSection />
    </main>
  )
}
