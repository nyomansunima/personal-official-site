import { serviceProcess } from '~/constants/service'
import { ServiceProcessItem } from './service-process-item'

export default function ServiceProcessSection() {
  return (
    <section className="flex flex-col container mx-auto laptop:px-20 px-5">
      <h2
        className="text-5xl laptop:text-8xl font-medium laptop:w-10/12 !leading-tight"
        data-cursor-size="200"
        data-cursor-exclusion
        data-animation="text-line-mask-opacity-scrub"
      >
        Here is where the great things come from.
      </h2>

      <div
        className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-5 gap-y-5 laptop:gap-y-8 mt-20 laptop:mt-32"
        data-animation="item-slide-up-scrub"
      >
        {serviceProcess.map((process, i) => (
          <ServiceProcessItem process={process} position={i} key={i} />
        ))}
      </div>
    </section>
  )
}
