import * as React from 'react'
import { SupportData, SupportItem } from './support-item'
import data from './support-data.json'

const supports = data.supports as SupportData[]

export function SupportSection(): React.ReactElement {
  return (
    <section className="flex">
      <div className="flex flex-col">
        <h3 className="text-lg font-medium !leading-tight">
          Support me to create
          <br />
          good things.
        </h3>

        <div className="flex mt-10">
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-3">
            {supports.map((support, index) => (
              <SupportItem data={support} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
