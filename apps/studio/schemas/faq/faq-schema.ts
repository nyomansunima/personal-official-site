import {Folder} from 'react-iconly'

/**
 * # faqSchema
 *
 * all of the question list
 */
const faqSchema = {
  title: 'FAQs',
  name: 'faq',
  icon: Folder,
  type: 'document',
  fields: [
    {
      title: 'Question',
      name: 'question',
      type: 'string',
    },
    {
      title: 'Answer',
      name: 'answer',
      type: 'text',
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{type: 'faqCategory'}],
    },
  ],
}

export default faqSchema
