export interface BlogPost {
  slug: string
  title: string
  thumbnail: string
  tag: string
  featured: string
  _createdAt: string
}

export interface BlogDetail {
  post: {
    slug: string
    title: string
    desc: string
    thumbnail: string
    tags: string[]
    featured: string
    content: string
    _createdAt: string
  }
  related: BlogPost[]
}
