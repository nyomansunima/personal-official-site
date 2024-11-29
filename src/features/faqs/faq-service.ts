'use server'

import config from '@shared/libs/config'
import { githubDataClient, localDataClient } from '@shared/libs/connections'
import { FAQData } from './faq-item'

export async function getFAQs(): Promise<FAQData[]> {
  const filename = 'faqs.json'
  const isProduction = config.isProduction

  let res: any
  if (isProduction) {
    res = await githubDataClient(filename)
  } else {
    res = await localDataClient(filename)
  }

  return res.faqs as FAQData[]
}
