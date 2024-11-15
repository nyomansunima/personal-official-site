import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface CraftData {
  title: string
  description: string
  publisher: string
  image: string
  link: string
  insights?: string[]
}

interface CraftItemProps {
  craft: CraftData
}

export function CraftItem({ craft }: CraftItemProps): React.ReactElement {
  const { title, description, publisher, image, link, insights } = craft

  return (
    <Link
      href={link}
      target="_blank"
      className="flex flex-col p-3 rounded-2xl border border-border bg-ambient relative group transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex gap-3">
        <div className="block">
          <Image
            src={image}
            height={40}
            width={40}
            alt={title}
            className="rounded-xl overflow-hidden"
          />
        </div>

        <div className="flex flex-col flex-grow">
          <h3 className="text-sm font-medium">{title}</h3>
          <span className="text-sm text-foreground/60">{publisher}</span>
        </div>
      </div>

      <p className="text-sm mt-3 text-foreground/80">{description}</p>

      {insights && (
        <div className="flex items-center gap-2 mt-5 text-xs text-foreground/60">
          {insights.map((insight, i) => (
            <span
              key={i}
              className="transition-all duration-300 group-hover:font-medium group-hover:text-foreground"
            >
              {insight}
            </span>
          ))}
        </div>
      )}

      <div className="hidden w-7 h-7 rounded-lg bg-secondary/30 border border-border group-hover:flex justify-center items-center absolute top-3 right-3">
        <i className="fi fi-rr-arrow-small-right -rotate-45" />
      </div>
    </Link>
  )
}
