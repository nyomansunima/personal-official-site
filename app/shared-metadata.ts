import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types'

/**
 * This file used to store all of the shared metadata
 * that will help to use in another file or location
 */

export const defaultOpenGraphMetadata: OpenGraph = {
  images: ['/images/meta-image.png'],
  type: 'website',
  siteName: 'Nyoman Sunima',
}

export const defaultTwitterMetadata: Twitter = {
  images: ['/images/meta-image.png'],
  card: 'summary_large_image',
  creator: '@nyomansunima',
}
