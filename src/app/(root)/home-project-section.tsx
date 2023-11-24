import { Button } from '~/components/ui/button'
import Link from 'next/link'

export default function HomeProjectSection() {
  return (
    <section
      v-show="projects.length > 0"
      className="flex flex-col container mx-auto px-5 laptop:px-20 projects"
    >
      <h2
        className="text-5xl laptop:text-8xl !leading-tight laptop:w-11/12"
        data-cursor-size="200"
        data-cursor-exclusion
        data-animation="text-line-mask-opacity-scrub"
      >
        <span className="laptop:pl-20"></span>
        In crafting products.
        <br />I want to ensure my ability to provide more value.
      </h2>

      <div className="flex flex-col mt-24 gap-20"></div>

      <div className="flex justify-center mt-56">
        <Button asChild variant="outline">
          <Link href={'/works'}>
            More projects <i className="fi fi-sr-gamepad" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
