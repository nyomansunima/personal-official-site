import sanityClient from '@lib/connection/sanity-connection'
import { QuestionGroupByCategory } from '~/types/faq'

class FAQService {
  async getAllFAQGroupedByCategory(): Promise<QuestionGroupByCategory[]> {
    const query = `
    *[_type == "faqCategory"]{
      _id,
      title,
      "faqs": *[_type == 'faq' && references(^._id)]{
        _id, 
        question, 
        answer
      }
    }
    `

    const res = await sanityClient.fetch(query)
    return res as any
  }
}
const faqService = new FAQService()
export default faqService
