import {Folder} from 'react-iconly'

/**
 * # projectClientSchema
 *
 * mapping data and schema
 * about the client of the projects
 */
const projectClientSchema = {
  title: 'Project Client',
  name: 'projectClient',
  type: 'object',
  icon: Folder,
  fields: [
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
  ],
}
export default projectClientSchema
