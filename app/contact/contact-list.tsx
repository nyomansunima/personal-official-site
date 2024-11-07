import * as React from 'react'
import jsonData from './data.json'
import { ContactItem, ContactItemData } from './contact-item'

const contacts: ContactItemData[] = jsonData.contacts as ContactItemData[]

export default function ContactList() {
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
