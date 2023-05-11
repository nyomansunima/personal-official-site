import { Heart2 } from 'react-iconly'

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
  icon: Heart2,
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
      title: 'URL',
      name: 'url',
      type: 'url',
    },
  ],
}
export default timelineSchema
