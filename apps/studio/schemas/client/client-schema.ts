import { User } from 'react-iconly'

/**
 * # clientSchema
 *
 * the schema of client
 * for all project and partners
 */
const clientSchema = {
  title: 'Clients',
  name: 'client',
  type: 'document',
  icon: User,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Address',
      name: 'address',
      type: 'string',
    },
    {
      title: 'About',
      name: 'about',
      type: 'text',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'url',
      media: 'image',
    },
  },
}
export default clientSchema
