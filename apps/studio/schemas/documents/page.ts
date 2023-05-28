import { Folder } from 'react-iconly'
import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Pages',
  name: 'page',
  type: 'document',
  icon: Folder,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string'
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'bioContent', title: 'Bio' }]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current'
    }
  }
})
