import Link from 'next/link'
import { ReactElement } from 'react'
import jsonData from './data.json'

interface Source {
  title: string
  description: string
  publisher: string
  url: string
  image: string
}

interface SourceItemProps {
  source: Source
}

// Predefined publication
// can be modified to update the content
const sources: Source[] = jsonData.sources as Source[]

function SourceItem({ source }: SourceItemProps): ReactElement {
  const { title, description, publisher, image, url } = source

  return (
    <Link
      href={url}
      target="_blank"
      className="flex bg-ambient border border-border p-3 rounded-2xl col-span-1 gap-3 transition-all duration-300 hover:scale-95 group relative"
    >
      <div className="flex justify-center items-center h-12 w-12 rounded-xl bg-secondary/35">
        <i className={image} />
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="text-sm font-medium">{title}</h3>
        <span className="text-sm text-foreground/90 text-clip">
          {publisher}
        </span>

        <p className="text-sm text-foreground/60 mt-3">{description}</p>
      </div>

      <div className="hidden w-7 h-7 rounded-lg bg-secondary/30 border border-border group-hover:flex justify-center items-center absolute top-3 right-3">
        <i className="fi fi-rr-arrow-small-right -rotate-45" />
      </div>
    </Link>
  )
}

export function SourcesSection(): ReactElement {
  return (
    <div className="flex flex-col py-20 laptop:pb-56">
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 gap-3 w-full">
        {sources.map((sou, index) => (
          <SourceItem source={sou} key={index} />
        ))}
      </div>
    </div>
  )
}
