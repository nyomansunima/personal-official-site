'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

type Props = {} & React.HTMLAttributes<HTMLDivElement> &
  React.HtmlHTMLAttributes<HTMLDivElement>

export function DynamicLogo(props: Props) {
  return (
    <Image
      src={'/images/logo.png'}
      height={36}
      width={36}
      alt="Logo"
      quality={100}
    />
  )
}

export function DynamicBrand() {
  const pathname = usePathname()

  return (
    <div className="flex items-center text-lg gap-3">
      <Link
        href="/"
        className="flex items-center transition-all duration-300 hover:scale-95"
      >
        <DynamicLogo />
      </Link>
      {pathname.includes('blog') && <Link href="/blog">Blog</Link>}
      {pathname.includes('shop') && <Link href="/shop">Shop</Link>}
    </div>
  )
}
