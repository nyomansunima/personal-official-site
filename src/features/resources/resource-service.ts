'use server'

import config from '@shared/libs/config'
import { githubDataClient, localDataClient } from '@shared/libs/connections'
import { SourceGroupData } from './source-group'

export async function getResources(): Promise<SourceGroupData[]> {
  const filename = 'resources.json'
  const isProduction = config.isProduction

  let res: any
  if (isProduction) {
    res = await githubDataClient(filename)
  } else {
    res = await localDataClient(filename)
  }

  return res.sources as SourceGroupData[]
}
