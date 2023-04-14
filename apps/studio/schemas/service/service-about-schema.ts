import {Folder} from 'react-iconly'

/**
 * # serviceAboutSchema
 *
 * schema about the service
 * showing info about the service
 */
const serviceAboutSchema = {
  title: 'Service About',
  name: 'serviceAbout',
  type: 'object',
  icon: Folder,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Descriptions',
      name: 'descs',
      type: 'array',
      of: [{type: 'text'}],
    },
  ],
}
export default serviceAboutSchema
