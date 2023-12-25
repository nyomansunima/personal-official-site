'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

type Props = {} & React.HTMLAttributes<HTMLDivElement> &
  React.HtmlHTMLAttributes<HTMLDivElement>

export function DynamicLogo(props: Props) {
  return (
    <div {...props}>
      <svg viewBox="0 0 265 297" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M140.429 264.679C77.9503 264.679 26.5634 209.94 53.9355 153.776C68.0372 124.841 86.6749 99.4546 108.67 79.0275C159.88 31.4698 224.664 85.7044 224.664 155.591V163.703C224.664 219.39 186.884 264.679 140.429 264.679Z"
          fill="#04061D"
        />
        <path
          d="M127.4 11.3227C197.285 10.9167 254.168 67.2414 254.45 137.127L254.577 168.566C254.839 233.211 202.646 285.92 138.002 286.295C67.8946 286.703 10.8313 230.199 10.5479 160.091L10.4241 129.457C10.1618 64.5901 62.5338 11.6996 127.4 11.3227Z"
          stroke="#04061D"
          strokeWidth="19.819"
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
    </div>
  )
}
