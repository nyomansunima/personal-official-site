import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'
import { NewsletterSection } from './newsletter'
import BlogPostList from './list'

interface Props {
  searchParams: {
    page?: string
  }
}

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read the tips, tricks and story about product design, development and business',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Blog',
    description:
      'Read the tips, tricks and story about product design, development and business',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Blog',
    description:
      'Read the tips, tricks and story about product design, development and business',
  },
}

export default function BlogPage({ searchParams }: Props): React.ReactElement {
  return (
    <div className="px-5 laptop:px-0 container mx-auto">
      <div className="flex flex-col py-20 laptop:py-36 items-center">
        <h1 className="text-2xl laptop:text-3xl text-center !leading-tight font-medium">
          Blog
        </h1>

        <NewsletterSection />
        <BlogPostList searchParams={searchParams} />
      </div>
    </div>
  )
}
