import * as React from 'react'
import { Metadata } from 'next'
import * as defaultMetadata from '@shared/libs/shared-metadata'

export const metadata: Metadata = {
  title: 'Works',
  description:
    'See all of my works including projects, apps, products, case studies, idea and playground',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Works',
    description:
      'See all of my works including projects, apps, products, case studies, idea and playground',
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: 'Works',
    description:
      'See all of my works including projects, apps, products, case studies, idea and playground',
  },
}

export default function WorksDetailPage(): React.ReactElement {
  return <div className="flex flex-col gap-20 tablet:gap-36"></div>
}
