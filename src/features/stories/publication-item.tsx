import * as React from 'react'
import Link from 'next/link'

export interface PublicationData {
  title: string
  url: string
}

interface PublicationItemProps {
  publication: PublicationData
}

export function PublicationItem({
  publication,
}: PublicationItemProps): React.ReactElement {
  const { title, url } = publication

  return (
    <Link
      href={url}
      target="_blank"
      className="flex flex-col bg-surface border border-border p-3 rounded-2xl col-span-1 transition-all duration-300 hover:-translate-y-1 group relative"
    >
      <h3 className="text-sm font-medium">{title}</h3>

      <div className="hidden w-7 h-7 rounded-lg bg-secondary/30 border border-border group-hover:flex justify-center items-center absolute top-2 right-3">
        <i className="fi fi-rr-arrow-small-right -rotate-45" />
      </div>
    </Link>
  )
}
