import { hashnodeConnection } from '~/config/hashnode'
import {
  PaginatedBlogPost,
  Post,
  PostAuthor,
  PostDetail,
  PostMetadata,
} from '~/types'

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

  async getPostMetadata(slug: string): Promise<PostMetadata> {
    const query = `
      query PostMetadata($slug: String!) {
        publication(host: "nyomansunima.hashnode.dev") {
          post(slug: $slug) {
            title
            brief
            coverImage {
              url
            }
          }
        }
      }
    `

    const res = await hashnodeConnection.request<any>(query, {
      slug,
    })

    const payload = res.publication.post

    return {
      title: payload.title,
      desc: payload.brief,
      image: payload.coverImage.url,
    }
  }

  async getPostDetail(slug: string): Promise<PostDetail> {
    const query = `
      query DetailBlogPost($slug: String!) {
        publication(host: "nyomansunima.hashnode.dev") {
          post(slug: $slug) {
            title
            subtitle
            coverImage {
              url
            }
            tags {
              name
            }
            readTimeInMinutes
            views
            reactionCount
            publishedAt
            content {
              markdown
            }
          }
        }
      }
    `

    const res = await hashnodeConnection.request<any>(query, { slug })
    const payload = res.publication.post

    return {
      ...payload,
      image: payload.coverImage.url,
      content: payload.content.markdown,
      tags: payload.tags.map((tag) => tag.name),
    }
  }

  async getPostAuthor(slug: string): Promise<PostAuthor> {
    const query = `
      query DetailBlogPost($slug: String!) {
        publication(host: "nyomansunima.hashnode.dev") {
          post(slug: $slug) {
            author {
              name
              bio {
                text
              }
              profilePicture
            }
          }
        }
      }
    `

    const res = await hashnodeConnection.request<any>(query, {
      slug,
    })
    const payload = res.publication.post.author

    return {
      avatar: payload.profilePicture,
      bio: payload.bio.text,
      name: payload.name,
    }
  }
}

export const blogService = new BlogService()
