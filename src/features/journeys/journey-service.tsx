'use server'

import config from '@shared/libs/config'
import { githubDataClient, localDataClient } from '@shared/libs/connections'
import { LogGroupData } from './log-group'

export async function getExperiences(): Promise<any[]> {
  const filename = 'journeys.json'
  const isProduction = config.isProduction

  let res: any
  if (isProduction) {
    res = await githubDataClient(filename)
  } else {
    res = await localDataClient(filename)
  }

  return [...res.experiences].reverse() as any[]
}

export async function getLogs(): Promise<LogGroupData[]> {
  const filename = 'journeys.json'
  const isProduction = config.isProduction

  let res: any
  if (isProduction) {
    res = await githubDataClient(filename)
  } else {
    res = await localDataClient(filename)
  }

  return res.logs as LogGroupData[]
}
