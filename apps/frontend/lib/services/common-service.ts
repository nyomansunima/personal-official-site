import sanityClient from '@lib/connection/sanity-connection'
import { AboutDetail } from '~/types/about'
import { HomeDetail } from '~/types/home'
import contentService from './content-service'
import { SocialMedia } from '~/types/common'

class CommonService {
  async loadAllSocialMedia(): Promise<SocialMedia[]> {
    const query = `
      *[_type == "social"]{
        ...,
      }
    `

    const res = await sanityClient.fetch(query)
    return res
  }

  async getHomeDetail(): Promise<HomeDetail> {
    const query = `
      {
        "inspirations": *[_type == "inspiration"][0...3]|order(_updatedAt desc){
          ...,
        },
        "explorations": *[_type == "exploration"][0...4]{
          slug,
          title,
          "summary": abouts[0],
          "thumbnail": thumbnail.asset -> url,
        }
      }
    `
    const res = await sanityClient.fetch(query)
    const posts = await contentService.getRecentPosts()

    return {
      ...res,
      blogPosts: posts,
    }
  }

  async getAboutDetail(): Promise<AboutDetail> {
    const query = `
      {
        "stories": *[_type == "story"]{
          ...,
        },
        "certificates": *[_type == "certificate"]|order(_updatedAt desc){
          ...,
          "image": image.asset -> url,
        },
        "clients": *[_type == "client"]|order(_updatedAt desc){
          ...,
          "image": image.asset -> url,
        },
        "timelines": *[_type == "timeline"]|order(_updatedAt desc){
          ...,
          "image": image.asset -> url,
        },
      }
    `
    const res = await sanityClient.fetch(query)
    return res as any
  }
}
const commonService = new CommonService()
export default commonService
