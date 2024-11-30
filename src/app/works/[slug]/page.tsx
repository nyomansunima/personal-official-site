import * as React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import * as defaultMetadata from '@shared/libs/shared-metadata'
import { WorkDetailContent, workService } from '@features/works'

interface ParamsData {
  slug: string
}

interface WorkDetailPageProps {
  params: Promise<ParamsData>
}

export async function generateMetadata(
  { params }: WorkDetailPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params

  const previousImages = (await parent).openGraph?.images || []
  const meta = await workService.getWorkMetadata(slug)

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: meta.title,
      description: meta.description,
      images: [meta.image, ...previousImages],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: meta.title,
      description: meta.description,
      images: [meta.image, ...previousImages],
    },
  }
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
