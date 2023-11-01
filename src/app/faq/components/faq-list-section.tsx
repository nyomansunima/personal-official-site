import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/app/components/ui/accordion'
import { commonService } from '~/services/common-service'

export default async function FaqListSection() {
  const faqs = await commonService.getAllFaq()

  return (
    <section className="flex container justify-center px-5 laptop:px-20 gap-10">
      {faqs && (
        <Accordion
          type="single"
          collapsible
          className="flex flex-col w-full laptop:w-7/12 gap-2"
        >
          {faqs.map((faq, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </section>
  )
}
