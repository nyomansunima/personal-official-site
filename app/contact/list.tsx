'use client'

import * as React from 'react'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { toast } from '~/components/ui/toast'

interface ContactItem {
  href: string
  label: string
}

interface PillItemProps {
  contact: ContactItem
  children: React.ReactNode
}

function PillItem({ contact, children }: PillItemProps) {
  const { href, label } = contact

  // check the link is email, would like to
  // use different method to contact
  const isEmail = href.includes('@gmail.com')

  function copyEmailToClipboard(): void {
    const email = href

    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast('Nice, Email already copied to clipboard')
      })
      .catch(() => {
        toast('Opps, Cannot copy the email')
      })
  }

  return (
    <Button
      asChild={!isEmail}
      variant={'outline'}
      size={'lg'}
      className="h-16 px-7 transition-all duration-500 hover:scale-95 bg-ambient"
      onClick={copyEmailToClipboard}
    >
      {isEmail ? (
        children
      ) : (
        <Link href={href} target="_blank">
          {children}
        </Link>
      )}
    </Button>
  )
}

export default function ContactList() {
  const contacts: ContactItem[] = [
    { label: 'Send Me Email', href: 'nyomansunima@gmail.com' },
    {
      label: 'Schedule Meeting',
      href: 'https://cal.com/nyomansunima/build-opportunity',
    },
    { label: 'Github', href: 'https://github.com/nyomansunima' },
    { label: 'Dribbble', href: 'https://dribbble.com/nyomansunima' },
    { label: 'Layers', href: 'https://layers.to/nyomansunima' },
    {
      label: 'Chat on WhatsApp',
      href: 'https://api.whatsapp.com/send?phone=6285161619109',
    },
    { label: 'Twitter', href: 'https://twitter.com/nyomansunima' },
    { label: 'Instagram', href: 'https://instagram.com/nyomansunima' },
    { label: 'Facebook', href: 'https://facebook.com/nyomansunima' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/nyomansunima' },
    { label: 'Threads', href: 'https://threads.net/@nyomansunima' },
  ]

  return (
    <div className="flex flex-wrap justify-center items-center mt-16 gap-3 tablet:w-10/12 laptop:w-6/12">
      {contacts.map((con, index) => (
        <PillItem contact={con} key={index}>
          {con.label}
        </PillItem>
      ))}
    </div>
  )
}
