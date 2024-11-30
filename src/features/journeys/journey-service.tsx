'use server'

import config from '@shared/libs/config'
import { githubDataClient, localDataClient } from '@shared/libs/connections'
import { LogGroupData } from './log-group'

const filePath = '/journeys.json'
const isProduction = config.isProduction

export async function getExperiences(): Promise<any[]> {
  let res: any
  if (isProduction) {
    res = await githubDataClient(filePath)
  } else {
    res = await localDataClient(filePath)
  }

  return [...res.experiences].reverse() as any[]
}

export async function getLogs(): Promise<LogGroupData[]> {
  let res: any
  if (isProduction) {
    res = await githubDataClient(filePath)
  } else {
    res = await localDataClient(filePath)
  }

  return [...res.logs].reverse() as LogGroupData[]
}
