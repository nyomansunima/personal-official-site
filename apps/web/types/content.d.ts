export interface BlogPost {
  slug: string
  title: string
  thumbnail: string
  tag: string
  featured: string
  _createdAt: string
  isIncoming: boolean
}

export interface BlogDetail {
  post: {
    slug: string
    title: string
    desc: string
    canonical?: string
    thumbnail: string
    tags: string[]
    featured: string
    content: string
    _createdAt: string
  }
  related: BlogPost[]
}

export interface BioContent {
  avatar: string
  desc: string
  stats: {
    totalFollower: number
    totalSubscriber: number
  }
  socials: {
    label: string
    iconCode: string
    url: string
  }[]
  links: {
    label: string
    iconCode: string
    url: string
    customColor: string
  }[]
}

export interface AboutDetail {
  stories: {
    url: string
    title: string
  }[]
  timelines: {
    url: string
    title: string
    desc: string
  }[]
  contributions: {
    url: string
    title: string
    desc: string
    image: string
  }[]
}

export interface Project {
  slug: string
  thumbnail: string
  title: string
  desc: string
  tag: string
  isCommingSoon: boolean
}
