import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

export interface WorkData {
  href: string
  title: string
  description: string
  images: string[]
  type: string
  rule: string
  category: string
  isFeatured?: boolean
  timeline: string
}

interface WorkItemProps {
  work: WorkData
}

interface WorkImageProps {
  image: string
  alt: string
  totalImages: number
  index: number
}

function isValidLink(link: string): boolean {
  if (link.includes('http://') || link.includes('https://')) {
    return true
  }

  return false
}

// Generate URL for each work by combine the slug with `works` path or
// return the original URL if the slug is empty
function parseLink(link: string): string {
  const isURL = isValidLink(link)

  return isURL ? link : `/works/${link}`
}

// Generate the grid class name for each images in different situation based
// on the total images and index
function getImageGridClassName(index: number, totalImages: number): string {
  let decodedClassName = ''

  if (totalImages === 1) {
    decodedClassName = 'tablet:col-span-4'
  } else if (totalImages === 2) {
    decodedClassName = 'tablet:col-span-2'
  } else {
    if (index === 0) {
      decodedClassName = 'tablet:col-span-4'
    } else {
      decodedClassName = 'tablet:col-span-2'
    }
  }

  return decodedClassName
}

function WorkImage({
  alt,
  image,
  index,
  totalImages,
}: WorkImageProps): React.ReactElement {
  const gridImageClassName = getImageGridClassName(index, totalImages)

  return (
    <div
      className={`flex bg-ambient p-1 border border-border rounded-2xl group col-span-1 ${gridImageClassName}`}
    >
      <picture className="relative overflow-hidden w-full h-[200px] tablet:h-[400px] rounded-xl">
        <Image
          src={image}
          alt={alt}
          className="object-cover transition-all duration-300 group-hover:scale-105"
          fill
          sizes="(min-width: 1024px) 2048px, 100vw"
        />
      </picture>
    </div>
  )
}

export function WorkItem({ work }: WorkItemProps): React.ReactElement {
  const { href, title, description, rule, type, images, category, timeline } =
    work

  const link = parseLink(href)
  const totalImages = images.length || 0
  const isLink = isValidLink(href)

  return (
    <Link
      href={link}
      target={isLink ? '_blank' : undefined}
      className="flex flex-col transition-all duration-300 group"
    >
      <h3 className="text-xl font-medium !leading-tight">{title}</h3>

      <p className="!leading-relaxed mt-4">{description}</p>

      <div className="flex flex-wrap text-sm text-foreground/70 mt-6 gap-2">
        <span className="py-1 px-3 bg-ambient border border-border rounded-xl cursor-pointer transition-all duration-300 group-hover:font-medium">
          {type}
        </span>
        <span className="py-1 px-3 bg-ambient border border-border rounded-xl cursor-pointer transition-all duration-300 group-hover:font-medium">
          {rule}
        </span>
        <span className="py-1 px-3 bg-ambient border border-border rounded-xl cursor-pointer transition-all duration-300 group-hover:font-medium">
          {category}
        </span>
        <span className="py-1 px-3 bg-ambient border border-border rounded-xl cursor-pointer transition-all duration-300 group-hover:font-medium">
          {timeline}
        </span>
      </div>

      <div className="grid grid-cols-1 laptop:grid-cols-4 gap-2 mt-10">
        {images.map((image, i) => (
          <WorkImage
            image={image}
            alt={title}
            totalImages={totalImages}
            index={i}
            key={i}
          />
        ))}
      </div>
    </Link>
  )
}
