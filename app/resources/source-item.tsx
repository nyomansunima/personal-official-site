import Link from 'next/link'
import * as React from 'react'

export interface SourceData {
  title: string
  description: string
  publisher: string
  url: string
  image: string
}

interface SourceItemProps {
  source: SourceData
}

export function SourceItem({ source }: SourceItemProps): React.ReactElement {
  const { title, description, publisher, image, url } = source

  return (
    <Link
      href={url}
      target="_blank"
      className="flex flex-col bg-ambient border border-border p-3 rounded-2xl col-span-1 transition-all duration-300 hover:scale-95 group relative"
    >
      <div className="flex gap-3">
        <div className="flex justify-center items-center h-10 w-10 rounded-xl bg-secondary/35">
          <i className={image} />
        </div>

        <div className="flex flex-col flex-grow">
          <h3 className="text-sm font-medium">{title}</h3>
          <span className="text-sm text-foreground/80 text-clip">
            {publisher}
          </span>
        </div>
      </div>

      <p className="text-sm text-foreground/80 mt-3">{description}</p>

      <div className="hidden w-7 h-7 rounded-lg bg-secondary/30 border border-border group-hover:flex justify-center items-center absolute top-3 right-3">
        <i className="fi fi-rr-arrow-small-right -rotate-45" />
      </div>
    </Link>
  )
}
