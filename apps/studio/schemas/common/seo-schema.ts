import {Send} from 'react-iconly'

/**
 * # seoSchema
 *
 * the schema for
 * search engine optiomizations
 */
const seoSchema = {
  title: 'Seo',
  name: 'seo',
  icon: Send,
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
  ],
}

export default seoSchema
