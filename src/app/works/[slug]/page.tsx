import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { workService } from '~/services/work-service'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/lib/shared-metadata'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = params.slug
  const meta = await workService.getMetadata(slug)

  if (!slug || !meta) {
    return notFound()
  }

  return {
    title: `${meta.title} | Nyoman Sunima`,
    description: meta.desc,
    openGraph: {
      ...defaultOpenGraphMetadata,
      title: `${meta.title} | Nyoman Sunima`,
      description: meta.desc,
    },
    twitter: {
      ...defaultTwitterMetadata,
      title: `${meta.title} | Nyoman Sunima`,
      description: meta.desc,
    },
  }
}

export default function WorkDetailPage({ params }: Props) {
  return <main></main>
}
