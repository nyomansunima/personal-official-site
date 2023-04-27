import { Upload } from 'react-iconly'

/**
 * # repoSchema
 *
 * the schema of repo
 * resource from where the project come
 */
const repoSchema = {
  title: 'Repo Resources',
  name: 'repo',
  type: 'document',
  icon: Upload,
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
      title: 'Descriptions',
      name: 'desc',
      type: 'text',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
    },
    {
      title: 'Source',
      name: 'source',
      type: 'string',
      options: {
        list: [
          {
            title: 'Gitlab',
            value: 'gitlab',
          },
          {
            title: 'Github',
            value: 'github',
          },
        ],
      },
    },
  ],
}

export default repoSchema
