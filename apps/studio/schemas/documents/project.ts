import { Activity } from 'react-iconly'
import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Projects',
  name: 'project',
  type: 'document',
  icon: Activity,
  fields: [
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      title: 'Thumbnail',
      description: 'The featured image to showing in the post',
      name: 'thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'Title',
      description: 'Title of article post',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Short Descrition',
      description: 'Meta description',
      name: 'desc',
      type: 'text',
    }),
    defineField({
      title: 'Tags',
      description: 'Pick the tags for projects',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      title: 'Comming Soon',
      name: 'isCommingSoon',
      type: 'boolean',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'thumbnail',
    },
  },
})
