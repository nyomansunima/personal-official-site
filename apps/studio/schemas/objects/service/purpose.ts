import {Folder} from 'react-iconly'

/**
 * # servicePurposeSchema
 *
 * the schema purpose of
 * service
 */
const servicePurposeSchema = {
  title: 'Service Purpose',
  name: 'servicePurpose',
  type: 'object',
  icon: Folder,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Decription',
      name: 'desc',
      type: 'text',
    },
    {
      title: 'Purposes',
      name: 'purposes',
      type: 'array',
      of: [
        {
          title: 'Item Purpose',
          type: 'object',
          fields: [
            {
              title: 'Icon code',
              name: 'iconCode',
              type: 'string',
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
export default servicePurposeSchema
