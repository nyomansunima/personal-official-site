import {Folder} from 'react-iconly'

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
      title: 'Service Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          {title: 'Partial Service', value: 'partial service'},
          {title: 'Full Service', value: 'full service'},
        ],
        layout: 'radio',
      },
    },
    {
      title: 'Overview Service',
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
      title: 'Platform Service',
      name: 'platform',
      type: 'servicePlatform',
    },
    {
      title: 'Tools Service',
      name: 'tools',
      type: 'serviceTool',
    },
    {
      title: 'Result Work',
      name: 'result',
      type: 'serviceResult',
    },
    {
      title: 'Requirements',
      name: 'requirement',
      type: 'serviceRequirement',
    },
  ],
}

export default serviceSchema
