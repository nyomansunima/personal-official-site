import * as React from 'react'
import { Metadata } from 'next'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import { ContactList, SocialMediaList } from '@features/contact'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me right now, start your idea',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Contact',
    description: 'Get in touch with me right now, start your idea',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Contact',
    description: 'Get in touch with me right now, start your idea',
  },
}

export default function ContactPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <ContactList />
      <SocialMediaList />
    </div>
  )
}
