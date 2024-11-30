'use server'

import config from '@shared/libs/config'
import { ContactItemData } from './contact-item'
import { githubDataClient, localDataClient } from '@shared/libs/connections'
import { SocialData } from './social-item'

const filePath = '/contact.json'
const isProduction = config.isProduction

export async function getContacts(): Promise<ContactItemData[]> {
  let res: any
  if (isProduction) {
    res = await githubDataClient(filePath)
  } else {
    res = await localDataClient(filePath)
  }

  return res.contacts as ContactItemData[]
}

export async function getSocials(): Promise<SocialData[]> {
  let res: any
  if (isProduction) {
    res = await githubDataClient(filePath)
  } else {
    res = await localDataClient(filePath)
  }

  return res.socials as SocialData[]
}
