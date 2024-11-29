'use client'

import * as React from 'react'
import { WorkItem } from './item'
import { useQuery } from '@tanstack/react-query'
import * as workService from './work-service'

export function WorksListSection(): React.ReactElement {
  const { isSuccess, data } = useQuery({
    queryKey: ['works'],
    queryFn: workService.getWorks,
  })

  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-20 tablet:gap-36">
        {isSuccess &&
          data &&
          data.map((work, i) => <WorkItem work={work} key={i} />)}
      </div>
    </section>
  )
}
