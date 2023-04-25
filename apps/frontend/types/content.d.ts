export interface ArticlePost {
  title: string
  coverImage: string
  slug: string
  type: string
}

export interface ExplorationDetail {
  slug: string
  title: string
  thumbnail: string
  abouts: string[]
  actions: { label: string; url: string }[]
  stacks: { image: string; title: string; url: string }[]
  content: any
  nextExploration?: {
    slug: string
    title: string
  }
}
