import Image from 'next/image'
import * as React from 'react'

export interface LogItemData {
  title: string
  description: string
  date: string
  category: string
  image?: string
}

interface LogItemProps {
  log: LogItemData
}

interface LogImageProps {
  src: string
  alt: string
}

function LogImage({ alt, src }: LogImageProps): React.ReactElement {
  return (
    <div className="flex rounded-xl p-1 border border-border bg-surface cursor-pointer mt-6">
      <picture className="relative w-full h-[180px] tablet:h-[300px] overflow-hidden rounded-xl not-prose">
        <Image
          src={src}
          alt={alt}
          fill
          quality={100}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-300 hover:scale-105 not-prose"
        />
      </picture>
    </div>
  )
}

export function LogItem({ log }: LogItemProps): React.ReactElement {
  const { title, description, date, category, image } = log

  return (
    <div className="flex flex-col bg-surface border border-border p-3 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
      <div className="flex flex-col tablet:flex-row gap-2 tablet:items-center">
        <h3 className="font-medium text-sm !leading-tight flex-grow">
          {title}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-sm text-foreground/40 transition-all duration-300">
            {category}
          </span>

          <span className="text-foreground/40 text-sm transition-all duration-300 group-hover:text-foreground">
            {date}
          </span>
        </div>
      </div>

      <div className="flex flex-col mt-4 text-foreground/60 text-sm !leading-relaxed">
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="prose prose-sm !text-foreground/70 dark:prose-invert"
        />

        {image && <LogImage src={image} alt={title} />}
      </div>
    </div>
  )
}
