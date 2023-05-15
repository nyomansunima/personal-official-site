import {Folder} from 'react-iconly'

/**
 * # serviceProcessSchema
 *
 * schema process of service
 */
const serviceProcessSchema = {
  title: 'Service Process',
  name: 'serviceProcess',
  type: 'object',
  icon: Folder,
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
      name: 'desc',
      type: 'text',
    },
    {
      title: 'Detail',
      name: 'detail',
      type: 'object',
      fields: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
        },
        {
          title: 'Steps',
          name: 'steps',
          type: 'array',
          of: [
            {
              type: 'object',
              title: 'Step Process',
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
              ],
            },
          ],
        },
      ],
    },
  ],
}
export default serviceProcessSchema
