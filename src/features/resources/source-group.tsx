import * as React from 'react'
import { SourceData, SourceItem } from './source-item'

export interface SourceGroupData {
  title: string
  list: SourceData[]
}

interface SourceGroupProps {
  group: SourceGroupData
}

export function SourceGroup({ group }: SourceGroupProps): React.ReactElement {
  const { title, list } = group

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-medium">{title}</h3>

      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-2 tablet:gap-3 w-full">
        {list.map((sou, index) => (
          <SourceItem source={sou} key={index} />
        ))}
      </div>
    </div>
  )
}
