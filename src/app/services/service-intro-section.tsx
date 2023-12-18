import Image from 'next/image'

export default function ServiceIntroSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col container mx-auto px-5 pt-24 pb-40 laptop:px-20 laptop:pt-40 laptop:pb-80">
        <h2
          className="text-5xl laptop:text-8xl !leading-tight laptop:w-10/12"
          data-cursor-size="200"
          data-cursor-exclusion
          data-animation="text-char-opacity"
        >
          All service you need to grow business.
        </h2>

        <div
          className="flex flex-col laptop:w-10/12 mt-20 laptop:mt-36"
          data-animation="slide-up"
          data-animation-delay=".4"
        >
          <p
            className="text-xl laptop:text-xl !leading-relaxed"
            data-animation-target
          >
            In today's fast-paced digital landscape, having a dynamic and
            user-friendly app is no longer a luxury. it's a necessity. I
            understand the importance of staying ahead in the ever-evolving
            world of technology. That's why I offer cutting-edge services that
            bring your vision to life and drive your business forward.
          </p>
        </div>
      </div>
    </section>
  )
}
