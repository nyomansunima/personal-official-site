'use client'

import * as React from 'react'
import * as journeyService from './journey-service'
import { useQuery } from '@tanstack/react-query'
import { LogGroup } from './log-group'

export function LogListSection(): React.ReactElement {
  const { data, isSuccess } = useQuery({
    queryKey: ['logs'],
    queryFn: journeyService.getLogs,
  })

  return (
    <section className="flex flex-col">
      <div className="flex flex-col w-full laptop:w-10/12 mx-auto gap-14">
        {data &&
          data.map((group, groupIndex) => (
            <LogGroup group={group} key={groupIndex} />
          ))}
      </div>
    </section>
  )
}
