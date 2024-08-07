import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'
import ContactList from './list'

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
    <div className="px-5 laptop:px-0 container mx-auto">
      <div className="flex flex-col py-20 laptop:py-36 items-center">
        <h1 className="text-2xl laptop:text-3xl text-center !leading-tight font-medium">
          Contact
        </h1>

        <ContactList />
      </div>
    </div>
  )
}
