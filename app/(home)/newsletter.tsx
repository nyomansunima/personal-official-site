import * as React from 'react'
import { NewsletterForm } from '~/blog/newsletter'

export function NewsletterSection(): React.ReactElement {
  return (
    <div className="flex flex-col py-20 laptop:py-36 items-center">
      <h2 className="text-2xl laptop:text-3xl !leading-tight text-center font-medium mt-10">
        Newsletter
      </h2>

      <p className="text-foreground/80 text-center tablet:w-8/12 laptop:w-5/12 mt-7 !leading-relaxed">
        Join the weekly newsletter about new idea, tips , and tricks about
        design, development, business, productivity and indie hackings. I
        sharing a lot of resources everyday and will notify to you.
      </p>

      <div className="flex mt-16 w-full laptop:w-7/12 justify-center">
        <NewsletterForm />
      </div>
    </div>
  )
}
