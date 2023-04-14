import sanityClient from '@lib/connection/sanity-connection'
import { FAQ } from '~/types/faq'
import { PreviewService, ServiceDetail } from '~/types/service'

class OfferService {
  async getDetailService(slug: string): Promise<ServiceDetail> {
    const query = `
      *[_type == "service" && slug == "${slug}"][0]{
        ...,
        overview{
          ...,
          "thumbnail": thumbnail.asset -> url,
          "cursorColor": cursorColor.hex,
        },
        about{
          ...,
          "image":image.asset -> url,
        },
        platform{
          ...,
          platforms[]{
            ...,
            "image": image.asset -> url,
          }
        },
        process{
          ...,
          "image": image.asset -> url,
          detail{
            ...,
            "image": image.asset -> url,
          },
        },
        tools{
          ...,
          stacks[] -> {
            ...,
            "image": image.asset -> url,
          }
        },
        result{
          ...,
          "works": *[_type == "project" && references(^._id)][0...7]{
            slug,
            overview{
              ...,
              "thumbnail": thumbnail.asset -> url,
            },
            tags,
          },
        },
      }
    `

    const res = await sanityClient.fetch(query)
    return res as any
  }

  async getAllServiceFAQ(): Promise<FAQ[]> {
    const query = `
    *[_type == "faqCategory" && title == "Services"][0]{
      _id, 
      "faqs": *[_type == "faq" && references(^._id)]{
        _id,
        question,
        answer
      }
    }
    `

    const res = await sanityClient.fetch(query)
    return res.faqs
  }

  async getAllServicePreview(): Promise<PreviewService[]> {
    const query = `
    *[_type == "service"] | order(_updatedAt desc){
      slug,
      overview{
        title,
        headline,
        "thumbnail": thumbnail.asset -> url,
        "cursorColor": cursorColor.hex,
        desc,
      }
    }
    `
    const res = await sanityClient.fetch(query)

    return res as any
  }
}

const offerService = new OfferService()
export default offerService
