import { ArticleContent } from '@shared/components/common/content'
import * as React from 'react'
import { getWorkDetail } from './work-service'

type WorkDetailContentProps = {
  slug: string
}

export async function WorkDetailContent({
  slug,
}: WorkDetailContentProps): Promise<React.ReactElement> {
  const { content } = await getWorkDetail(slug)

  return <ArticleContent>{content}</ArticleContent>
}
