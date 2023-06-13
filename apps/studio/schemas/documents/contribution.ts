import { Game } from 'react-iconly'
import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Contributions',
  name: 'contribute',
  type: 'document',
  icon: Game,
  fields: [
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Short Descrition',
      name: 'desc',
      type: 'text',
    }),
    defineField({
      title: 'URL',
      name: 'url',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
      media: 'image',
    },
  },
})
