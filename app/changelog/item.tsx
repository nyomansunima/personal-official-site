import * as React from 'react'

export interface ChangelogItemData {
  title: string
  description: string
  date: string
}

interface ChangelogItemProps {
  log: ChangelogItemData
}

export function ChangelogItem({ log }: ChangelogItemProps): React.ReactElement {
  const { title, description, date } = log

  return (
    <div className="flex flex-col bg-ambient border border-border px-4 py-3 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="flex flex-col tablet:flex-row gap-2">
        <div className="flex gap-2 items-center flex-grow">
          <i className="fi fi-sr-badge-check text-blue-600 text-base" />
          <h3 className="font-medium text-sm !leading-tight">{title}</h3>
        </div>
        <span className="text-foreground/40 text-xs">{date}</span>
      </div>

      <div className="flex flex-col mt-4 text-foreground/70 text-sm !leading-relaxed">
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="prose prose-sm !text-foreground/70"
        />
      </div>
    </div>
  )
}
