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
