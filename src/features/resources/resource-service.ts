'use server'

import config from '@shared/libs/config'
import { githubDataClient, localDataClient } from '@shared/libs/connections'
import { SourceGroupData } from './source-group'

const isProduction = config.isProduction
const filePath = '/resources.json'

export async function getResources(): Promise<SourceGroupData[]> {
  let res: any
  if (isProduction) {
    res = await githubDataClient(filePath)
  } else {
    res = await localDataClient(filePath)
  }

  return res.sources as SourceGroupData[]
}
