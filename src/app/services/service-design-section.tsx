import Image from 'next/image'

export default function ServiceDesignSection() {
  return (
    <section
      className="flex flex-col text-neutral-100"
      data-animation="body-background-transition"
      data-animation-body-color="#070410"
      data-cursor-color="#ffffff"
    >
      <div className="flex flex-col laptop:flex-row container mx-auto laptop:px-20 px-5 py-28 laptop:py-64 gap-16 items-center">
        <div className="flex flex-col flex-1">
          <h2
            className="text-5xl laptop:text-8xl !leading-none"
            data-animation="text-char-slide-up"
          >
            App design & visuals
          </h2>
          <div data-animation="slide-up" data-animation-delay=".2">
            <p
              className="text-xl laptop:text-2xl !leading-relaxed mt-16"
              data-animation-target
            >
              UI/UX Design for your next app product. Everything is seamlessly
              integrated and starts with an idea and turns into a real prototype
              to validate the business idea. Each design comes with a lot of
              benefits that ensure the app just works.
            </p>
          </div>
        </div>
        <div
          className="relative overflow-hidden rounded-3xl w-full laptop:w-5/12 h-[300px] laptop:h-[625px]"
          data-animation="fade"
        >
          <Image
            src={'/images/service/design-service.png'}
            alt="Design Service"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
