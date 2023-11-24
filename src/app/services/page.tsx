import ContactSection from '../contact/contact-section'
import ServiceDesignSection from './service-design-section'
import ServiceIntroSection from './service-intro-section'
import ServiceProcessSection from './service-process-section'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/lib/shared-metadata'
import ServiceWebsiteSection from './service-website-section'
import ServiceWebAppSection from './service-web-app-section'
import ServiceMobileSection from './service-mobile-section'
import ServiceToolsSection from './service-tools-section'

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
    <main className="flex flex-col text-xl">
      <ServiceIntroSection />
      <ServiceDesignSection />
      <ServiceWebsiteSection />
      <ServiceWebAppSection />
      <ServiceMobileSection />
      <ServiceProcessSection />
      <ServiceToolsSection />
      <ContactSection />
    </main>
  )
}
