import Link from 'next/link'

export default function AboutContactSection() {
  return (
    <section
      className="flex container mx-auto laptop:px-20 px-5"
      data-animation="slide-up"
    >
      <Link
        href="/contact"
        className="text-5xl laptop:text-8xl text-center !leading-tight"
        data-cursor-size="100"
        data-cursor-text="Contact"
        data-cursor-color="#0B20F3"
        data-animation-target
      >
        <div>Let's make your idea become reality. We can discuss anything.</div>
      </Link>
    </section>
  )
}
