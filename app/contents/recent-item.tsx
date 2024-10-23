import * as React from 'react'
import Link from 'next/link'

export interface RecentData {
  title: string
  publisher: string
  url: string
}

interface RecentItemProps {
  recent: RecentData
}

export function RecentItem({ recent }: RecentItemProps): React.ReactElement {
  const { title, publisher, url } = recent

  return (
    <Link
      href={url}
      target="_blank"
      className="flex flex-col tablet:flex-row p-4 rounded-2xl bg-ambient border border-border transition-all duration-300 hover:-translate-y-1"
    >
      <h3 className="text-sm font-medium text-pretty !leading-tight line-clamp-1 flex-grow">
        {title}
      </h3>
      <div className="flex gap-2 text-sm">
        <span className="text-foreground/50 transition-all duration-300 hover:text-foreground hover:font-medium">
          {publisher}
        </span>
      </div>
    </Link>
  )
}
