import * as React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const socials = [
  {
    label: 'Follow on twitter',
    href: 'https://twitter.com/nyomansunima',
    icon: 'fi fi-brands-twitter',
  },
  {
    label: 'Connect now',
    href: 'https://linkedin.com/in/nyomansunima',
    icon: 'fi fi-brands-linkedin',
  },
  {
    label: 'See story',
    href: 'https://facebook.com/nyomansunima',
    icon: 'fi fi-brands-facebook',
  },
  {
    label: 'Send message',
    href: 'mailto:hi@nyomansunima.one',
    icon: 'fi fi-rr-envelope',
  },
  {
    label: 'See the gallery',
    href: 'https://instagram.com/nyomansunima',
    icon: 'fi fi-brands-instagram',
  },
  {
    label: 'Coding projects',
    href: 'https://github.com/nyomansunima',
    icon: 'fi fi-brands-github',
  },
  {
    label: 'Design projects',
    href: 'https://dribbble.com/nyomansunima',
    icon: 'fi fi-brands-dribbble',
  },
]

export function SocialMediaList(): React.ReactElement {
  return (
    <div className="flex justify-center px-5 py-10">
      <ul className="flex flex-wrap items-center justify-center gap-3">
        {socials.map((item, index) => (
          <SocialItem {...item} key={index} />
        ))}
      </ul>
    </div>
  )
}

export function SocialItem({ href, icon, label }): React.ReactElement {
  return (
    <li className="flex">
      <Button
        variant={'outline'}
        size={'icon'}
        asChild
        className="text-sm h-12 w-12 transition-all duration-500 hover:scale-95 bg-ambient"
      >
        <Link href={href} target="_blank">
          <i className={icon} />
        </Link>
      </Button>
    </li>
  )
}
