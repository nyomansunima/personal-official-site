import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'

export const metadata: Metadata = {
  title: 'Works',
  description:
    'See all of my works including projects, apps, products, case studies, idea and playground',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Works',
    description:
      'See all of my works including projects, apps, products, case studies, idea and playground',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Works',
    description:
      'See all of my works including projects, apps, products, case studies, idea and playground',
  },
}

export default function ResourcesPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col">
        <p className="text-foreground !leading-relaxed laptop:w-10/12">
          All of my works in my careers and something that i crafted to public.
          See everything including projects, apps, products, case studies, idea
          and playground.
        </p>
      </section>
    </div>
  )
}
