import * as React from 'react'
import { ContactItem } from './contact-item'
import * as contactService from './contact-service'

const contacts = await contactService.getContacts()

export function ContactList() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {contacts.map((con, index) => (
        <ContactItem contact={con} key={index}>
          {con.label}
        </ContactItem>
      ))}
    </div>
  )
}
