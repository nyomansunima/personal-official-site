'use server'

import config from '@shared/libs/config'
import type { CraftData } from './craft-item'
import { githubDataClient, localDataClient } from '@shared/libs/connections'

const filePath = '/crafts.json'
const isProduction = config.isProduction

export async function getCrafts(): Promise<CraftData[]> {
  let res: any
  if (isProduction) {
    res = await githubDataClient(filePath)
  } else {
    res = await localDataClient(filePath)
  }

  return res.crafts as CraftData[]
}
