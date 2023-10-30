import { hashnodeConnection } from '~/config/hashnode'
import { PaginatedBlogPost, Post } from '~/types'

class BlogService {
  async getInitialBlogPost(): Promise<Post[]> {
    const query = `
      query InitialBlogPostsQuery {
        publication(host: "nyomansunima.hashnode.dev") {
          posts(first: 3) {
            edges {
              node {
                slug
                title
                coverImage {
                  url
                }
                tags {
                  name
                }
                views
                reactionCount
                readTimeInMinutes
                publishedAt
              }
            }
          }
        }
      }
    `

    const res = await hashnodeConnection.request<any>(query)
    const payload = res.publication.posts.edges
      .map((edge) => edge.node)
      .map(
        (node) =>
          ({
            image: node.coverImage.url,
            slug: node.slug,
            title: node.title,
            tags: node.tags.map((tag) => tag.name),
            publishedAt: node.publishedAt,
            reactionCount: node.reactionCount,
            readTimeInMinutes: node.readTimeInMinutes,
            totalViews: node.views,
          } as Post),
      )

    return payload
  }

  async getAllBlogPosts({ pageParam }): Promise<PaginatedBlogPost> {
    const pageCursor = pageParam
    const query = `
      query BlogPostsQuery($limit: Int!, $pageCursor: String) {
        publication(host: "nyomansunima.hashnode.dev") {
          posts(first: $limit, after: $pageCursor) {
            edges {
              node {
                slug
                title
                coverImage {
                  url
                }
                tags {
                  name
                }
                views
                reactionCount
                readTimeInMinutes
                publishedAt
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      }
    `

    const res = await hashnodeConnection.request<any>(query, {
      limit: 6,
      pageCursor,
    })

    const payload = {
      pageInfo: res.publication.posts.pageInfo,
      posts: res.publication.posts.edges
        .map((edge) => edge.node)
        .map(
          (node) =>
            ({
              image: node.coverImage.url,
              slug: node.slug,
              title: node.title,
              tags: node.tags.map((tag) => tag.name),
              publishedAt: node.publishedAt,
              reactionCount: node.reactionCount,
              readTimeInMinutes: node.readTimeInMinutes,
              totalViews: node.views,
            } as Post),
        ),
    } as PaginatedBlogPost

    return payload
  }
}
export const blogService = new BlogService()
