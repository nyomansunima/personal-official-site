import * as React from 'react'
import { IconItem, LinkItem } from './item'

export function ResourcesSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center pt-0 pb-20 laptop:pt-0 laptop:pb-36">
      <div className="flex w-full laptop:w-8/12 mx-auto">
        <div className="grid grid-cols-1 laptop:grid-cols-4 gap-3 w-full">
          <LinkItem href="/contact" className="col-span-1">
            🏀 Hire me
          </LinkItem>
          <LinkItem href="/become-partner" className="col-span-1 row-span-2">
            🛼 Become partner (business)
          </LinkItem>
          <LinkItem
            href="https://nyomansunima.lemonsqueezy.com"
            target="_blank"
            className="col-span-1"
          >
            🛍️ Buy something
          </LinkItem>
          <LinkItem
            href="https://nyomansunima.lemonsqueezy.com"
            target="_blank"
            className="col-span-1"
          >
            💖 Suport me by donation
          </LinkItem>
          <LinkItem href="/writing" className="col-span-1">
            ✅ Read my articles
          </LinkItem>
          <LinkItem
            href="https://moono.space"
            target="_blank"
            className="col-span-1"
          >
            💎 Checkout my apps (New)
          </LinkItem>
        </div>
      </div>
    </section>
  )
}
