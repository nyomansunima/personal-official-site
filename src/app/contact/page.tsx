import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '../shared-metadata'
import ContactList from './contact-list'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me right now, start your idea',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Contact',
    description: 'Get in touch with me right now, start your idea',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Contact',
    description: 'Get in touch with me right now, start your idea',
  },
}

export default function Contact() {
  return (
    <div className="container mx-auto">
      <section className="flex flex-col py-40 items-center">
        <h2 className="font-heading text-5xl text-center leading-tight font-medium">
          Have something in your <br />
          mind to realized?
        </h2>

        <ContactList />
      </section>
    </div>
  )
}
