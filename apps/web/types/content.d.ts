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

export interface Timeline {
  timeline: string
  image: string
  url: string
  title: string
  desc: string
  isStory: boolean
}

export interface AboutDetail {
  stories: {
    url: string
    title: string
  }[]
  timelines: Timeline[]
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

export interface Faq {
  question: string
  answer: string
}

export interface App {
  thumbnail: string
  title: string
  tagline: string
  url: string
}

export interface ProductDetail {
  slug: string
  title: string
  images: string[]
  tags: string[]
  initialPrice: number
  desc: string
  highlights: {
    property: string
    value: string
  }[]
  contexts: {
    title: string
    url: string
  }[]
  about: string
}

interface Product {
  title: string
  thumbnail: string
  slug: string
  initialPrice: number
}
