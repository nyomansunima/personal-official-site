import Link from 'next/link'
import * as React from 'react'
import { mergeClass } from '~/lib/utils'

const menus = [
  {
    label: 'Things',
    items: [
      { label: 'Works', href: '/works' },
      { label: 'Projects', href: '/projects' },
      { label: 'Playground', href: '/playground' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
  {
    label: 'Learn & Grow',
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'Speaks', href: '/speaks' },
      { label: 'Writings', href: '/writing' },
      { label: 'Courses', href: '/' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Free Resources', href: '/resources' },
      { label: 'Books', href: '/' },
      { label: 'Guides', href: '/' },
      { label: 'Development', href: '/' },
      { label: 'Design', href: '/' },
      { label: 'Bio', href: '/bio' },
    ],
  },
  {
    label: 'Products',
    items: [
      { label: 'Weelab', href: '/' },
      { label: 'Moolo', href: '/' },
    ],
  },
  {
    label: 'Become Partners',
    items: [
      { label: 'Weebo', href: '/' },
      { label: 'Sonibble', href: '/' },
      { label: 'Yoolo', href: '/' },
    ],
  },
]

const footerMenus = [
  { label: 'Privacy policy', href: '/privacy' },
  { label: 'Terms of use', href: '/terms' },
]

export function MenuList(): React.ReactElement {
  return (
    <div className="flex justify-center py-16 tablet:py-28 laptop:py-40">
      <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5 gap-x-20 gap-y-16 laptop:gap-x-10 laptop:w-10/12">
        {menus.map((item, index) => (
          <MenuSection {...item} key={index} />
        ))}
      </div>
    </div>
  )
}

export function MenuSection({ label, items }): React.ReactElement {
  return (
    <div className="flex flex-col col-span-1 gap-4">
      <span className="text-sm font-medium ml-3">{label}</span>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <MenuItem href={item.href} className="text-foreground/80" key={index}>
            {item.label}
          </MenuItem>
        ))}
      </ul>
    </div>
  )
}

interface MenuItemProps {
  href: string
  children?: React.ReactNode
  className?: string
}

export function MenuItem({
  href,
  children,
  className,
}: MenuItemProps): React.ReactElement {
  return (
    <li
      className={`${mergeClass(
        'flex items-center justify-center text-sm px-3 py-2 rounded-xl bg-transparent transition-all hover:-translate-x-1 hover:text-foreground/60 duration-200',
        className,
      )}`}
    >
      <Link href={href} className="w-full h-full">
        {children}
      </Link>
    </li>
  )
}

export function FooterMenuList(): React.ReactElement {
  return (
    <div className="flex">
      <ul className="flex items-center gap-2">
        {footerMenus.map((item, index) => (
          <MenuItem key={index} href={item.href}>
            {item.label}
          </MenuItem>
        ))}
      </ul>
    </div>
  )
}
