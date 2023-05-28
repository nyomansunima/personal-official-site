import { Document } from 'react-iconly'
import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Blogs',
  name: 'blog',
  type: 'document',
  icon: Document,
  fields: [
    defineField({
      title: 'Slug',
      description: 'Used as a path of url',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    }),
    defineField({
      title: 'Thumbnail',
      description: 'The featured image to showing in the post',
      name: 'thumbnail',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      title: 'Title',
      description: 'Title of article post',
      name: 'title',
      type: 'string'
    }),
    defineField({
      title: 'Short Descrition',
      description: 'Meta description',
      name: 'desc',
      type: 'text'
    }),
    defineField({
      title: 'Featured',
      description: 'Is this post will be featured for other reader',
      name: 'featured',
      type: 'boolean'
    }),
    defineField({
      title: 'Tags',
      description: 'Pick the tags for article',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'markdown'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'thumbnail'
    }
  }
})
