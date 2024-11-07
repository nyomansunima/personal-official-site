import * as React from 'react'
import { CraftData, CraftItem } from './item'
import jsonData from './data.json'

const crafts = jsonData.crafts as CraftData[]

export function CraftListSection(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 tablet:grid-cols-2 w-full gap-y-2 gap-x-3">
        {crafts.map((craft, i) => (
          <CraftItem craft={craft} key={i} />
        ))}
      </div>
    </div>
  )
}
