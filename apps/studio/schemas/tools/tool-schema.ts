import {Folder} from 'react-iconly'

/**
 * # toolSchema
 *
 * schema for handle the
 * tools type of list
 */
const toolSchema = {
  title: 'Stack & Tools',
  name: 'tool',
  icon: Folder,
  type: 'document',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
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
      title: 'URL',
      name: 'url',
      type: 'url',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}

export default toolSchema
