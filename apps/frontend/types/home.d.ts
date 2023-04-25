import { ArticlePost, Exploration } from './content'
import { Inspiration } from './inspiration'

export interface HomeDetail {
  inspirations: Inspiration[]
  blogPosts: ArticlePost[]
  explorations: Exploration[]
}
