'use server'

import config from '@shared/libs/config'
import { ContactItemData } from './contact-item'
import { githubDataClient, localDataClient } from '@shared/libs/connections'
import { SocialData } from './social-item'

export async function getContacts(): Promise<ContactItemData[]> {
  const filename = 'contact.json'
  const isProduction = config.isProduction

  let res: any
  if (isProduction) {
    res = await githubDataClient(filename)
  } else {
    res = await localDataClient(filename)
  }

  return res.contacts as ContactItemData[]
}

export async function getSocials(): Promise<SocialData[]> {
  const filename = 'contact.json'
  const isProduction = config.isProduction

  let res: any
  if (isProduction) {
    res = await githubDataClient(filename)
  } else {
    res = await localDataClient(filename)
  }

  return res.socials as SocialData[]
}
