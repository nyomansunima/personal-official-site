import * as React from 'react'
import { LinkItem } from './resource-item'

export function ResourcesSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex w-full">
        <div className="grid grid-cols-2 tablet:grid-cols-4 gap-2 w-full">
          <LinkItem href="/contact" className="col-span-1">
            Hire me
          </LinkItem>
          <LinkItem href="/contact" className="col-span-1 tablet:row-span-2">
            Become partner (business)
          </LinkItem>
          <LinkItem href="/works" className="col-span-1 tablet:row-span-2">
            See my works
          </LinkItem>
          <LinkItem
            href="https://nyomansunima.lemonsqueezy.com?ref=nyomansunima"
            target="_blank"
            className="col-span-1"
          >
            Check my goodies
          </LinkItem>
          <LinkItem
            href="https://tryweebo.one?ref=nyomansunima"
            target="_blank"
            className="tablet:row-span-2"
          >
            My web design business (NEW)
          </LinkItem>
          <LinkItem
            href="https://ko-fi.com/nyomansunima?ref=nyomansunima"
            target="_blank"
            className="col-span-1"
          >
            Suport me by donation
          </LinkItem>
          <LinkItem href="/contents" className="col-span-1">
            Learn together with me
          </LinkItem>
          <LinkItem
            href="https://moono.space?ref=nyomansunima"
            target="_blank"
            className="tablet:col-span-2"
          >
            My apps collection (NEW)
          </LinkItem>
          <LinkItem
            href="https://weecraft.club?ref=nyomansunima"
            target="_blank"
            className="tablet:col-span-2"
          >
            See tiny dev resources (NEW)
          </LinkItem>
        </div>
      </div>
    </section>
  )
}
