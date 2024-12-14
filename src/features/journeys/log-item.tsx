'use client'

import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { motion } from 'motion/react'
import { parseReadableDate } from '@shared/utils'

export interface LogItemData {
  title: string
  description: string
  date: string
  category: string
  image?: string
  url?: string
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
  const { title, description, date, category, image, url } = log

  const readableDate = parseReadableDate(date)
  const isValidURL =
    (url && url.includes('https://')) || url?.includes('http://')

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: '1.2', delay: 0.1 }}
      viewport={{
        once: true,
      }}
    >
      <div className="flex flex-col bg-surface border border-border p-3 rounded-2xl cursor-pointer group transition-all duration-300 hover:-translate-y-1">
        <div className="flex flex-col tablet:flex-row gap-2 tablet:items-center">
          <h3 className="font-medium text-base !leading-tight text-pretty flex-grow flex-1">
            {title}
          </h3>

          <div className="flex items-center gap-2">
            <span className="text-sm text-foreground/40 transition-all duration-300">
              {category}
            </span>

            <span className="text-foreground/40 text-sm transition-all duration-300 group-hover:text-foreground">
              {readableDate}
            </span>
          </div>
        </div>

        <div className="flex flex-col mt-4 text-foreground/60 text-sm !leading-relaxed">
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="prose prose-sm !text-foreground/70 dark:prose-invert"
          />

          {url && (
            <div className="flex mt-5">
              <Link
                href={url}
                target={isValidURL ? '_blank' : '_self'}
                className="flex items-center gap-2 text-foreground/60 group-hover:text-foreground transition-all duration-300 border border-border rounded-full px-3 py-1 hover:scale-95"
              >
                <i className="fi fi-rr-broken-chain-link-wrong" /> See detail
              </Link>
            </div>
          )}

          {image && <LogImage src={image} alt={title} />}
        </div>
      </div>
    </motion.div>
  )
}
