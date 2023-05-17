import { Document } from 'react-iconly'

/**
 * # BlogSchema
 *
 * the schema of blog to showing the detail
 * article to the user
 */
const blogSchema = {
  title: 'Blogs',
  name: 'blog',
  type: 'document',
  icon: Document,
  groups: [
    {
      title: '💘 SEO',
      name: 'seo',
    },
    {
      title: '🍀 Content',
      name: 'content',
    },
  ],
  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'Content url that showing into the blog',
      options: {
        source: 'title',
      },
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Title of article',
    },
    {
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
    },
    {
      title: 'Short Description',
      name: 'desc',
      type: 'text',
      description: 'Short description to show as summary',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blogTag' }] }],
    },
    {
      title: 'Content',
      name: 'content',
      type: 'content',
    },
    {
      title: 'Other platform integrations',
      name: 'platform',
      description:
        'Integration with another blog platform automatically, Connect with another one by passing the id',
      type: 'object',
      fields: [
        {
          title: 'Dev.to',
          name: 'devto',
          type: 'string',
        },
        {
          title: 'Hashnode',
          name: 'hashnode',
          type: 'string',
        },
        {
          title: 'Medium',
          name: 'medium',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'thumbnail',
    },
  },
}

export default blogSchema
