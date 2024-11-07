import Image from 'next/image'
import * as React from 'react'
import { mergeClass } from '~/lib/utils'

interface ArticleContentProps {
  children: React.ReactNode
  className?: string
}

interface ProtectedHtmlContentProps {
  children: string
}

interface ContentImageProps {
  src: string
  alt: string
  className?: string
}

interface GalleryItemProps {
  image: string
}

interface GalleryListImageProps {
  images: string[]
}

/**
 * ## ArticleContent
 *
 * Predefined component that allow to styling the article and documents
 * using the advantages of `tailwindcss typography`
 *
 * @returns {React.ReactElement}
 */
export function ArticleContent({
  children,
  className,
}: ArticleContentProps): React.ReactElement {
  return (
    <article
      className={`${mergeClass(
        'prose dark:prose-invert prose-sm tablet:prose-base tablet:prose-p:text-base prose-headings:!leading-tight tablet:prose-h1:text-3xl prose-h1:text-2xl tablet:prose-li:text-base max-w-none prose-headings:font-medium prose-strong:font-medium prose-neutral prose-code:font-mono prose-img:overflow-hidden prose-img:border prose-img:border-border prose-img:bg-ambient prose-img:rounded-xl prose-pre:bg-ambient prose-pre:text-foreground prose-pre:border prose-pre:border-border prose-pre:font-medium overflow-hidden text-foreground prose-headings:text-foreground prose-a:text-foreground prose-strong:text-foreground',
        className,
      )}`}
    >
      {children}
    </article>
  )
}

/**
 * ## ProtectedHtmlContent
 *
 * Protect and secure the parsing of string html
 * @param children the string content that passed as html
 * @returns {React.ReactElement}
 */
export function ProtectedHtmlContent({
  children,
}: ProtectedHtmlContentProps): React.ReactElement {
  // The content that passed throgh the elements
  const content = { __html: children }

  return <div dangerouslySetInnerHTML={content}></div>
}

/**
 * ## ContentImage
 *
 * A React component that renders an image with a rounded border, background, and hover effect.
 *
 * @param {ContentImageProps} props - The props for the component.
 * @param {string} props.src - The URL of the image to be displayed.
 * @param {string} props.alt - The alt text for the image.
 * @param {string} [props.className] - An optional CSS class to be applied to the container div.
 * @returns {React.ReactElement} - The rendered ContentImage component.
 */
export function ContentImage({
  src,
  alt,
  className,
}: ContentImageProps): React.ReactElement {
  return (
    <div
      className={`${mergeClass(
        'flex rounded-2xl p-1 border border-border bg-ambient cursor-pointer my-4',
        className,
      )}`}
    >
      <picture className="relative w-full h-[200px] tablet:h-[400px] overflow-hidden rounded-xl not-prose">
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

/**
 * ## GalleryItem
 *
 * A React component that renders a gallery item with an image.
 *
 * @param {GalleryItemProps} props - The props for the component.
 * @param {string} props.image - The URL of the image to be displayed.
 * @returns {React.ReactElement} - The rendered GalleryItem component.
 */
export function GalleryItem({ image }: GalleryItemProps): React.ReactElement {
  const imageUrl = image

  return (
    <div className="flex col-span-1 rounded-2xl p-1 border border-border bg-ambient cursor-pointer">
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

/**
 * ## GalleryListImage
 *
 * A React component that renders a grid of gallery items with images.
 *
 * @param {GalleryListImageProps} props - The props for the component.
 * @param {string[]} props.images - An array of image URLs to be displayed in the gallery.
 * @returns {React.ReactElement} - The rendered GalleryListImage component.
 */
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
