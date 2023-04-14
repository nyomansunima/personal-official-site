import {Folder} from 'react-iconly'

/**
 * # serviceRequirementSchema
 *
 * the schema of requirement
 * service
 */
const serviceRequirementSchema = {
  title: 'Service Requirement',
  name: 'serviceRequirement',
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
export default serviceRequirementSchema
