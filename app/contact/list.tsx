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
  const { href } = contact

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
      className="transition-all duration-500 hover:scale-95 bg-ambient"
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
    {
      label: 'Chat on WhatsApp',
      href: 'https://api.whatsapp.com/send?phone=6285161619109',
    },
  ]

  return (
    <div className="flex flex-wrap items-center gap-3">
      {contacts.map((con, index) => (
        <PillItem contact={con} key={index}>
          {con.label}
        </PillItem>
      ))}
    </div>
  )
}
