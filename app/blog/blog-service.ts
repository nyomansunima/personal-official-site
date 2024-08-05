'use server'

import { config } from '~/lib/config'
import { hashnodeClient } from '~/lib/hashnode'

// predefined blog host from environment
const blogHost = config.hashnode.host

interface PageInfo {
  hasNextPage: boolean
  hasPreviousPage: boolean
  previousPage: number
  nextPage: number
}

interface PaginatedPosts {
  posts: Post[]
  pageInfo: PageInfo
}

export interface Post {
  id: string
  slug: string
  canonicalUrl: string
  title: string
  subtitle?: string
  tags: string[]
  coverImage: {
    url: string
    attribution?: string
  }
  readTimeInMinutes: number
  views: number
  reactionCount: number
  responseCount: number
  publishedAt: string
}

export interface PostDetail {
  id: string
  slug: string
  canonicalUrl: string
  title: string
  subtitle?: string
  readTimeInMinutes: number
  views: number
  reactionCount: number
  responseCount: number
  publishedAt: string
  tags: string[]
  coverImage: {
    url: string
    attribution?: string
  }
  content: string
}

interface Series {
  id: string
  name: string
  description: string
  coverImage: string
  slug: string
}

interface BlogMetadata {
  slug: string
  title: string
  description: string
  image: string
}

/**
 * ## parseBlogPostsPayload
 *
 * Parse the hashnode request into readable data
 * object or response
 *
 * @param res any response from request
 * @returns {PaginatedPosts}
 */
function parseBlogPostsPayload(res: any): PaginatedPosts {
  const base = res.publication.postsViaPage as any
  const pageInfo = base.pageInfo as any
  const posts = base.nodes.map((post) => {
    const tags = post.tags.map((tag) => tag.name) as string[]
    return { ...post, tags } as Post
  })

  return {
    posts,
    pageInfo,
  }
}

/**
 * ## parseBlogMetadata
 *
 * Parse the hashnode response into readable data object
 *
 * @param res any response from request
 * @returns {BlogMetadata}
 */
function parseBlogMetadata(res: any): BlogMetadata {
  return {
    slug: res.slug,
    title: res.title,
    description: (res.content.text as string).substring(0, 300).trim(),
    image: res.coverImage.url,
  } as BlogMetadata
}

/**
 * ## parseBlogDetail
 *
 * Parse the response object into readable data object
 * for post detail
 * @param res any request response from hashnode
 * @returns {PostDetail}
 */
function parseBlogDetail(res: any): PostDetail {
  const tags = res.tags.map((tag) => tag.name) as string[]
  const content = res.content.html

  return {
    ...res,
    tags,
    content,
  } as PostDetail
}

export async function getBlogPosts({
  limit,
  page,
}: {
  limit: number
  page?: number
}): Promise<PaginatedPosts> {
  const query = `
    query GetPosts($host: String, $limit: Int!, $page: Int!) {
      publication(host: $host) {
        postsViaPage(pageSize: $limit, page: $page) {
          nodes {
            id
            slug
            canonicalUrl
            title
            subtitle
            tags {
              name
            }
            coverImage {
              url
              attribution
            }
            readTimeInMinutes
            views
            reactionCount
            responseCount
            publishedAt
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            previousPage
            nextPage
          }
        }
      }
    }
  `

  const variables = {
    host: blogHost,
    limit: limit || 9,
    page: page || 1,
  }

  const res = await hashnodeClient<any>({ query, variables })
  const payload = parseBlogPostsPayload(res)
  return payload
}

export async function getBlogMetadata(slug: string): Promise<BlogMetadata> {
  const query = `
    query GetBlogMetadata($host: String, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          slug
          title
          coverImage {
            url
          }
          content {
            text
          }
        }
      }
    }
  `

  const variables = {
    host: blogHost,
    slug: slug,
  }

  const res = await hashnodeClient<any>({ query, variables })
  const post = res.publication.post
  const payload = parseBlogMetadata(post)
  return payload
}

export async function getBlogDetail(slug: string): Promise<PostDetail> {
  const query = `
    query GetBlogMetadata($host: String, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          slug
          canonicalUrl
          title
          subtitle
          readTimeInMinutes
          views
          reactionCount
          responseCount
          publishedAt
          tags {
            name
          }
          coverImage {
            url
            attribution
          }
          content {
            html
          }
        }
      }
    }
  `

  const variables = {
    host: blogHost,
    slug: slug,
  }

  const res = await hashnodeClient<any>({ query, variables })
  const post = res.publication.post
  const payload = parseBlogDetail(post)
  return payload
}
