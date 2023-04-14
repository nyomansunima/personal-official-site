import {Folder} from 'react-iconly'

/**
 * # certificateSchema
 *
 * the schma of certificates
 */
const certificateSchema = {
  title: 'Certificates',
  name: 'certificate',
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
      title: 'Publisher',
      name: 'publisher',
      type: 'string',
    },
    {
      title: 'Published At',
      name: 'publishedAt',
      type: 'date',
    },
  ],
}
export default certificateSchema
