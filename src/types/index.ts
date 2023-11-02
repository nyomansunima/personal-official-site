import { boolean } from 'zod'

export type FAQ = {
  question: string
  answer: string
}

export type Timeline = {
  title: string
  desc: string
  date: string
}

export type Career = {
  timeline: string
  company: string
  role: string
  type: string
}

export type Post = {
  image: string
  title: string
  tags: string[]
  slug: string
  publishedAt: string
  totalViews: number
  readTimeInMinutes: number
  reactionCount: number
}

export type PaginatedBlogPost = {
  posts: Post[]
  pageInfo: {
    hasNextPage: boolean
    endCursor: string
  }
}

export type PostMetadata = {
  title: string
  desc: string
  image: string
}

export type PostDetail = {
  title: string
  subtitle: string
  image: string
  tags: string[]
  readTimeInMinutes: number
  views: number
  reactionCount: number
  publishedAt: string
  content: string
}

export type PostAuthor = {
  avatar: string
  name: string
  bio: string
}

export type LinkBio = {
  iconCode?: string
  title: string
  type: string
  url: string
  description?: string
  publishedAt: string
  image?: string
}

export type Work = {
  slug: string
  tags: string[]
  title: string
  type: string
  createdAt: string
  thumbnail: string
  status: string
}

export type WorkMeta = {
  title: string
  desc: string
  image: string
}

export type PaginatedWork = {
  works: Work[]
  pageInfo: {
    hasNextPage: boolean
    pageSize: number
    endCursor: string
  }
}
