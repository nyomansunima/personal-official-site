import { Discovery } from 'react-iconly'

/**
 * # exploreSchema
 *
 * the schema of explore
 * type of work project explorations
 */
const exploreSchema = {
  title: 'Explorations',
  name: 'exploration',
  type: 'document',
  icon: Discovery,
  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'string',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
    },
    {
      title: 'Abouts',
      name: 'abouts',
      type: 'array',
      of: [{ type: 'text' }],
    },
    {
      title: 'Actions',
      name: 'actions',
      type: 'array',
      of: [
        {
          title: 'Action',
          type: 'object',
          fields: [
            {
              title: 'Label',
              name: 'label',
              type: 'string',
            },
            {
              title: 'URL',
              name: 'url',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      title: 'Stacks',
      name: 'stacks',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tool' }] }],
    },
    {
      title: 'Content',
      name: 'content',
      type: 'content',
    },
  ],
}

export default exploreSchema
