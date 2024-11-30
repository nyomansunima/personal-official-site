'use server'

import config from '@shared/libs/config'
import { githubDataClient, localDataClient } from '@shared/libs/connections'
import { BioItemData } from './bio-item'

const filePath = '/bio.json'
const isProduction = config.isProduction

export async function getBioLinks(): Promise<BioItemData[]> {
  let res: any
  if (isProduction) {
    res = await githubDataClient(filePath)
  } else {
    res = await localDataClient(filePath)
  }

  return res.links as BioItemData[]
}
