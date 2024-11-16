import * as React from 'react'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'
import { mergeClass } from '@shared/utils/helper'

/**
 * Navigation links for the footer
 */
const footerMenus = [
  { label: 'Privacy policy', href: '/privacy' },
  { label: 'Terms of use', href: '/terms' },
  { label: 'Faqs', href: '/faqs' },
]

interface MenuItemProps {
  href: string
  children?: React.ReactNode
  className?: string
}

/**
 * Render a menu item with a link.
 *
 * @param {MenuItemProps} - The properties for the menu item.
 * @returns {React.ReactElement} The menu item component.
 */
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

/**
 * Render the list of menu items for the footer.
 *
 * @returns {React.ReactElement} The list of menu items.
 */
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

/**
 * Render the footer component.
 *
 * @returns {React.ReactElement} The footer component.
 */
export default function Footer(): React.ReactElement {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col text-foreground/60 gap-1">
        <p>
          Design in{' '}
          <span className="transition-all duration-300 hover:font-medium text-foreground cursor-pointer">
            Bali, Indonesia
          </span>{' '}
          for global audiences
        </p>
        <p>
          Connect with me{' '}
          <Link
            href={'/contact'}
            className="transition-all duration-300 hover:font-medium text-foreground"
          >
            @nyomansunima
          </Link>
        </p>
        <p>
          Support by feedback,{' '}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={'https://ko-fi.com/nyomansunima?ref=nyomansunima'}
                  target="_blank"
                  className="transition-all duration-300 hover:font-medium text-foreground"
                >
                  buy a coffee
                </Link>
              </TooltipTrigger>
              <TooltipContent>Get something free</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </p>
      </div>

      <div className="flex flex-col tablet:flex-row tablet:items-center py-7 tablet:justify-between mt-8">
        <span className="text-sm">
          Copyright &copy; 2024 - Alright Reserved
        </span>
        <FooterMenuList />
      </div>
    </footer>
  )
}
