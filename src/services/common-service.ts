import { hygraphConnection } from '~/config/hygraph'
import { Career, FAQ, Timeline } from '~/types'

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
}

export const commonService = new CommonService()
