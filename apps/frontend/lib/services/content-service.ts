import sanityClient from '@lib/connection/sanity-connection'
import axios from 'axios'
import {
  BioDetail,
  BlogPost,
  BlogPostItem,
  Exploration,
  ExplorationDetail,
  ExplorationRepo,
  RelatedBlogPost,
} from '~/types/content'
import { FAQ } from '~/types/faq'
import { PreviewService, ServiceDetail } from '~/types/service'
import * as toMarkdown from '@sanity/block-content-to-markdown'

class ContentService {
  async transformContentToMarkdown(content: any) {
    const serializers = {
      types: {
        code: (props) =>
          '```' + props.node.language + '\n' + props.node.code + '\n```',
      },
    }

    const mdContent = toMarkdown(content, { serializers })
  }

  async multiPlatformBlogIntegration(body: any): Promise<void> {
    const {
      documentId,
      revisionId,
      operation,
      platform,
      title,
      slug,
      desc,
      content,
      thumbnail,
    } = body

    // predefine vars
    const baseBlogUrl = `${process.env.APP_BASE_URL}/blog`
    const mediumAPIKey = process.env.MEDIUM_API_KEY!
    const mediumUserId =
      '19c02fbce6b6b90a9a11486a087a9cae7db87906cb1894c0a6b5ddbeb3a610ae7'
    const hashnodeAPIKey = process.env.HASHNODE_API_KEY!
    const devtoAPIKey = process.env.DEV_TO_API_KEY!

    const markdownParsedContent = ''

    // Start to publish the blog post to
    // another platform including hashnode, dev.to and medium
    // this can be create, update and delete the content

    if (operation == 'create') {
      // create post on medium
      const mediumData = await axios
        .post(
          `https://api.medium.com/v1/users/${mediumUserId}/posts`,
          {
            title: title,
            contentFormat: 'markdown',
            content: markdownParsedContent,
            canonicalUrl: `${baseBlogUrl}/${slug}`,
            tags: ['football', 'sport', 'Liverpool'],
            publishStatus: 'public',
            notifyFollowers: true,
          },
          {
            headers: {
              Authorization: `Bearer ${mediumAPIKey}`,
            },
          }
        )
        .then((res) => res.data.data)

      // create post on dev.to
      const devtoData = await axios
        .post(
          `https://dev.to/api/api/articles`,
          {
            article: {
              title: title,
              body_markdown: markdownParsedContent,
              published: true,
              main_image: thumbnail,
              canonical_url: `${baseBlogUrl}/${slug}`,
              description: desc,
              tags: ['tips'],
            },
          },
          {
            headers: {
              'api-key': devtoAPIKey,
            },
          }
        )
        .then((res) => res.data)

      await sanityClient.patch(documentId, {
        set: {},
      })
    }

    if (operation == 'update') {
      // update dev.to post
      await axios.put(
        `https://dev.to/api/api/articles/${platform.devto}`,
        {
          article: {
            title: title,
            body_markdown: markdownParsedContent,
            published: true,
            main_image: thumbnail,
            canonical_url: `${baseBlogUrl}/${slug}`,
            description: desc,
            tags: ['tips'],
          },
        },
        {
          headers: {
            'api-key': devtoAPIKey,
          },
        }
      )
    }

    if (operation == 'delete') {
      // unpublish the dev.to post
      await axios.put(
        `https://dev.to/api/api/articles/${platform.devto}/unpublish`,
        {},
        {
          headers: {
            'api-key': devtoAPIKey,
          },
        }
      )
    }
  }

  async getRelatedBlogPost(slug: string): Promise<RelatedBlogPost[]> {
    const query = `
      *[_type == "blog" && slug.current == $slug][0]{
        "relatedPosts": *[_type == "blog" && references(^.tags[]._ref) && _id != ^._id] | order(_updatedAt desc) [0...3]{
          "tag": tags[0] -> title,
          title,
          "thumbnail": thumbnail.asset ->url,
          "slug": slug.current,
        }
      }
    `

    const res = await sanityClient.fetch(query, { slug })
    return res.relatedPosts || []
  }

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

  async getBestWeekPosts(): Promise<BlogPostItem[]> {
    const query = `
    *[_type == "blog"] | order(updatedAt desc) [0...7]{
      title,
      "slug": slug.current,
      "thumbnail": thumbnail.asset-> url,
      "tag": tags[0] -> title,
    }
  `

    const res = await sanityClient.fetch(query)
    return res
  }

  async getRecentPosts(): Promise<BlogPostItem[]> {
    const query = `
      *[_type == "blog"] | order(updatedAt desc) [0...8]{
        title,
        "slug": slug.current,
        "thumbnail": thumbnail.asset-> url,
        "tag": tags[0] -> title,
      }
    `

    const res = await sanityClient.fetch(query)
    return res
  }

  async getAllPosts(): Promise<BlogPostItem[]> {
    const query = `
      *[_type == "blog"] | order(updatedAt desc){
        title,
        "slug": slug.current,
        "thumbnail": thumbnail.asset-> url,
        "tag": tags[0] -> title,
      }
    `

    const res = await sanityClient.fetch(query)
    return res
  }
}

const contentService = new ContentService()
export default contentService
