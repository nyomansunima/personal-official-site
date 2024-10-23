import * as React from 'react'
import jsonData from './data.json'
import { PublicationData, PublicationItem } from './publication-item'

// Predefined publication
// can be modified to update the content
const publications: PublicationData[] =
  jsonData.publications as PublicationData[]

export function PublicationSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20">
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 gap-2 tablet:gap-3 w-full">
        {publications.map((pub, index) => (
          <PublicationItem publication={pub} key={index} />
        ))}
      </div>
    </section>
  )
}
