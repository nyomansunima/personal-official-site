import { Play } from 'react-iconly'
import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Stories',
  name: 'story',
  type: 'document',
  icon: Play,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
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
    },
  },
})
