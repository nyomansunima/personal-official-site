import {Folder} from 'react-iconly'

/**
 * # timelineSchema
 *
 * the schema of timeline
 * to show the history of actions
 */
const timelineSchema = {
  title: 'Timelines',
  name: 'timeline',
  type: 'document',
  icon: Folder,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
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
  ],
}
export default timelineSchema
