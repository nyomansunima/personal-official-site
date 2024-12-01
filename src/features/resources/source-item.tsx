import Link from 'next/link'
import * as React from 'react'

export interface SourceData {
  title: string
  description: string
  url: string
}

interface SourceItemProps {
  source: SourceData
}

export function SourceItem({ source }: SourceItemProps): React.ReactElement {
  const { title, description, url } = source

  return (
    <Link
      href={url}
      target="_blank"
      className="flex flex-col bg-surface border border-border p-3 rounded-2xl col-span-1 transition-all duration-300 hover:-translate-y-1 group relative"
    >
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="text-sm text-foreground/60 mt-3">{description}</p>

      <div className="hidden w-7 h-7 rounded-lg bg-secondary/30 border border-border group-hover:flex justify-center items-center absolute top-3 right-3">
        <i className="fi fi-rr-arrow-small-right -rotate-45" />
      </div>
    </Link>
  )
}
