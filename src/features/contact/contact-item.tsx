'use client'

import * as React from 'react'
import Link from 'next/link'
import { Button, toast } from '@shared/components'

export interface ContactItemData {
  href: string
  label: string
}

interface ContactItemProps {
  contact: ContactItemData
  children: React.ReactNode
}

export function ContactItem({ contact, children }: ContactItemProps) {
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
      className="transition-all duration-500 hover:-translate-y-1 bg-surface"
      onClick={() => {
        if (isEmail) {
          copyEmailToClipboard()
        }
      }}
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
