import hashNodeClient from '@lib/connection/hashnode-connection'
import { ArticlePost } from '~/types/content'

class ContentService {
  async getBestWeekPosts(): Promise<ArticlePost[]> {
    const query = `{
      user(username: "nyomansunima") {
        publication {
          posts(page: 0) {
            title
            coverImage
            slug
            type
          }
        }
      }
    }
    `

    const res = await hashNodeClient.post('/', { query })

    return (res.data.user.publication.posts as any[]).slice(0, 6)
  }

  async getRecentPosts(): Promise<ArticlePost[]> {
    const query = `{
      user(username: "nyomansunima") {
        publication {
          posts(page: 0) {
            title
            coverImage
            slug
            type
          }
        }
      }
    }
    `

    const res = await hashNodeClient.post('/', {
      query,
    })

    return (res.data.user.publication.posts as any[]).slice(0, 10)
  }

  async getAllPosts(): Promise<ArticlePost[]> {
    const query = `{
      user(username: "nyomansunima") {
        publication {
          posts(page: 0) {
            title
            coverImage
            type
            slug
          }
        }
      }
    }
    `

    const res = await hashNodeClient.post('/', { query })

    return res.data.user.publication.posts as any
  }
}

const contentService = new ContentService()
export default contentService
