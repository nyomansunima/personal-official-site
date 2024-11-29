'use client'

import * as React from 'react'
import { SourceGroup, SourceGroupData } from './source-group'
import { useQuery } from '@tanstack/react-query'
import * as resourceService from './resource-service'

export function SourcesSection(): React.ReactElement {
  const { isSuccess, data } = useQuery({
    queryKey: ['resources'],
    queryFn: resourceService.getResources,
  })

  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-20">
        {isSuccess &&
          data &&
          data.map((group, index) => <SourceGroup group={group} key={index} />)}
      </div>
    </section>
  )
}
