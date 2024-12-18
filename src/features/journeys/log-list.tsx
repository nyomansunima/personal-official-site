import * as React from 'react'
import { LogGroup, LogGroupData } from './log-group'
import journeysData from './journeys-data.json'

const logGroups = [...journeysData.logs].reverse() as LogGroupData[]

export function LogListSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col w-full tablet:w-11/12 mx-auto gap-14">
        {logGroups.map((group, groupIndex) => (
          <LogGroup group={group} key={groupIndex} />
        ))}
      </div>
    </section>
  )
}
