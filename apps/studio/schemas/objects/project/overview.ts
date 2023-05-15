import {Folder} from 'react-iconly'

/**
 * # projectOverviewSchema
 *
 * the schema for project
 * that showing the overview data about
 * the projects
 */
const projectOverviewSchema = {
  title: 'Project Overview',
  name: 'projectOverview',
  type: 'object',
  icon: Folder,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
    },
    {
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
    },
  ],
}
export default projectOverviewSchema
