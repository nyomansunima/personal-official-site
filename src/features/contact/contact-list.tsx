import * as React from 'react'
import { ContactItem, ContactItemData } from './contact-item'
import contactData from './contact-data.json'

const contacts = contactData.contacts as ContactItemData[]

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
