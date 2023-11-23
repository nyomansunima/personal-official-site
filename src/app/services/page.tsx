import ContactSection from '../contact/contact-section'
import ServiceIntroSection from './service-intro-section'
import ServiceListSection from './service-list-section'
import ServiceProcessSection from './service-process-section'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/lib/shared-metadata'

export const metadata: Metadata = {
  title: 'Services | Nyoman Sunima',
  description: 'Explore my expertise and service offer',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Services | Nyoman Sunima',
    description: 'Explore my expertise and service offer',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Services | Nyoman Sunima',
    description: 'Explore my expertise and service offer',
  },
}

export default function ServicesPage() {
  return (
    <main className="flex flex-col laptop:py-28 pt-32 laptop:pb-80 pb-40 text-xl laptop:gap-80 gap-32">
      <ServiceIntroSection />
      <ServiceListSection />
      <ServiceProcessSection />
      <ContactSection />
    </main>
  )
}
