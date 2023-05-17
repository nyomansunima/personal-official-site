export interface BioDetail {
  socials: { iconCode: string; url: string; name: string }[]
  links: { iconCode: string; url: string; label: string; customColor: string }[]
}

export interface RelatedBlogPost {
  title: string
  slug: string
  tag: string
  thumbnail: string
}

export interface BlogTag {
  iconCode: string
  title: string
  desc: string
}

export interface BlogPost {
  slug: string
  title: string
  desc: string
  thumbnail: string
  content: any
  tags: BlogTag[]
}

export interface BlogPostItem {
  title: string
  slug: string
  tag: string
  thumbnail: string
}

export interface ExplorationRepo {
  image: string
  title: string
  desc: string
  url: string
  source: string
}

export interface Exploration {
  slug: string
  title: string
  summary: string
  thumbnail: string
  repos: ExplorationRepo[]
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
