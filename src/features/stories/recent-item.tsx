'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'

const MotionLink = motion.create(Link)

export interface RecentData {
  title: string
  publisher: string
  timeline: string
  url: string
}

interface RecentItemProps {
  recent: RecentData
}

export function RecentItem({ recent }: RecentItemProps): React.ReactElement {
  const { title, publisher, timeline, url } = recent

  return (
    <MotionLink
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', duration: '1.2', delay: 0.1 }}
      viewport={{
        once: true,
      }}
      href={url}
      target="_blank"
      className="flex items-start tablet:items-center flex-col tablet:flex-row px-4 py-3 gap-2 rounded-2xl bg-surface border border-border group"
    >
      <h3 className="text-sm font-medium text-pretty !leading-tight line-clamp-1 flex-grow">
        {title}
      </h3>
      <div className="flex gap-2 text-sm text-foreground/50">
        <span className="transition-all duration-300 group-hover:text-foreground">
          {publisher}
        </span>
        <span className="transition-all duration-300 group-hover:text-foreground">
          {timeline}
        </span>
      </div>
    </MotionLink>
  )
}
