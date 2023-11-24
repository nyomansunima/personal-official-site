import Image from 'next/image'

export default function ServiceIntroSection() {
  return (
    <section
      className="flex flex-col"
      data-animation="body-background-transition"
    >
      <div className="flex flex-col container mx-auto px-5 pt-24 pb-40 laptop:px-20 laptop:pt-40 laptop:pb-80">
        <div className="flex flex-wrap gap-x-10 text-6xl laptop:text-9xl !leading-none gap-y-5 items-center">
          <span
            data-cursor-size="200"
            data-cursor-exclusion
            data-animation="text-char-slide-up"
          >
            I
          </span>
          <span
            data-cursor-size="200"
            data-cursor-exclusion
            data-animation="text-char-slide-up"
          >
            crafting
          </span>
          <span
            data-cursor-size="200"
            data-cursor-exclusion
            data-animation="text-char-slide-up"
          >
            digitals
          </span>
          <span
            className="w-5/12 h-52 rounded-full overflow-hidden relative hidden laptop:block"
            data-animation="fade"
            data-animation-delay=".4"
            data-cursor-size="80"
            data-cursor-text="Services"
          >
            <Image
              src={'/images/service/service-intro-image.png'}
              alt="Services"
              fill
              className="object-cover transition-all duration-1000 hover:scale-105"
            />
          </span>
          <span
            data-cursor-size="200"
            data-cursor-exclusion
            data-animation="text-char-slide-up"
          >
            solutions.
          </span>
        </div>

        <div
          className="flex flex-col laptop:w-10/12 mt-20 laptop:mt-36"
          data-animation="slide-up"
          data-animation-delay=".4"
        >
          <p
            className="text-xl laptop:text-2xl leading-relaxed"
            data-animation-target
          >
            In today's fast-paced digital landscape, having a dynamic and
            user-friendly app is no longer a luxury; it's a necessity. I
            understand the importance of staying ahead in the ever-evolving
            world of technology. That's why I offer cutting-edge services that
            bring your vision to life and drive your business forward.
          </p>
        </div>
      </div>
    </section>
  )
}
