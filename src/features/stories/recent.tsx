'use client'

import * as React from 'react'
import { RecentItem } from './recent-item'
import { useQuery } from '@tanstack/react-query'
import * as storiesService from './stories-service'

export function RecentlySection(): React.ReactElement {
  const { data } = useQuery({
    queryKey: ['recents'],
    queryFn: storiesService.getRecents,
  })

  return (
    <>
      {data && data.length > 0 && (
        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-medium">Recent stories:</h3>

          <div className="flex flex-col gap-2">
            {data.length > 0 &&
              data.map((recent, i) => <RecentItem recent={recent} key={i} />)}
          </div>
        </section>
      )}
    </>
  )
}
