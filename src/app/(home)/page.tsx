import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '../shared-metadata'

export const metadata: Metadata = {
  title: 'Nyoman Sunima',
  description:
    'Focused on crafting digital products, website, web app, mobile app to help business.',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Nyoman Sunima',
    description:
      'Focused on crafting digital products, website, web app, mobile app to help business.',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Nyoman Sunima',
    description:
      'Focused on crafting digital products, website, web app, mobile app to help business.',
  },
}

export default function HomePage() {
  return (
    <div className="flex flex-col pt-28 py-32 laptop:py-28 gap-28 laptop:gap-80"></div>
  )
}
