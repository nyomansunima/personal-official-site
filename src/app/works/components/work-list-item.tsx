import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { Work } from '~/types'
import { mergeClass, parseReadableDate } from '~/utils/helpers'

type ItemPillProps = {
  children: React.ReactNode
  className?: string
}

type Props = {
  work: Work
}

function ItemPill({ children, className }: ItemPillProps) {
  return (
    <span
      className={mergeClass(
        'bg-background border border-border rounded-full px-3 py-2',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function WorkListItemCard({ work }: Props) {
  const workURL = `/works/${work.slug}`
  const parsedDate = parseReadableDate(work.createdAt)
  const tag = work.tags[0] || ''

  const Comp = work.status === 'DONE' ? 'a' : 'div'

  return (
    <Comp href={workURL} className="col-span-1 flex flex-col">
      <picture className="relative w-full laptop:h-[560px] h-[330px] overflow-hidden rounded-2xl">
        <Image src={work.thumbnail} alt="Hello" fill className="object-cover" />

        {work.status === 'IN_PROGRESS' && (
          <ItemPill className="absolute top-5 right-5">On Going</ItemPill>
        )}

        <div className="flex absolute bottom-5 inset-x-5 items-center flex-wrap gap-3">
          <ItemPill>{tag}</ItemPill>
          <ItemPill>{parsedDate}</ItemPill>
        </div>
      </picture>

      <h3 className="text-2xl !leading-tight mt-6 line-clamp-2 laptop:w-10/12">
        {work.title}
      </h3>
    </Comp>
  )
}
