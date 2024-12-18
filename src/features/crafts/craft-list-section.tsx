import * as React from 'react'
import { CraftData, CraftItem } from './craft-item'
import craftsData from './crafts-data.json'

const crafts = craftsData.crafts as CraftData[]

export function CraftListSection(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-medium !leading-tight">
        Good products build with
        <br />
        feeling and heart.
      </h3>
      <div className="grid grid-cols-1 tablet:grid-cols-2 w-full gap-2 tablet:gap-3 mt-10">
        {crafts.map((craft, i) => (
          <CraftItem craft={craft} key={i} />
        ))}
      </div>
    </div>
  )
}
