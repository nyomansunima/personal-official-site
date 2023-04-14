import {Folder} from 'react-iconly'

/**
 * # projectSchema
 *
 * schema for project
 * show case about the projects
 *
 */
const projectSchema = {
  title: 'Projects',
  name: 'project',
  type: 'document',
  icon: Folder,
  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'string',
    },
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo',
    },
    {
      title: 'Project Overview',
      name: 'overview',
      type: 'projectOverview',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      title: 'Service Used',
      name: 'services',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'service'}]}],
    },
    {
      title: 'Client',
      name: 'client',
      type: 'projectClient',
    },
    {
      title: 'Playing Areas',
      name: 'area',
      type: 'projectArea',
    },
    {
      title: 'Project Teams',
      name: 'teams',
      type: 'array',
      of: [{type: 'projectTeam'}],
    },
  ],
}
export default projectSchema
