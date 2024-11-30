'use server'

import config from '@shared/libs/config'
import { githubDataClient, localDataClient } from '@shared/libs/connections'
import { WorkData } from './work-item'
import { evaluate } from 'next-mdx-remote-client/rsc'

interface WorkDocMetadata {
  title: string
  description: string
  image: string
  roles: string[]
  responsibilities: string[]
  teams: string[]
  client?: string
  industry: string
  outcomes: string[]
  duration: string
  date: string
}

type WorkMetadata = Pick<
  WorkDocMetadata,
  'title' | 'description' | 'image'
> & {}

type WorkDetail = {
  meta: WorkDocMetadata
  content: any
}

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

export async function getWork(slug: string): Promise<WorkDetail> {
  const urlPath = `/works/${slug}.mdx`
  let res: any

  if (isProduction) {
    res = await githubDataClient(urlPath, { parser: 'text' })
  } else {
    res = await localDataClient(urlPath, { parser: 'text' })
  }

  const { frontmatter: meta } = await evaluate<any>({
    source: res,
    options: {
      parseFrontmatter: true,
    },
  })

  return {
    meta,
    content: res,
  }
}

export async function getWorkMetadata(slug: string): Promise<WorkMetadata> {
  const urlPath = `/works/${slug}.mdx`
  let res: any

  if (isProduction) {
    res = await githubDataClient(urlPath, { parser: 'text' })
  } else {
    res = await localDataClient(urlPath, { parser: 'text' })
  }

  const { frontmatter: meta } = await evaluate<any>({
    source: res,
    options: {
      parseFrontmatter: true,
    },
  })

  return {
    title: meta.title,
    description: meta.description,
    image: meta.image,
  }
}
