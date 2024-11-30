import * as React from 'react'
import * as journeyService from './journey-service'
import { LogGroup } from './log-group'

const logs = await journeyService.getLogs()

export function LogListSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col w-full laptop:w-10/12 mx-auto gap-14">
        {logs.map((group, groupIndex) => (
          <LogGroup group={group} key={groupIndex} />
        ))}
      </div>
    </section>
  )
}
