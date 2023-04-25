import hashNodeClient from '@lib/connection/hashnode-connection'
import sanityClient from '@lib/connection/sanity-connection'
import { ArticlePost, ExplorationDetail } from '~/types/content'

class ContentService {
  async loadDetailExploration(slug: string): Promise<ExplorationDetail> {
    const query = `
      *[_type == "exploration" && slug == $slug][0]{
        ...,
        "thumbnail": thumbnail.asset -> url,
        stacks[] -> {
          "image": image.asset -> url,
          title,
          url,
        },
        "nextExploration": *[_type == "exploration" && _id > ^._id] | order(_updatedAt asc)[0]{
          slug,
          title,
        }
      }
    `

    const res = await sanityClient.fetch(query, { slug })
    return res
  }

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
