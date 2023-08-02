import { Calendar } from 'react-iconly'
import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Blog Series',
  name: 'series',
  type: 'document',
  icon: Calendar,
  fields: [
    defineField({
      title: 'Image',
      name: 'thumbnail',
      type: 'image',
    }),
    defineField({
      title: 'SLUG',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Description',
      name: 'desc',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      media: 'thumbnail',
      title: 'title',
      subtitle: 'slug.current',
    },
  },
})
