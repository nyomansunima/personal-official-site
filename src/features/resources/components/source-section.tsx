import * as React from 'react'
import jsonData from '../data.json'
import { SourceGroup, SourceGroupData } from './source-group'

const sourceGroups: SourceGroupData[] = jsonData.sources as SourceGroupData[]

export function SourcesSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-20">
        {sourceGroups.map((group, index) => (
          <SourceGroup group={group} key={index} />
        ))}
      </div>
    </section>
  )
}
