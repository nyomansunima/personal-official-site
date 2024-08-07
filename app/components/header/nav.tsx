import * as React from 'react'
import Link from 'next/link'

interface NavMenuItemProps {
  children: React.ReactNode
  href: string
  target?: React.HTMLAttributeAnchorTarget
}

function NavMenuItem({
  children,
  href,
  target,
}: NavMenuItemProps): React.ReactElement {
  return (
    <li className="">
      <Link
        href={href}
        target={target}
        className="flex h-10 px-4 justify-center items-center rounded-full bg-transparent border-transparent text-sm transition-all duration-300 hover:bg-secondary/80 hover:text-secondary-foreground hover:scale-95 origin-center"
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
        <NavMenuItem href="/writing">Writing</NavMenuItem>
        <NavMenuItem href="/speaks">Speaks</NavMenuItem>
        <NavMenuItem href="/resources">Resources</NavMenuItem>
        <NavMenuItem href="/blog">Blog</NavMenuItem>
        <NavMenuItem href="/about">About</NavMenuItem>
      </ul>
    </div>
  )
}
