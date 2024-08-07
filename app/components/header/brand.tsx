'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function renderPathBrand(pathname: string): string {
  if (pathname === '/') {
    return 'home'
  } else {
    const brand = pathname.replace('/', '')

    // protect only for blog
    // shorten the path
    if (brand.includes('blog/')) {
      return 'blog'
    }

    return brand
  }
}

export function Brand(): React.ReactElement {
  const pathname = usePathname()

  return (
    <div className="text-foreground/50 text-sm gap-3 flex relative z-10">
      <Link
        href={'/'}
        className="transition-all duration-300 hover:-translate-x-1"
      >
        <span className="font-medium">nyomansunima.one</span>
      </Link>
      <span className="text-foreground hidden tablet:block">/</span>
      <span className="text-foreground transition-all duration-300 hover:-translate-x-1 cursor-pointer hidden tablet:block">
        {renderPathBrand(pathname)}
      </span>
    </div>
  )
}
