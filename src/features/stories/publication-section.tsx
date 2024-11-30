import * as React from 'react'
import { PublicationItem } from './publication-item'
import * as storiesService from './stories-service'

const publications = await storiesService.getPublications()

export function PublicationSection(): React.ReactElement {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-lg font-medium">Publications:</h3>

      <div className="grid grid-cols-2 tablet:grid-cols-3 gap-2 w-full">
        {publications.map((pub, index) => (
          <PublicationItem publication={pub} key={index} />
        ))}
      </div>
    </section>
  )
}
