import * as React from 'react'
import jsonData from '../data.json'
import { RecentData, RecentItem } from './recent-item'

const recents: RecentData[] = jsonData.recents as RecentData[]
const sortedRecents = [...recents].reverse()

export function RecentlySection(): React.ReactElement {
  return (
    <>
      {recents && recents.length > 0 && (
        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-medium">Recent stories:</h3>

          <div className="flex flex-col gap-2">
            {sortedRecents.length > 0 &&
              sortedRecents.map((recent, i) => (
                <RecentItem recent={recent} key={i} />
              ))}
          </div>
        </section>
      )}
    </>
  )
}
