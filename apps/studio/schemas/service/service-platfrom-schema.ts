import {Folder} from 'react-iconly'

/**
 * # servicePlatformSchema
 *
 * the schema of service platform
 */
const servicePlatformSchema = {
  title: 'Service Platform',
  name: 'servicePlatform',
  type: 'object',
  icon: Folder,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'desc',
      type: 'text',
    },
    {
      title: 'Platforms',
      name: 'platforms',
      type: 'array',
      of: [
        {
          title: 'Platform Item',
          type: 'object',
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
          ],
        },
      ],
    },
  ],
}
export default servicePlatformSchema
