import * as React from 'react'
import Link from 'next/link'
import { mergeClass } from '~/lib/utils'

interface LinkItemProps {
  className?: string
  children?: React.ReactNode
  href: string
  target?: React.HTMLAttributeAnchorTarget
}

export function LinkItem({
  href,
  target,
  children,
  className,
}: LinkItemProps): React.ReactElement {
  return (
    <Link
      href={href}
      target={target}
      className={`${mergeClass(
        'col-span-1 bg-ambient border border-border p-3 rounded-2xl relative transition-all duration-300 hover:scale-95 group text-sm text-foreground/90 min-h-16 flex items-center justify-center text-center gap-3',
        className,
      )}`}
    >
      {children}

      <div className="absolute h-7 w-7 rounded-full bg-ambient border border-border flex justify-center items-center top-3 right-3 transition-all duration-500 opacity-0 group-hover:opacity-100">
        <i className="fi fi-rr-arrow-small-right -rotate-45" />
      </div>
    </Link>
  )
}
