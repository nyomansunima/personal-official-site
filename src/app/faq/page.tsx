import ContactSection from '../contact/components/contact-section'
import FaqIntroSection from './components/faq-intro-section'
import FaqListSection from './components/faq-list-section'
import { type Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/lib/shared-metadata'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Something help for you from other people questions',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Frequently Asked Questions',
    description: 'Something help for you from other people questions',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Frequently Asked Questions',
    description: 'Something help for you from other people questions',
  },
}

export default function FaqPage() {
  return (
    <main className="flex flex-col py-20 laptop:py-28 gap-40 laptop:gap-80">
      <FaqIntroSection />
      <FaqListSection />
      <ContactSection />
    </main>
  )
}
