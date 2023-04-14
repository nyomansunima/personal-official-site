import {Folder} from 'react-iconly'

/**
 * # InspirationSourceSchema
 *
 * source inspiration schema
 * showing the source where the
 * inspiration come
 */
const inspirationSourceSchema = {
  title: 'Inspiration Sources',
  name: 'inspirationSource',
  type: 'document',
  icon: Folder,
  fields: [
    {
      title: 'Icon',
      name: 'icon',
      type: 'image',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Username',
      name: 'username',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'string',
    },
  ],
}
export default inspirationSourceSchema
