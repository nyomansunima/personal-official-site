import * as React from 'react'
import Link from 'next/link'

interface NavMenuItemProps {
  children: React.ReactNode
  href: string
  target?: React.HTMLAttributeAnchorTarget
}

export function NavMenuItem({
  children,
  href,
  target,
}: NavMenuItemProps): React.ReactElement {
  return (
    <li className="">
      <Link
        href={href}
        target={target}
        className="flex h-10 px-4 justify-center items-center rounded-full bg-transparent border border-transparent hover:border-border text-sm transition-all duration-300 origin-center"
      >
        {children}
      </Link>
    </li>
  )
}

export function Navs(): React.ReactElement {
  return (
    <div className="flex flex-grow justify-center absolute inset-x-0">
      <ul className="hidden laptop:flex list-none">
        <NavMenuItem href="/works">Works</NavMenuItem>
        <NavMenuItem href="/sharing">Sharing</NavMenuItem>
        <NavMenuItem href="/resources">Resources</NavMenuItem>
        <NavMenuItem href="/about">About</NavMenuItem>
      </ul>
    </div>
  )
}
