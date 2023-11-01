import Image from 'next/image'

type ServiceItem = {
  image: string
  title: string
  desc: string
}

type Props = {
  position: number
  service: ServiceItem
}

export function ServiceListItem({ position, service }: Props) {
  return (
    <div
      className={`flex flex-col gap-10 laptop:gap-16 mt-20 laptop:mt-32 ${
        position % 2 == 0 ? 'laptop:flex-row' : 'laptop:flex-row-reverse'
      }`}
    >
      <div className="flex w-full laptop:w-5/12 h-80 laptop:h-[560px] relative rounded-3xl overflow-hidden laptop:mx-10 image">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="flex h-full w-full object-cover transition-all duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-col laptop:w-1/2 gap-10 pt-16 content">
        <h2
          className="text-4xl laptop:text-7xl font-medium leading-tight"
          data-cursor-size="200"
          data-cursor-exclusion
          data-animation="text-char-slide-down"
        >
          {service.title}
        </h2>

        <div>
          <p className="leading-relaxed text-xl">{service.desc}</p>
        </div>
      </div>
    </div>
  )
}
