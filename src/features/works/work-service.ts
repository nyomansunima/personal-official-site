'use server'

import fs from 'fs/promises'
import path from 'path'
import { evaluate } from 'next-mdx-remote-client/rsc'
import * as React from 'react'
import { ContentImage } from '@shared/components/common/content'

const WORK_CONTENT_PATH = '/src/features/works/contents'

type WorkFrontMatter = {
  title: string
  description: string
  image: string
  date: string
  tags: string[]
  client: string
  clientUrl: string
  industry: string[]
  services: string[]
  results: string[]
}

type WorkMetadata = Pick<WorkFrontMatter, 'title' | 'description' | 'image'>

type WorkDetail = {
  meta: WorkFrontMatter
  content: React.ReactElement
}

export async function getWorkMetadata(slug: string): Promise<WorkMetadata> {
  const workPath = path.join(process.cwd(), WORK_CONTENT_PATH, `${slug}.md`)
  const file = await fs.readFile(workPath, 'utf-8')
  const { frontmatter: meta } = await evaluate<WorkFrontMatter>({
    source: file,
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

export async function getWorkDetail(slug: string): Promise<WorkDetail> {
  const workPath = path.join(process.cwd(), WORK_CONTENT_PATH, `${slug}.md`)
  const file = await fs.readFile(workPath, 'utf-8')
  const { frontmatter: meta, content } = await evaluate<WorkFrontMatter>({
    source: file,
    options: {
      parseFrontmatter: true,
    },
    components: {
      img: ContentImage,
    },
  })

  return {
    meta,
    content,
  }
}

export async function getWorkPaths(): Promise<string[]> {
  const workDirPath = path.join(process.cwd(), WORK_CONTENT_PATH)
  const files = await fs.readdir(workDirPath)

  const slugs = files
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.(mdx|md)$/, '')
      return slug
    }) as string[]

  return slugs
}
