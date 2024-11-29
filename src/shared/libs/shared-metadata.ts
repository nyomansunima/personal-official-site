import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types'

export const openGraph: OpenGraph = {
  images: [
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1729709107977/6dabcb40-d18e-48cf-a86b-7b423efb6605.png',
  ],
  locale: 'en_US',
  type: 'website',
  siteName: 'Nyoman Sunima',
}

export const twitter: Twitter = {
  images: [
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1729709107977/6dabcb40-d18e-48cf-a86b-7b423efb6605.png',
  ],
  card: 'summary_large_image',
  creator: '@nyomansunima',
  site: 'Nyoman Sunima',
}
