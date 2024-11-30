import * as React from 'react'
import { RecentItem } from './recent-item'
import * as storiesService from './stories-service'

const recents = await storiesService.getRecents()

export function RecentlySection(): React.ReactElement {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-lg font-medium">Recent stories:</h3>

      <div className="flex flex-col gap-2">
        {recents.map((recent, i) => (
          <RecentItem recent={recent} key={i} />
        ))}
      </div>
    </section>
  )
}