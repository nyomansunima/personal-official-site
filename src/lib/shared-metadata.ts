import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types'

export const defaultOpenGraphMetadata: OpenGraph = {
  images: ['/images/seo-image.png'],
  type: 'website',
  siteName: 'Nyoman Sunima',
}

export const defaultTwitterMetadata: Twitter = {
  images: ['/images/seo-image.png'],
  card: 'summary_large_image',
  creator: '@nyomansunima',
}
