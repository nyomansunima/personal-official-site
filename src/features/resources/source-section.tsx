import * as React from 'react'
import { SourceGroup, SourceGroupData } from './source-group'
import resourcesData from './resources-data.json'

const resources = resourcesData.sources as SourceGroupData[]

export function SourcesSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-20">
        {resources.map((group, index) => (
          <SourceGroup group={group} key={index} />
        ))}
      </div>
    </section>
  )
}
