import { hygraphConnection } from '~/config/hygraph'
import { Career, FAQ, LinkBio, Timeline } from '~/types'

class CommonService {
  async getAllFaq(): Promise<FAQ[]> {
    const query = `
      query FAQQuery {
        faqs {
          question
          answer
        }
      }
    `

    const res = await hygraphConnection.request<any>(query)
    return res.faqs
  }

  async getAllTimelines(): Promise<Timeline[]> {
    const query = `
      query TimelinesQuery {
        timelines {
          date
          desc
          title
        }
      }
    `

    const res = await hygraphConnection.request<any>(query)
    return res.timelines
  }

  async getAllCareers(): Promise<Career[]> {
    const query = `
      query CareersQuery {
        careers {
          role
          type
          timeline
          company
        }
      }    
    `

    const res = await hygraphConnection.request<any>(query)
    return res.careers
  }

  async getAllLinks(): Promise<LinkBio[]> {
    const query = `
      query LinksQuery {
        links {
          iconCode
          title
          type
          url
          description
          publishedAt
          image {
            url(transformation: {image: {}, validateOptions: false})
          }
        }
      }
    `

    const res = await hygraphConnection.request<any>(query)
    const payload = res.links.map((link) => ({ ...link, image: '' }))

    return payload
  }
}

export const commonService = new CommonService()
