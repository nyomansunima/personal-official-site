import {Folder} from 'react-iconly'

/**
 * # inspirationListSchema
 *
 * the list of inspiration
 * including with the sources
 */
const inspirationListSchema = {
  title: 'Inspirations',
  name: 'inspiration',
  icon: Folder,
  type: 'document',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'url',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
    },
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
    {
      title: 'Source',
      name: 'source',
      type: 'reference',
      to: [{type: 'inspirationSource'}],
    },
  ],
}
export default inspirationListSchema
