import * as React from 'react'
import { WorkData, WorkItem } from './work-item'
import worksData from './works-data.json'

const works = [...worksData.works].reverse() as WorkData[]

export function WorksListSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-3 tablet:w-11/12 mx-auto">
        {works.map((work, i) => (
          <WorkItem work={work} key={i} />
        ))}
      </div>
    </section>
  )
}
