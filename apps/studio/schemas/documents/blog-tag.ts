import { Category } from 'react-iconly'

/**
 * # blogTagSchema
 *
 * schema for manage the blog type
 * of content tags
 */
const blogTagSchema = {
  title: 'Blog Tags',
  name: 'blogTag',
  type: 'document',
  icon: Category,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Icon Code',
      name: 'iconCode',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'desc',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'iconCode',
    },
  },
}

export default blogTagSchema
