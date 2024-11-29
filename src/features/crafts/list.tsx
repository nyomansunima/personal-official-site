'use client'

import * as React from 'react'
import { CraftData, CraftItem } from './item'
import { useQuery } from '@tanstack/react-query'
import * as craftService from './craft-service'

export function CraftListSection(): React.ReactElement {
  const { data, isSuccess } = useQuery({
    queryKey: ['crafts'],
    queryFn: craftService.getCrafts,
  })

  return (
    <>
      {isSuccess && data && (
        <div className="flex flex-col">
          <div className="grid grid-cols-1 tablet:grid-cols-2 w-full gap-2 tablet:gap-3">
            {data.map((craft, i) => (
              <CraftItem craft={craft} key={i} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
