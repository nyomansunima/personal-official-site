import { Chat } from 'react-iconly'

/**
 * # socialSchema
 *
 * use to handle the social media
 * icons that integrated with this user
 */
const socialSchema = {
  title: 'Socials',
  name: 'social',
  type: 'document',
  icon: Chat,
  fields: [
    {
      title: 'Icon Code',
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
}

export default socialSchema
