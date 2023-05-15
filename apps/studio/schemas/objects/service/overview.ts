/**
 * # serviceOverviewSchema
 *
 * the schema of overview service
 * showing info summary about the service
 */
const serviceOverviewSchema = {
  title: 'Service Overview',
  name: 'serviceOverview',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
    },
    {
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
    },
    {
      title: 'Cursor Color',
      name: 'cursorColor',
      type: 'color',
    },
    {
      title: 'Description',
      name: 'desc',
      type: 'text',
    },
  ],
}
export default serviceOverviewSchema
