import * as React from 'react'
import jsonData from '../data.json'
import { RecentData, RecentItem } from './recent-item'

// ** INFO: Limit this list into 5 items to keep it short and clean
const recents: RecentData[] = jsonData.recents as RecentData[]

export function RecentlySection(): React.ReactElement {
  return (
    <>
      {recents && recents.length > 0 && (
        <section className="flex flex-col">
          <span>Recently:</span>

          <div className="flex flex-col gap-2 mt-10">
            {recents.length > 0 &&
              recents.map((recent, i) => (
                <RecentItem recent={recent} key={i} />
              ))}
          </div>
        </section>
      )}
    </>
  )
}
