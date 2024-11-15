import * as React from 'react'
import jsonData from '../data.json'
import { LogGroup, LogGroupData } from './log-group'

const logGroups = jsonData.logs.reverse() as LogGroupData[]

export function LogListSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col w-full laptop:w-10/12 mx-auto gap-14">
        {logGroups.map((group, groupIndex) => (
          <LogGroup group={group} key={groupIndex} />
        ))}
      </div>
    </section>
  )
}
