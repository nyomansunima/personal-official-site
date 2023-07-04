import { Send } from 'react-iconly'
import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Timelines',
  name: 'timeline',
  type: 'document',
  icon: Send,
  fields: [
    defineField({
      title: 'Timeline',
      name: 'timeline',
      type: 'string',
    }),
    defineField({
      title: 'Is Story',
      name: 'isStory',
      type: 'boolean',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
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
    defineField({
      title: 'URL',
      name: 'url',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'timeline',
    },
  },
})
