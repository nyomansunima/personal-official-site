import { Play } from 'react-iconly'

/**
 * # serviceSchema
 *
 * the schema for the service
 * including all of contents
 */
const serviceSchema = {
  title: 'Services',
  name: 'service',
  type: 'document',
  icon: Play,
  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'string',
      desc: 'Your service slug part of url',
    },
    {
      title: 'Overview about Service',
      name: 'overview',
      type: 'serviceOverview',
    },
    {
      title: 'About Service',
      name: 'about',
      type: 'serviceAbout',
    },
    {
      title: 'Service Purposed',
      name: 'purpose',
      type: 'servicePurpose',
    },
    {
      title: 'Process Service',
      name: 'process',
      type: 'serviceProcess',
    },
    {
      title: 'Tools Service',
      name: 'tools',
      type: 'serviceTool',
    },
  ],
  preview: {
    select: {
      title: 'overview.title',
      subtitle: 'slug',
      media: 'overview.thumbnail',
    },
  },
}

export default serviceSchema
