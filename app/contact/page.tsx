import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'
import ContactList from './list'
import { SocialMediaList } from './social'

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

export default function ContactPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col py-20 laptop:pb-56">
        <ContactList />
        <SocialMediaList />
      </section>
    </div>
  )
}
