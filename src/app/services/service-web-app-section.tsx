import Image from 'next/image'

export default function ServiceWebAppSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col laptop:flex-row container mx-auto px-5 laptop:px-20 py-28 laptop:py-64 gap-16 items-center">
        <div className="flex flex-col flex-1">
          <h2
            className="text-5xl laptop:text-8xl !leading-none"
            data-animation="text-char-slide-up"
          >
            Web Application
          </h2>
          <div data-animation="slide-up" data-animation-delay=".2">
            <p
              className="text-xl laptop:text-xl !leading-relaxed mt-16"
              data-animation-target
            >
              Ready for a web experience that's pure magic?, I don't just build
              Web App – weave digital spells that leave audiences enchanted.
              Make your application work well and powering your own business.
            </p>
          </div>
        </div>
        <div
          className="relative overflow-hidden rounded-3xl w-full laptop:w-5/12 h-[300px] laptop:h-[625px]"
          data-animation="fade"
        >
          <Image
            src={'/images/service/web-app-service.png'}
            alt="Design Service"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
