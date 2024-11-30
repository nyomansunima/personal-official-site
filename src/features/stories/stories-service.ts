'use server'

import config from '@shared/libs/config'
import { githubDataClient, localDataClient } from '@shared/libs/connections'
import { PublicationData } from './publication-item'
import { RecentData } from './recent-item'

const isProduction = config.isProduction
const filePath = '/stories.json'

export async function getPublications(): Promise<PublicationData[]> {
  let res: any
  if (isProduction) {
    res = await githubDataClient(filePath)
  } else {
    res = await localDataClient(filePath)
  }

  return res.publications as PublicationData[]
}

export async function getRecents(): Promise<RecentData[]> {
  let res: any
  if (isProduction) {
    res = await githubDataClient(filePath)
  } else {
    res = await localDataClient(filePath)
  }

  return [...res.recents].reverse() as RecentData[]
}
