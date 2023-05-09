export interface AboutDetail {
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
  stories: {
    title: string
    image: string
    accentColor: string
    url: string
  }[]
}
