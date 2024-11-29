'use server'

import config from '@shared/libs/config'
import type { CraftData } from './item'
import { githubDataClient, localDataClient } from '@shared/libs/connections'

export async function getCrafts(): Promise<CraftData[]> {
  const filename = 'crafts.json'
  const isProduction = config.isProduction

  let res: any
  if (isProduction) {
    res = await githubDataClient(filename)
  } else {
    res = await localDataClient(filename)
  }

  return res.crafts as CraftData[]
}
