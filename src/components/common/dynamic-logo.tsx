'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

type Props = {} & React.HTMLAttributes<HTMLDivElement> &
  React.HtmlHTMLAttributes<HTMLDivElement>

export function DynamicLogo(props: Props) {
  return (
    <div {...props}>
      <svg
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full
      "
      >
        <path
          d="M339.852 362.11C280.514 403.778 195.204 386.062 183.743 314.467C177.838 277.582 178.609 241.042 185.875 206.973C202.793 127.654 300.49 135.956 347.098 202.329L352.509 210.033C389.647 262.921 383.971 331.129 339.852 362.11V362.11Z"
          className="fill-secondary"
        />
        <path
          d="M360.274 158.551L392.446 203.974C435.807 265.194 421.391 350.062 360.248 393.531C293.937 440.674 202.059 425.067 155.033 358.673L78.6341 250.807C58.0449 221.737 64.89 181.439 93.9231 160.799L147.84 122.467C216.484 73.6656 311.594 89.8212 360.274 158.551Z"
          className="stroke-secondary"
          strokeWidth="23"
        />
        <circle
          cx="114.507"
          cy="212.131"
          r="13.5"
          transform="rotate(78.1223 114.507 212.131)"
          className="fill-secondary"
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
        <DynamicLogo className="h-10 w-10" />
      </Link>
      {pathname.includes('blog') && <Link href="/blog">Blog</Link>}
      {pathname.includes('shop') && <Link href="/shop">Shop</Link>}
    </div>
  )
}
