'use clinet'

import * as React from 'react'
import { Accordion } from '@shared/components/ui/accordion'
import { FAQItem } from './faq-item'
import { useQuery } from '@tanstack/react-query'
import * as faqService from './faq-service'

export function FAQListSection() {
  const { isSuccess, data } = useQuery({
    queryKey: ['faqs'],
    queryFn: faqService.getFAQs,
  })

  return (
    <section className="flex w-full laptop:w-10/12 mx-auto">
      <div className="w-full">
        <Accordion type="single" collapsible className="grid grid-cols-1 gap-2">
          {isSuccess &&
            data &&
            data.map((faq, index) => (
              <FAQItem faq={faq} position={index + 1} key={index} />
            ))}
        </Accordion>
      </div>
    </section>
  )
}
