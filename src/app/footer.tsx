import Link from 'next/link'
import { Button } from '~/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '~/components/ui/tooltip'

function MenuItem({ href, children }) {
  return (
    <li className="flex items-center justify-center px-3 py-2 rounded-xl bg-transparent hover:bg-secondary transition-all duration-500">
      <Link href={href} className="w-full h-full">
        {children}
      </Link>
    </li>
  )
}

function FooterMenuList() {
  const menus = [
    { label: 'Privacy policy', href: '/privacy' },
    { label: 'Terms of use', href: '/terms' },
  ]

  return (
    <div className="flex">
      <ul className="flex items-center gap-2">
        {menus.map((item, index) => (
          <MenuItem key={index} href={item.href}>
            {item.label}
          </MenuItem>
        ))}
      </ul>
    </div>
  )
}

function SocialItem({ href, icon, label }) {
  return (
    <li className="flex">
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant={'outline'}
            size={'icon'}
            asChild
            className="text-base scale-110"
          >
            <Link href={href} target="_blank">
              <i className={icon} />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>
    </li>
  )
}

function SocialMediaList() {
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

  return (
    <div className="flex justify-center py-10">
      <TooltipProvider>
        <ul className="flex items-center justify-center gap-3">
          {socials.map((item, index) => (
            <SocialItem {...item} key={index} />
          ))}
        </ul>
      </TooltipProvider>
    </div>
  )
}

function MainMenuItem({ label, items }) {
  return (
    <div className="flex flex-col col-span-1 gap-5">
      <span className="text-lg font-bold ml-3">{label}</span>

      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <MenuItem href={item.href} key={index}>
            {item.label}
          </MenuItem>
        ))}
      </ul>
    </div>
  )
}

function MainMenuList() {
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

  return (
    <div className="flex justify-center py-40">
      <div className="grid grid-cols-5 gap-10 w-10/12">
        {menus.map((item, index) => (
          <MainMenuItem {...item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col border-t border-border">
        <MainMenuList />
        <SocialMediaList />
      </div>
      <div className="flex items-center px-10 border-t border-border py-7 justify-between">
        <span>Copyright &copy; 2024 - Alright Reserved</span>
        <FooterMenuList />
      </div>
    </footer>
  )
}
