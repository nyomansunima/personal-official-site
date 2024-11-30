import * as React from 'react'
import { CraftItem } from './craft-item'
import * as craftService from './craft-service'

const crafts = await craftService.getCrafts()

export function CraftListSection(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 tablet:grid-cols-2 w-full gap-2 tablet:gap-3">
        {crafts.map((craft, i) => (
          <CraftItem craft={craft} key={i} />
        ))}
      </div>
    </div>
  )
}
