'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

type Props = {} & React.HTMLAttributes<HTMLDivElement> &
  React.HtmlHTMLAttributes<HTMLDivElement>

export function DynamicLogo(props: Props) {
  return (
    <div {...props}>
      <svg viewBox="0 0 261 311" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M135.078 265.588C75.2819 264.179 27.3354 210.633 54.7981 157.497C68.9465 130.123 87.3561 106.247 108.868 87.1925C158.95 42.8313 219.729 96.1973 218.154 163.083L217.971 170.847C216.716 224.142 179.538 266.635 135.078 265.588V265.588Z"
          fill="#04061D"
        />
        <path
          d="M247.61 136.38L246.623 186.948C245.416 248.823 194.277 298.092 132.4 296.994C65.2942 295.804 11.9549 240.44 13.2639 173.336L14.2353 123.539C15.4464 61.4516 66.7616 12.0127 128.851 13.1142C195.744 14.3008 248.915 69.489 247.61 136.38Z"
          stroke="#04061D"
          stroke-width="18.9733"
        />
      </svg>
    </div>
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
        <DynamicLogo className="h-7 w-7" />
      </Link>
      {pathname.includes('blog') && <Link href="/blog">Blog</Link>}
      {pathname.includes('shop') && <Link href="/shop">Shop</Link>}
    </div>
  )
}
