import Link from 'next/link'
import * as React from 'react'
import { mergeClass } from '~/lib/utils'

interface LinkItemProps {
  className?: string
  children?: React.ReactNode
  href: string
  target?: React.HTMLAttributeAnchorTarget
}

interface IconItemProps {
  children: React.ReactNode
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
        'col-span-1 bg-ambient border border-border p-3 rounded-2xl relative transition-all duration-300 hover:scale-95 group text-sm text-foreground/80 min-h-16 flex items-center justify-center text-center gap-3',
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

export function IconItem({ children }: IconItemProps): React.ReactElement {
  return (
    <div className="flex justify-center items-center h-12 w-12 rounded-xl bg-secondary/30 text-lg">
      {children}
    </div>
  )
}

export function ResourcesSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center pt-0 pb-20 laptop:pb-56">
      <div className="flex w-full">
        <div className="grid grid-cols-1 laptop:grid-cols-4 gap-3 w-full">
          <LinkItem href="/contact" className="col-span-1">
            🏀 Hire me
          </LinkItem>
          <LinkItem
            href="/become-partner"
            className="col-span-1 laptop:row-span-2"
          >
            🚕 Become partner (business)
          </LinkItem>
          <LinkItem href="/works" className="col-span-1 laptop:row-span-2">
            🛼 See my works
          </LinkItem>
          <LinkItem
            href="https://nyomansunima.lemonsqueezy.com"
            target="_blank"
            className="col-span-1"
          >
            🛍️ Check my goodies
          </LinkItem>
          <LinkItem
            href="https://tryweebo.one"
            target="_blank"
            className="laptop:row-span-2"
          >
            🌸 My web design business (NEW)
          </LinkItem>
          <LinkItem
            href="https://ko-fi.com/nyomansunima"
            target="_blank"
            className="col-span-1"
          >
            💖 Suport me by donation
          </LinkItem>
          <LinkItem href="/sharing" className="col-span-1">
            📝 Learn together with me
          </LinkItem>
          <LinkItem
            href="https://moono.space"
            target="_blank"
            className="laptop:col-span-2"
          >
            💎 My apps collection (NEW)
          </LinkItem>
          <LinkItem
            href="https://weecraft.club"
            target="_blank"
            className="laptop:col-span-2"
          >
            🚌 See tiny dev resources (NEW)
          </LinkItem>
        </div>
      </div>
    </section>
  )
}
