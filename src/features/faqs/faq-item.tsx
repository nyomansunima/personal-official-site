import * as React from 'react'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@shared/components'

export interface FAQData {
  question: string
  answer: string
}

interface FAQItemProps {
  faq: FAQData
  position: number
}

export function FAQItem({ faq, position }: FAQItemProps) {
  const { question, answer } = faq

  return (
    <AccordionItem
      value={`item-${position}`}
      className="col-span-1 transition-all duration-300 hover:-translate-y-1"
    >
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}
