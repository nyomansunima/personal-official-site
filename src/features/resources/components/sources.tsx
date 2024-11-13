import * as React from 'react'
import { SourceData, SourceItem } from './source-item'
import jsonData from '../data.json'

// Predefined publication
// can be modified to update the content
const sources: SourceData[] = jsonData.sources as SourceData[]

export function SourcesSection(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 gap-2 tablet:gap-3 w-full">
        {sources.map((sou, index) => (
          <SourceItem source={sou} key={index} />
        ))}
      </div>
    </div>
  )
}
