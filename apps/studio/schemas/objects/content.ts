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
      type: 'code',
    },
  ],
}
export default contentSchema
