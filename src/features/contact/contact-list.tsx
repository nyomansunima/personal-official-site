'use client'

import * as React from 'react'
import { ContactItem } from './contact-item'
import { useQuery } from '@tanstack/react-query'
import * as contactService from './contact-service'

export function ContactList() {
  const { data, isSuccess } = useQuery({
    queryKey: ['contacts'],
    queryFn: contactService.getContacts,
  })

  return (
    <div className="flex flex-wrap items-center gap-2">
      {isSuccess &&
        data &&
        data.map((con, index) => (
          <ContactItem contact={con} key={index}>
            {con.label}
          </ContactItem>
        ))}
    </div>
  )
}
