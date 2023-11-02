import { hygraphConnection } from '~/config/hygraph'
import { PaginatedWork, Work, WorkMeta } from '~/types'

class WorkService {
  async getAllWorks({ pageParam, queryKey }): Promise<PaginatedWork> {
    const searchParams = queryKey[2] as URLSearchParams
    let types = ['Project', 'Playground', 'Exploration']
    const typeParam = searchParams.get('type')
    if (typeParam) {
      types = [typeParam]
    }

    const query = `
      query WorksQuery($limit: Int!, $nextCursor: String, $types: [WorkType]) {
        worksConnection(first: $limit, after: $nextCursor, where: {type_in: $types}) {
          edges {
            node {
              slug
              tags
              title
              type
              workStatus
              createdAt
              thumbnail {
                url
              }
            }
          }
          pageInfo {
            hasNextPage
            pageSize
            endCursor
          }
        }
      }
    `

    const res = await hygraphConnection.request<any>(query, {
      limit: 6,
      nextCursor: pageParam,
      types,
    })

    const payload = {
      works: res.worksConnection.edges
        .map((edge) => edge.node)
        .map(
          (node) =>
            ({
              ...node,
              status: node.workStatus,
              thumbnail: node.thumbnail.url,
            } as Work),
        ),
      pageInfo: res.worksConnection.pageInfo,
    }

    return payload
  }

  async getMetadata(slug: string): Promise<WorkMeta> {
    const query = `
      query WorkMetadata($slug: String!) {
        work(where: {slug: $slug}) {
          title
          description
          thumbnail {
            url
          }
        }
      }
    `

    const res = await hygraphConnection.request<any>(query, {
      slug,
    })

    const payload: WorkMeta = {
      title: res.work.title,
      desc: res.work.description,
      image: res.work.thumbnail.url,
    }

    return payload
  }
}

export const workService = new WorkService()
