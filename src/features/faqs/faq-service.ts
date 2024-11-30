'use server'

import config from '@shared/libs/config'
import { githubDataClient, localDataClient } from '@shared/libs/connections'
import { FAQData } from './faq-item'

const filePath = '/faqs.json'
const isProduction = config.isProduction

export async function getFAQs(): Promise<FAQData[]> {
  let res: any
  if (isProduction) {
    res = await githubDataClient(filePath)
  } else {
    res = await localDataClient(filePath)
  }

  return res.faqs as FAQData[]
}
