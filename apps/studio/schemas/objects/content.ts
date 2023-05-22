import { Image, Send, TickSquare } from 'react-iconly'

/**
 * # contentSchema
 *
 * the schema of portable
 * rich text editor
 */
const contentSchema = {
  title: 'Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      of: [
        {
          name: 'inlineAudio',
          type: 'file',
          title: 'Add Audio',
          options: {
            accept: 'audio/*'
          }
        }
      ]
    },
    {
      title: 'Insert Image',
      icon: Image,
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      title: 'Insert Code',
      icon: TickSquare,
      type: 'code',
      options: {
        withFilename: true
      }
    },
    {
      title: 'Embed Codepen',
      icon: Send,
      type: 'codepen'
    }
  ]
}
export default contentSchema
