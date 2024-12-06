import * as React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import { WorkDetailContent, workService } from '@features/works'

interface Params {
  slug: string
}

interface WorkDetailPageProps {
  params: Promise<Params>
}

export async function generateMetadata(
  { params }: WorkDetailPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params
  const meta = await workService.getWorkMetadata(slug)
  const previousOgImages = (await parent).openGraph?.images || []
  const previousTwitterImages = (await parent).twitter?.images || []

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: meta.title,
      description: meta.description,
      images: [meta.image, ...previousOgImages],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: meta.title,
      description: meta.description,
      images: [meta.image, ...previousTwitterImages],
    },
  }
}

export async function generateStaticParams(): Promise<Params[]> {
  const workPaths = await workService.getWorkPaths()

  return workPaths.map((slug) => ({ slug }))
}

export default async function WorkDetailPage({
  params,
}: WorkDetailPageProps): Promise<React.ReactElement> {
  const { slug } = await params

  return (
    <div className="flex flex-col gap-20 tablet:gap-36">
      <WorkDetailContent slug={slug} />
    </div>
  )
}
