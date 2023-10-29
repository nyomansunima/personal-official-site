import { hygraphConnection } from '~/config/hygraph'
import { FAQ } from '~/types'

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
}

export const commonService = new CommonService()
