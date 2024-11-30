import * as React from 'react'
import { SourceGroup } from './source-group'
import * as resourceService from './resource-service'

const resources = await resourceService.getResources()

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
