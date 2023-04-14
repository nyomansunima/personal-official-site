import { ArticlePost } from './content'
import { Inspiration } from './inspiration'

export interface HomeDetail {
  inspirations: Inspiration[]
  blogPosts: ArticlePost[]
}
