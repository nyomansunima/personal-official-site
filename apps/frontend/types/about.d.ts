export interface AboutDetail {
  stories: {
    title: string
    desc: string
    tags: string[]
    url: string
  }[]
  certificates: {
    image: string
    title: string
    publisher: string
    publishedAt: string
  }[]
  clients: {
    image: string
    name: string
    address: string
    about: string
    url: string
  }[]
  timelines: {
    image: string
    title: string
    desc: string
  }[]
}
