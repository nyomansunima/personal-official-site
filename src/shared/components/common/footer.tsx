'use client'

import * as React from 'react'
import Link from 'next/link'
import { mergeClass } from '@shared/utils'
import { motion } from 'motion/react'

const footerMenus = [
  { label: 'Privacy policy', href: '/privacy' },
  { label: 'Terms of use', href: '/terms' },
  { label: 'FAQs', href: '/faqs' },
]

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
        'flex items-center justify-center text-sm p-1 rounded-xl bg-transparent transition-all hover:-translate-y-1 hover:text-foreground/60 duration-300',
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

export function Footer(): React.ReactElement {
  return (
    <footer className="flex flex-col" id="footer">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-surface border border-border rounded-2xl p-1"
      >
        <div className="flex flex-col text-foreground/60 gap-2 border border-border bg-surface p-3 rounded-xl text-sm">
          <p className="inline-block">
            <i className="fi fi-rr-rocket-lunch mr-2 inline" />
            Design in{' '}
            <span className="transition-all duration-300 font-medium hover:scale-95 text-foreground cursor-pointer">
              Bali, Indonesia
            </span>{' '}
            for global audiences
          </p>
          <p className="inline-block">
            <i className="fi fi-rr-social-network mr-2 inline" />
            Connect with me{' '}
            <Link
              href={'/contact'}
              className="transition-all duration-300 font-medium hover:scale-95 text-foreground"
            >
              @nyomansunima
            </Link>
          </p>
          <p className="inline-block">
            <i className="fi fi-rr-heart mr-2 inline" />
            Support me to{' '}
            <Link
              href={'/support'}
              className="transition-all duration-300 font-medium hover:scale-95 text-foreground"
            >
              create good things
            </Link>{' '}
            or support the .
          </p>
        </div>
      </motion.div>

      <div className="flex flex-col tablet:flex-row tablet:items-center py-7 tablet:justify-between mt-8">
        <span className="text-sm">
          Copyright &copy; 2024 - Alright Reserved
        </span>
        <FooterMenuList />
      </div>
    </footer>
  )
}
