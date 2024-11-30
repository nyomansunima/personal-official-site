import * as React from 'react'
import { WorkItem } from './work-item'
import * as workService from './work-service'

const works = await workService.getWorks()

export function WorksListSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-20 tablet:gap-36">
        {works.map((work, i) => (
          <WorkItem work={work} key={i} />
        ))}
      </div>
    </section>
  )
}
