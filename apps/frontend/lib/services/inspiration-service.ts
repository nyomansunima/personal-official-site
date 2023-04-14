import sanityClient from '@lib/connection/sanity-connection'
import { Inspiration, Source } from '~/types/inspiration'

class InspirationService {
  async getAllSource(): Promise<Source[]> {
    const query = `
    *[_type == 'inspirationSource'] | order(_updatedAt desc){
      ...,
      "icon": icon.asset -> url,
    }
    `

    const res = await sanityClient.fetch(query)
    return res as any
  }

  async getAllInspiration(): Promise<Inspiration[]> {
    const query = `
    *[_type == 'inspiration'] | order(_updatedAt desc){
      ...,
      source -> {
        ...,
        "icon": icon.asset -> url,
      }
    }
    `

    const res = await sanityClient.fetch(query)
    return res as any
  }
}
const inspirationService = new InspirationService()
export default inspirationService
