import * as React from 'react'
import { PageTransition } from '~/components/transition'

interface RootTemplateProps {
  children: React.ReactNode
}

export default function RootTemplate({
  children,
}: RootTemplateProps): React.ReactElement {
  return <PageTransition>{children}</PageTransition>
}
