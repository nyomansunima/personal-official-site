import Image from 'next/image'
import * as React from 'react'
import { mergeClass } from '@shared/utils/helper'

interface ArticleContentProps {
  children: React.ReactNode
  className?: string
}

interface ProtectedHtmlContentProps {
  children: string
}

interface GalleryItemProps {
  image: string
}

interface GalleryListImageProps {
  images: string[]
}

export function ArticleContent({
  children,
  className,
}: ArticleContentProps): React.ReactElement {
  return (
    <article
      className={`${mergeClass(
        'prose dark:prose-invert prose-sm tablet:prose-base tablet:prose-p:text-base prose-headings:!leading-tight tablet:prose-h1:text-3xl prose-h1:text-2xl tablet:prose-li:text-base max-w-none prose-headings:font-medium prose-strong:font-medium prose-neutral prose-code:font-mono prose-img:overflow-hidden prose-img:border prose-img:border-border prose-img:bg-surface prose-img:rounded-xl prose-pre:bg-surface prose-pre:text-foreground prose-pre:border prose-pre:border-border prose-pre:font-medium overflow-hidden text-foreground prose-headings:text-foreground prose-a:text-foreground prose-strong:text-foreground prose-headings:!text-pretty',
        className,
      )}`}
    >
      {children}
    </article>
  )
}

export function ProtectedHtmlContent({
  children,
}: ProtectedHtmlContentProps): React.ReactElement {
  // The content that passed throgh the elements
  const content = { __html: children }

  return <div dangerouslySetInnerHTML={content}></div>
}

interface ContentImageProps {
  src: string
  alt: string
  height?: number
  width?: number
  className?: string
}

export function ContentImage({
  src,
  alt,
  className,
}: ContentImageProps): React.ReactElement {
  return (
    <div
      suppressHydrationWarning
      className={`${mergeClass(
        'flex rounded-2xl p-1 border border-border bg-surface cursor-pointer my-4',
        className,
      )}`}
    >
      <picture className="relative w-full h-[200px] tablet:h-[400px] overflow-hidden rounded-xl not-prose">
        <Image
          src={src}
          alt={alt}
          quality={100}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-300 hover:scale-105 not-prose"
        />
      </picture>
    </div>
  )
}

export function GalleryItem({ image }: GalleryItemProps): React.ReactElement {
  const imageUrl = image

  return (
    <div className="flex col-span-1 rounded-2xl p-1 border border-border bg-surface cursor-pointer">
      <picture className="relative w-full h-[290px] overflow-hidden rounded-xl not-prose">
        <Image
          src={imageUrl}
          alt="Gallery"
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

export function GalleryListImage({
  images,
}: GalleryListImageProps): React.ReactElement {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-3 gap-2">
      {images.map((image, index) => (
        <GalleryItem image={image} key={index} />
      ))}
    </div>
  )
}
