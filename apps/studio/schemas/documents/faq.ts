import { Scan } from 'react-iconly'
import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'FAQs',
  name: 'faq',
  icon: Scan,
  type: 'document',
  fields: [
    defineField({
      title: 'Question',
      name: 'question',
      type: 'string',
    }),
    defineField({
      title: 'Answer',
      name: 'answer',
      type: 'text',
    }),
    defineField({
      title: 'Group',
      name: 'group',
      type: 'string',
      options: {
        list: [
          {
            title: 'General',
            value: 'general',
          },
          {
            title: 'Clients',
            value: 'client',
          },
          {
            title: 'Works',
            value: 'work',
          },
        ],
        layout: 'radio',
      },
    }),
  ],
})
