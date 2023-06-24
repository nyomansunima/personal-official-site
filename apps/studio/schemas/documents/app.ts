import { Category } from 'react-iconly'
import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Apps',
  name: 'app',
  type: 'document',
  icon: Category,
  fields: [
    defineField({
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Tagline',
      name: 'tagline',
      type: 'text',
    }),
    defineField({
      title: 'URL',
      name: 'url',
      type: 'url',
    }),
  ],
})
