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
      name: 'seo'
    },
    {
      title: '🍀 Content',
      name: 'content'
    }
  ],
  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'Content url that showing into the blog',
      options: {
        source: 'title'
      }
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'The article title, also use in a seo'
    },
    {
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
      description: 'The image thumbnail and seo og image'
    },
    {
      title: 'Short Description',
      name: 'desc',
      type: 'text',
      description: 'Short description to show as summary'
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      description: 'Start to relate the article using tags',
      of: [{ type: 'reference', to: [{ type: 'blogTag' }] }]
    },
    {
      title: 'Content',
      name: 'content',
      type: 'blockContent',
      description: 'Your content in'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'thumbnail'
    }
  }
}

export default blogSchema
