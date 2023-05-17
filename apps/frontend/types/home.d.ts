import { ArticlePost, BlogPostItem, Exploration } from './content'
import { Inspiration } from './inspiration'

export interface HomeDetail {
  inspirations: Inspiration[]
  blogPosts: BlogPostItem[]
  explorations: Exploration[]
  stories: {
    accentColor: string
    title: string
    url: string
  }[]
}
