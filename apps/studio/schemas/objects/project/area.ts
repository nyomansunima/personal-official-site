import {Folder} from 'react-iconly'

/**
 * # projectAreaSchema
 *
 * mapping the area of user to
 * collaborate including the roles, and responsible
 *
 */
const projectAreaSchema = {
  title: 'Project Areas',
  name: 'projectArea',
  type: 'object',
  icon: Folder,
  fields: [
    {
      title: 'Role',
      name: 'role',
      type: 'string',
    },
    {
      title: 'Responsibilities',
      name: 'responsibilities',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
export default projectAreaSchema
