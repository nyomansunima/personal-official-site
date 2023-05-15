import {Folder} from 'react-iconly'

/**
 * # projectTeamSchema
 *
 * mapping all teams
 * that collaborates in this project
 * will showing some info about the user
 *
 */
const projectTeamSchema = {
  title: 'Teams',
  name: 'projectTeam',
  icon: Folder,
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Responsibility',
      name: 'responsibility',
      type: 'string',
    },
    {
      title: 'Contact Info',
      name: 'contact',
      type: 'url',
    },
  ],
}
export default projectTeamSchema
