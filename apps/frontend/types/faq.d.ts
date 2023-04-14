export interface FAQ {
  _id: string
  question: string
  answer: string
}

export interface QuestionGroupByCategory {
  _id: string
  title: string
  faqs: FAQ[]
}
