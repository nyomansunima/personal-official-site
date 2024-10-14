import * as React from 'react'
import { ChangelogItem, ChangelogItemData } from './item'
import jsonData from './data.json'

const logs = jsonData.logs.reverse() as ChangelogItemData[]

export function ChangelogListSection(): React.ReactElement {
  return (
    <section className="flex flex-col py-20 laptop:pb-56">
      <div className="flex flex-col w-full laptop:w-10/12 mx-auto gap-2">
        {logs.map((log, i) => (
          <ChangelogItem log={log} key={i} />
        ))}
      </div>
    </section>
  )
}
