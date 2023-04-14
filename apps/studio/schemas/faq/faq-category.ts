import {Folder} from 'react-iconly'

/**
 * # faqCategorySchema
 *
 * category of the faq
 * while using to grouping all
 * of the faq
 */
const faqCategorySchema = {
  title: 'FAQ Categories',
  name: 'faqCategory',
  icon: Folder,
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
  ],
}

export default faqCategorySchema
