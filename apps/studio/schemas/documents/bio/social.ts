import { Send } from 'react-iconly'

/**
 * # socialSchema
 *
 * schema to maintain the social link profile
 */
const bioSocialSchema = {
  title: '💘 Bio Link Socials',
  name: 'bioSocial',
  type: 'document',
  icon: Send,
  fields: [
    {
      title: 'Icon code',
      name: 'iconCode',
      type: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'iconCode',
    },
  },
}

export default bioSocialSchema
