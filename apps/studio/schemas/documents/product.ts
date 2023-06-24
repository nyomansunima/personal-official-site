import { Bag2 } from 'react-iconly'
import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Products',
  name: 'product',
  type: 'document',
  icon: Bag2,
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
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      title: 'Initial Price',
      name: 'initialPrice',
      type: 'number',
    }),
    defineField({
      title: 'Short Description',
      name: 'desc',
      type: 'text',
    }),
    defineField({
      title: 'Highlight',
      name: 'highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              title: 'Property',
              name: 'property',
              type: 'string',
            }),
            defineField({
              title: 'Value',
              name: 'value',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      title: 'Context Selling',
      name: 'contexts',
      type: 'array',
      of: [
        {
          type: 'object',
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
        },
      ],
    }),
    defineField({
      title: 'About Product',
      name: 'about',
      type: 'markdown',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'images[0]',
    },
  },
})
