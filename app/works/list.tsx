import * as React from 'react'
import { WorkData, WorkItem } from './item'
import jsonData from './data.json'

const works = jsonData.works as WorkData[]

export function WorksListSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20">
      <div className="flex flex-col gap-20 laptop:gap-36">
        {works.map((work, i) => (
          <WorkItem work={work} key={i} />
        ))}
      </div>
    </section>
  )
}
