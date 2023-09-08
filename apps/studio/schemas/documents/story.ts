import { defineField, defineType } from 'sanity'
import { Game } from 'react-iconly'

export default defineType({
  name: 'story',
  title: 'Daily Stories',
  type: 'document',
  icon: Game,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
    },
  },
})
