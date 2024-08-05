import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '../shared-metadata'
import { FAQList } from './list'
import { AskSection } from './ask-section'

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Most asked questions by people around the world',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'FAQs',
    description: 'Most asked questions by people around the world',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'FAQs',
    description: 'Most asked questions by people around the world',
  },
}

export default function FAQsPage() {
  return (
    <div className="px-5 laptop::px-0 container mx-auto">
      <section className="flex flex-col py-20 laptop:py-36 items-center">
        <h1 className="text-3xl laptop:text-4xl text-center !leading-tight font-medium">
          FAQs.
        </h1>

        <FAQList />
      </section>

      <AskSection />
    </div>
  )
}
