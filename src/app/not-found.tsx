import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '~/components/ui/button'

export const metadata: Metadata = {
  title: 'Not Found',
  description: ' Opps, good luck. You’re missing the pages',
}

export default function NotFound() {
  return (
    <div className="container mx-auto pt-40 pb-44">
      <section className="flex flex-col items-center">
        <h2 className="font-heading font-medium leading-tight text-5xl text-center w-6/12">
          Opps, good luck. You’re missing the pages
        </h2>

        <p className="mt-8 text-lg leading-relaxed w-6/12 text-center opacity-60">
          You’re searching something wrong. This can be happen when the url is
          invalid or deleted, this mean your pages is not found. Start explore
          another one, we help you find better way to navigate through header
          and footer. “I’am your designer & developer”.
        </p>

        <div className="mt-16">
          <Button asChild variant={'secondary'} size={'lg'}>
            <Link href={'/'}>Wow, I’am Lucky</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
