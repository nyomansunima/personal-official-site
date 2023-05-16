import { Heart2 } from 'react-iconly'

/**
 * # linkSchema
 *
 * the schema of link profile button
 */
const bioLinkSchema = {
  title: '🎉 Bio Links',
  name: 'bioLink',
  type: 'document',
  icon: Heart2,
  fields: [
    {
      title: 'Icon Code',
      name: 'iconCode',
      type: 'string',
    },
    {
      title: 'Label',
      name: 'label',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
    },
    {
      title: 'Custom Color',
      name: 'customColor',
      type: 'color',
    },
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'url',
    },
  },
}

export default bioLinkSchema
