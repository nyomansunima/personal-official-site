import Image from 'next/image'

export default function ServiceWebsiteSection() {
  return (
    <section className="flex flex-co">
      <div className="flex flex-col laptop:flex-row-reverse container mx-auto laptop:px-20 px-5 py-28 laptop:py-64 gap-16 items-center">
        <div className="flex flex-col flex-1">
          <h2
            className="text-5xl laptop:text-8xl !leading-none"
            data-animation="text-char-slide-up"
          >
            Website
          </h2>
          <div data-animation="slide-up" data-animation-delay=".2">
            <p
              className="text-xl laptop:text-xl !leading-relaxed mt-16"
              data-animation-target
            >
              Build your own platform with special features. I create
              world-class sites that help you out with your own business with
              new solutions. No matter what platform and stack you use, I will
              treat it better.
            </p>
          </div>
        </div>
        <div
          className="relative overflow-hidden rounded-3xl w-full laptop:w-5/12 h-[300px] laptop:h-[625px]"
          data-animation="fade"
        >
          <Image
            src={'/images/service/website-service.png'}
            alt="Design Service"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
