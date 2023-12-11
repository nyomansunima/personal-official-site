import Image from 'next/image'

export default function ServiceMobileSection() {
  return (
    <section className="flex flex-co">
      <div className="flex flex-col laptop:flex-row-reverse container mx-auto laptop:px-20 px-5 py-28 laptop:py-64 gap-16 items-center">
        <div className="flex flex-col flex-1">
          <h2
            className="text-5xl laptop:text-8xl !leading-none"
            data-animation="text-char-slide-up"
          >
            Mobile application
          </h2>
          <div data-animation="slide-up" data-animation-delay=".2">
            <p
              className="text-xl laptop:text-xl !leading-relaxed mt-16"
              data-animation-target
            >
              Exclusively create mobile applications that work on both the iOS
              and Android platforms. Start with the idea, then throw it into
              design, and then develop your mobile application using special
              treatment. Start with a small device, then enhance to the next
              level.
            </p>
          </div>
        </div>
        <div
          className="relative overflow-hidden rounded-3xl w-full laptop:w-5/12 h-[300px] laptop:h-[625px]"
          data-animation="fade"
        >
          <Image
            src={'/images/service/mobile-service.png'}
            alt="Design Service"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
