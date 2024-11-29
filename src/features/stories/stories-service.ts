'use server'

import config from '@shared/libs/config'
import { githubDataClient, localDataClient } from '@shared/libs/connections'
import { PublicationData } from './publication-item'
import { RecentData } from './recent-item'

export async function getPublications(): Promise<PublicationData[]> {
  const filename = 'stories.json'
  const isProduction = config.isProduction

  let res: any
  if (isProduction) {
    res = await githubDataClient(filename)
  } else {
    res = await localDataClient(filename)
  }

  return res.publications as PublicationData[]
}

export async function getRecents(): Promise<RecentData[]> {
  const filename = 'stories.json'
  const isProduction = config.isProduction

  let res: any
  if (isProduction) {
    res = await githubDataClient(filename)
  } else {
    res = await localDataClient(filename)
  }

  return [...res.recents].reverse() as RecentData[]
}
