import Link from 'next/link'
import * as React from 'react'

export interface SupportData {
  icon: string
  title: string
  description: string
  url: string
  publisher: string
}

interface SupportItemProps {
  data: SupportData
}

export function SupportItem({ data }: SupportItemProps): React.ReactElement {
  const { icon, title, description, url, publisher } = data

  return (
    <Link
      href={url}
      target="_blank"
      className="flex flex-col gap-3 bg-surface p-3 border border-border rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer relative group"
    >
      <div className="flex items-center gap-2">
        <i className={`${icon} h-9 w-9 rounded-lg bg-secondary`} />
        <div className="flex flex-col flex-grow gap-1">
          <h3 className="text-sm font-medium text-wrap">{title}</h3>

          <span className="text-xs text-foreground/60 !leading-tight font-medium">
            {publisher}
          </span>
        </div>
      </div>

      <p className="text-sm text-foreground/60 !leading-relaxed">
        {description}
      </p>

      <div className="hidden w-7 h-7 rounded-lg bg-secondary/30 border border-border group-hover:flex justify-center items-center absolute top-3 right-3">
        <i className="fi fi-rr-arrow-small-right -rotate-45" />
      </div>
    </Link>
  )
}
