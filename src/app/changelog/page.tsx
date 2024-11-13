import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '@shared/lib/shared-metadata'
import { ChangelogListSection } from '@features/changelog'

export const metadata: Metadata = {
  title: 'Changelog',
  description:
    'The whole story Changelog me, nyoman sunima and all of the journey',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Changelog',
    description:
      'The whole story Changelog me, nyoman sunima and all of the journey',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Changelog',
    description:
      'The whole story Changelog me, nyoman sunima and all of the journey',
  },
}

export default function ChangelogPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <ChangelogListSection />
    </div>
  )
}
