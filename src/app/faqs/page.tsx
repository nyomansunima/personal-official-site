import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '../shared-metadata'
import FAQList from './faq-list'
import { Button } from '~/components/ui/button'
import Link from 'next/link'

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

export default function FAQs() {
  return (
    <div className="container mx-auto">
      <section className="flex flex-col py-40 items-center">
        <h2 className="font-heading text-5xl text-center leading-tight font-medium w-7/12">
          Most asked questions by people around the world
        </h2>

        <FAQList />
      </section>
      <section className="flex flex-col py-40 items-center">
        <h2 className="font-heading text-5xl text-center leading-tight font-medium w-6/12">
          Still confused & have a thing in your mind?
        </h2>

        <p className="mt-7 text-lg leading-relaxed text-center opacity-60 w-5/12">
          Feeling stuck with a nagging problem or idea that just won't go away?
          Don't let that confusion linger any longer. Take the first step and
          contact me now.
        </p>

        <div className="flex justify-center mt-16">
          <Button variant={'secondary'} size={'lg'} asChild>
            <Link href={'/contact'}>Connect now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
