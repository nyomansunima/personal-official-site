import Link from 'next/link'

export default function ContactSection() {
  return (
    <section className="flex flex-col items-center container mx-auto laptop:px-20 px-5 text-center text-5xl laptop:text-8xl">
      <div animation-target>
        <h2
          className="font-medium mx-auto leading-tight"
          data-cursor-size="200"
          data-cursor-exclusion
        >
          Have a question?
        </h2>
        <Link
          href="/contact"
          className="font-normal dark:text-neutral-400"
          data-cursor-text="Contact Me"
          data-cursor-size="80"
          data-cursor-color="#011bf4"
        >
          Tell me about it
        </Link>
      </div>
    </section>
  )
}
