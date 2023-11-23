import { Button } from '~/components/ui/button'
import Link from 'next/link'

export default function HomeLearnSection() {
  return (
    <section className="flex flex-col container mx-auto px-5 laptop:px-20">
      <h2
        className="text-5xl laptop:text-8xl !leading-tight laptop:w-11/12"
        data-cursor-size="200"
        data-cursor-exclusion
        data-animation="text-char-slide-up"
      >
        I share tips about design, development & crafting app.
      </h2>

      <div className="flex mt-24 gap-5">
        <Button variant="outline" asChild>
          <Link href={'https://instagram.com/nyomansunima'} target="_blank">
            <i className="fi fi-brands-instagram" />
            Instagram
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href={'https://twitter.com/nyomamsunime'} target="_blank">
            <i className="fi fi-brands-twitter" />
            Twitter
          </Link>
        </Button>
      </div>
    </section>
  )
}
