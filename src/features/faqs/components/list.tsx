import * as React from 'react'
import jsonData from '../data.json'

import { Accordion } from '@shared/components/ui/accordion'
import { FAQData, FAQItem } from './faq-item'

const faqs = jsonData.faqs as FAQData[]

export function FAQListSection() {
  return (
    <section className="flex w-full laptop:w-10/12 mx-auto">
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
