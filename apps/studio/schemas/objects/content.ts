/**
 * # contentSchema
 *
 * the schema of portable
 * rich text editor
 */
const contentSchema = {
  title: 'Content',
  name: 'content',
  type: 'array',
  of: [
    {
      type: 'block',
    },
    {
      type: 'image',
    },
    {
      title: '🧑🏿‍💻 Code',
      type: 'code',
      options: {
        withFilename: true,
      },
    },
  ],
}
export default contentSchema
