import {Folder} from 'react-iconly'

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
  icon: Folder,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'desc',
      type: 'text',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      title: 'URL',
      name: 'url',
      type: 'string',
    },
  ],
}
export default storySchema
