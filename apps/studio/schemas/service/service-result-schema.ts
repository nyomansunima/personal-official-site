import {Folder} from 'react-iconly'

/**
 * # serviceResultSchema
 *
 * the schema of service result
 * showing info about the service finished
 * project
 */
const serviceResultSchema = {
  title: 'Service Result',
  name: 'serviceResult',
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
  ],
}
export default serviceResultSchema
