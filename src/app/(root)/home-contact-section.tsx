import Link from 'next/link'

export default function HomeContactSection() {
  return (
    <section className="flex flex-col container mx-auto px-5 laptop:px-20">
      <Link href={'/contact'}>
        <h2
          className="text-5xl laptop:text-8xl !leading-tight laptop:w-11/12 mx-auto text-center"
          data-cursor-size="100"
          data-animation="text-char-slide-up"
          data-cursor-text="Contact me"
          data-cursor-color="#2723ff"
        >
          Tell me about your problem.
        </h2>
      </Link>
    </section>
  )
}
