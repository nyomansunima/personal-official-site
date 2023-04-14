export interface ServiceDetail {
  _id: string
  slug: string
  seo: {
    title: string
    description: string
  }
  overview: {
    title: string
    headline: string
    thumbnail: string
    cursorColor: string
  }
  about: {
    image: string
    descs: string[]
  }
  purpose: {
    title: string
    desc: string
    purposes: {
      iconCode: string
      name: string
    }[]
  }
  platform: {
    title: string
    desc: string
    platforms: {
      image: string
      name: string
    }[]
  }
  process: {
    title: string
    desc: string
    image: string
    detail: {
      image: string
      steps: {
        title: string
        desc: string
      }[]
    }
  }
  tools: {
    title: string
    desc: string
    stacks: {
      title: string
      description: string
      image: string
      tags: string[]
      url: string
    }[]
  }
  result: {
    title: string
    desc: string
    works: {
      slug: string
      overview: {
        title: string
        headline: string
        thumbnail: string
      }
      tags: string[]
    }[]
  }
  requirement: {
    title: string
    desc: string
    reqs: {
      iconCode: string
      title: string
      desc: string
    }[]
  }
}
export interface PreviewService {
  slug: string
  overview: {
    title: string
    headline: string
    thumbnail: string
    cursorColor: string
    desc: string
  }
}

export interface ServicePageInfo {
  content: {
    headline: string
    whattodo: string
  }
}
