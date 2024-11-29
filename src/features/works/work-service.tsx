'use server'

import config from '@shared/libs/config'
import { githubDataClient, localDataClient } from '@shared/libs/connections'
import { WorkData } from './item'

export async function getWorks(): Promise<WorkData[]> {
  const filename = 'works.json'
  const isProduction = config.isProduction

  let res: any
  if (isProduction) {
    res = await githubDataClient(filename)
  } else {
    res = await localDataClient(filename)
  }

  return res.works as WorkData[]
}
