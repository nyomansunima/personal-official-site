import Link from 'next/link'
import { Button } from '~/components/ui/button'
import {
  TooltipTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from '~/components/ui/tooltip'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '~/components/ui/navigation-menu'

function Brand() {
  return (
    <Link href={'/'}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.1556 32.3852C12.3158 31.3017 9.37808 28.6397 8.12204 25.5796C6.87528 22.5421 7.27883 19.1185 10.1053 16.3646C12.7797 13.759 15.8064 11.6482 19.0294 10.1254C21.0747 9.15903 22.9299 9.00625 24.5205 9.41319C26.1164 9.8215 27.4962 10.8064 28.5562 12.1987C30.6835 14.9931 31.478 19.3798 30.0968 23.6891C28.0269 30.1468 21.7294 33.9581 16.1556 32.3852Z"
          stroke="black"
          stroke-width="1.19027"
        />
        <path
          d="M9.50934 23.4869C9.0889 23.1566 9.05892 22.5961 9.37577 22.241C9.69262 21.8859 10.286 21.8151 10.7065 22.1454C11.1269 22.4757 11.1569 23.0362 10.84 23.3913C10.5232 23.7464 9.92979 23.8172 9.50934 23.4869Z"
          stroke="black"
          stroke-width="1.19027"
        />
        <path
          d="M15.4398 33.0034C7.08443 33.0034 0.230127 25.6049 4.27392 18.2932C6.08103 15.0258 8.38733 12.1423 11.0719 9.77876C18.0858 3.60357 26.7192 10.9717 26.7192 20.3166C26.7192 27.3133 21.6603 33.0034 15.4398 33.0034Z"
          fill="black"
        />
        <ellipse
          cx="1.47691"
          cy="1.54318"
          rx="1.47691"
          ry="1.54318"
          transform="matrix(-0.415489 0.909598 -0.927789 -0.373106 8.75684 24.1145)"
          fill="white"
        />
      </svg>
    </Link>
  )
}

const thingsList = [
  {
    icon: 'fi fi-rr-asterik',
    href: '/projects',
    label: 'Projects',
    desc: 'Products and things that use publicly by people around the world',
  },
  {
    icon: 'fi fi-rr-beer',
    href: '/works',
    label: 'Works',
    desc: 'Top featured works including case studies and process from best products',
  },
  {
    icon: 'fi fi-rr-broom',
    href: '/playground',
    label: 'Playground',
    desc: 'The idea, concept, and scratch about the next products',
  },
]

function DropdownItem({ icon, label, desc, href }) {
  return (
    <li className="flex col-span-1 p-3 rounded-lg transition-all hover:bg-secondary">
      <Link href={href} className="h-full w-full flex gap-3 items-start">
        <i className={`${icon} text-lg`} />
        <div className="flex flex-col gap-2">
          <span className="text-base">{label}</span>
          <p className="text-sm opacity-40">{desc}</p>
        </div>
      </Link>
    </li>
  )
}

function DropdownList() {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-3 w-[700px] p-3">
      {thingsList.map((item, i) => (
        <DropdownItem {...item} key={i} />
      ))}
    </ul>
  )
}

function Navs() {
  return (
    <div className="ml-14 flex flex-grow">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Best things</NavigationMenuTrigger>
            <NavigationMenuContent>
              <DropdownList />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem asChild>
            <Link href={'/writing'} legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                Writing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem asChild>
            <Link href={'/speaks'} legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                Speaks
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem asChild>
            <Link href={'/about'} legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

function Actions() {
  return (
    <div className="flex items-center gap-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button
              asChild
              variant={'outline'}
              size={'icon'}
              className="transition-all duration-700 hover:scale-110"
            >
              <Link href={'https://ko-fi.com/nyomansunima'} target="_blank">
                <i className="fi fi-rr-heart" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Support me 💖</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <Button
              asChild
              variant={'outline'}
              size={'icon'}
              className="transition-all duration-700 hover:scale-110"
            >
              <Link href={'/resources'}>
                <i className="fi fi-rr-shop" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Buy something 🗳️</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <Button
              asChild
              variant={'secondary'}
              className="transition-all duration-700 hover:-translate-y-2"
            >
              <Link href={'/contact'}>Say Hi 🖐️</Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Connect 🖐️🖐️</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export default function Header() {
  return (
    <header className="flex items-center px-10 h-20 bg-white">
      <Brand />
      <Navs />
      <Actions />
    </header>
  )
}
