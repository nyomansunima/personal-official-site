import * as React from 'react'
import jsonData from './data.json'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'

interface FAQData {
  question: string
  answer: string
}

interface FAQItemProps {
  faq: FAQData
  position: number
}

const faqs = jsonData.faqs as FAQData[]

export function FAQListSection() {
  return (
    <section className="flex py-20 laptop:w-10/12 mx-auto">
      <div className="w-full">
        <Accordion type="single" collapsible className="grid grid-cols-1 gap-2">
          {faqs.map((faq, index) => (
            <FAQItem faq={faq} position={index + 1} key={index} />
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export function FAQItem({ faq, position }: FAQItemProps) {
  const { question, answer } = faq

  return (
    <AccordionItem value={`item-${position}`} className="col-span-1">
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}
