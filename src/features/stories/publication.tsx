'use client'

import * as React from 'react'
import { PublicationItem } from './publication-item'
import { useQuery } from '@tanstack/react-query'
import * as storiesService from './stories-service'

export function PublicationSection(): React.ReactElement {
  const { data } = useQuery({
    queryKey: ['publications'],
    queryFn: storiesService.getPublications,
  })

  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-lg font-medium">Publications:</h3>

      <div className="grid grid-cols-2 tablet:grid-cols-3 gap-2 w-full">
        {data &&
          data.map((pub, index) => (
            <PublicationItem publication={pub} key={index} />
          ))}
      </div>
    </section>
  )
}
