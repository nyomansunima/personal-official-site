import {Folder} from 'react-iconly'

/**
 * # serviceToolSchema
 *
 * tool schema of service
 * showing listed of number tools and stack in the service
 * used
 */
const serviceToolSchema = {
  title: 'Service Tools',
  name: 'serviceTool',
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
      title: 'Stacks',
      name: 'stacks',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tool'}]}],
    },
  ],
}
export default serviceToolSchema
