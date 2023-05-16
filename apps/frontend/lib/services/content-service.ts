import hashNodeClient from '@lib/connection/hashnode-connection'
import sanityClient from '@lib/connection/sanity-connection'
import {
  ArticlePost,
  BioDetail,
  BlogPost,
  Exploration,
  ExplorationDetail,
  ExplorationRepo,
} from '~/types/content'
import { FAQ } from '~/types/faq'
import { PreviewService, ServiceDetail } from '~/types/service'

class ContentService {
  async getDetailBio(): Promise<BioDetail> {
    const query = `
      {
        "socials": *[_type == "bioSocial"]{
          ...,
        },
        "links": *[_type == "bioLink"]{
          ...,
          "customColor": customColor.hex,
        },
      }
    `

    const res = await sanityClient.fetch(query)
    return res
  }

  async getDetailBlog(slug: string): Promise<BlogPost> {
    const query = `
      *[_type == "blog" && slug.current == $slug][0]{
        ...,
        "slug": slug.current,
        "thumbnail": thumbnail.asset -> url,
        tags[] -> {
          ...,
          "image": image.asset -> url,
        }
      }
    `

    const res = await sanityClient.fetch(query, {
      slug,
    })

    return res
  }

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

  async loadAllExploreRepo(): Promise<ExplorationRepo[]> {
    const query = `
      *[_type == "repo"]{
        ...,
        "image": image.asset -> url,
      }
    `

    const res = await sanityClient.fetch(query)
    return res
  }

  async loadAllExploration(): Promise<Exploration[]> {
    const query = `
      *[_type == "exploration"]{
        slug,
        title,
        "summary": abouts[0],
        "thumbnail": thumbnail.asset -> url,
      }
    `

    const res = await sanityClient.fetch(query)
    return res
  }

  async loadDetailExploration(slug: string): Promise<ExplorationDetail> {
    const query = `
      *[_type == "exploration" && slug == $slug][0]{
        ...,
        "thumbnail": thumbnail.asset -> url,
        stacks[] -> {
          "image": image.asset -> url,
          title,
          url,
        },
        "nextExploration": *[_type == "exploration" && _id > ^._id] | order(_updatedAt asc)[0]{
          slug,
          title,
        }
      }
    `

    const res = await sanityClient.fetch(query, { slug })
    return res
  }

  async getBestWeekPosts(): Promise<ArticlePost[]> {
    const query = `{
      user(username: "nyomansunima") {
        publication {
          posts(page: 0) {
            title
            coverImage
            slug
            type
          }
        }
      }
    }
    `

    const res = await hashNodeClient.post('/', { query })

    return (res.data.user.publication.posts as any[]).slice(0, 6)
  }

  async getRecentPosts(): Promise<ArticlePost[]> {
    const query = `{
      user(username: "nyomansunima") {
        publication {
          posts(page: 0) {
            title
            coverImage
            slug
            type
          }
        }
      }
    }
    `

    const res = await hashNodeClient.post('/', {
      query,
    })
    if (res.data.user && res.data.user.publication) {
      return (res.data.user.publication.posts as any[]).slice(0, 10)
    } else {
      return []
    }
  }

  async getAllPosts(): Promise<ArticlePost[]> {
    const query = `{
      user(username: "nyomansunima") {
        publication {
          posts(page: 0) {
            title
            coverImage
            type
            slug
          }
        }
      }
    }
    `

    const res = await hashNodeClient.post('/', { query })
    return res.data.user.publication.posts as any
  }
}

const contentService = new ContentService()
export default contentService
