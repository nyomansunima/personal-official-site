import { Video } from 'react-iconly'

/**
 * # storySchema
 *
 * the schme of story
 * that can tell what are you currently doing
 */
const storySchema = {
  title: 'Stories',
  name: 'story',
  type: 'document',
  icon: Video,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'text',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'string',
    },
    {
      title: 'Accent Color',
      name: 'accentColor',
      type: 'color',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
      media: 'image',
    },
  },
}
export default storySchema
