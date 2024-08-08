import Link from 'next/link'
import { Button } from '~/components/ui/button'

function PillItem({ href, children }) {
  return (
    <Button
      asChild
      variant={'outline'}
      size={'lg'}
      className="h-16 px-7 transition-all duration-500 hover:scale-95 bg-ambient"
    >
      <Link href={href} target="_blank">
        {children}
      </Link>
    </Button>
  )
}

export default function ContactList() {
  const contacts = [
    { label: 'Send Me Email', href: 'mailto:hi@nyomansunima.one' },
    {
      label: 'Schedule Meeting',
      href: 'https://cal.com/nyomansunima/build-opportunity',
    },
    { label: 'Github', href: 'https://github.com/nyomansunima' },
    { label: 'Dribbble', href: 'https://dribbble.com/nyomansunima' },
    { label: 'Layers', href: 'https://layers.to/nyomansunima' },
    { label: 'Chat on WhatsApp', href: '/' },
    { label: 'Twitter', href: 'https://twitter.com/nyomansunima' },
    { label: 'Instagram', href: 'https://instagram.com/nyomansunima' },
    { label: 'Facebook', href: 'https://facebook.com/nyomansunima' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/nyomansunima' },
    { label: 'Become Partner', href: 'https://twitter.com/nyomansunima' },
  ]

  return (
    <div className="flex flex-wrap justify-center items-center mt-16 gap-4 tablet:w-10/12 laptop:w-6/12">
      {contacts.map((item, index) => (
        <PillItem href={item.href} key={index}>
          {item.label}
        </PillItem>
      ))}
    </div>
  )
}
