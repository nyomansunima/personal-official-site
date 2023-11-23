import { Button } from '~/components/ui/button'
import Link from 'next/link'

export default function HomeContactSection() {
  return (
    <section className="flex flex-col container mx-auto px-5 laptop:px-20 projects">
      <h2
        className="text-5xl laptop:text-8xl !leading-tight laptop:w-11/12 mx-auto text-center"
        data-cursor-size="200"
        data-cursor-exclusion
        data-animation="text-char-slide-up"
      >
        Let’s make your idea become reality. We can discuss anything.
      </h2>

      <div className="flex justify-center m-auto mt-24">
        <Button
          variant="primary"
          asChild
          className="transition-all duration-1000 hover:scale-95"
        >
          <Link href={'/contact'}>
            Get in touch <i className="fi fi-sr-heart" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
