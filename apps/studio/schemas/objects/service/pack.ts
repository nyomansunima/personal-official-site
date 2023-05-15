import { Bag2 } from 'react-iconly'

/**
 * # serviceRequirementSchema
 *
 * the schema of requirement
 * service
 */
const servicePackSchema = {
  title: 'Service Packs',
  name: 'servicePack',
  type: 'object',
  icon: Bag2,
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
      title: 'Requirements',
      name: 'reqs',
      type: 'array',
      of: [
        {
          title: 'Requirement',
          type: 'object',
          fields: [
            {
              title: 'Icon Code',
              name: 'iconCode',
              type: 'string',
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
          ],
        },
      ],
    },
  ],
}
export default servicePackSchema
