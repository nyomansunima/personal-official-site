'use server'

import config from '@shared/libs/config'
import { githubDataClient, localDataClient } from '@shared/libs/connections'
import { WorkData } from './work-item'

const isProduction = config.isProduction
const filePath = '/works.json'

export async function getWorks(): Promise<WorkData[]> {
  let res: any
  if (isProduction) {
    res = await githubDataClient(filePath)
  } else {
    res = await localDataClient(filePath)
  }

  return res.works as WorkData[]
}
