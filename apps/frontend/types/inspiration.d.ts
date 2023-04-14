export interface Source {
  _id: string
  name: string
  icon: string
  username: string
  url: string
}

export interface Inspiration {
  _id: string
  image: string
  title: string
  description: string
  url: string
  source: Source
}
