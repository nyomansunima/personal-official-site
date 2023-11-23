import { serviceLists } from '~/constants/service'
import { ServiceListItem } from './service-list-item'

export default function ServiceListSection() {
  return (
    <section className="flex flex-col container mx-auto laptop:px-20 px-5 laptop:gap-32 gap-16">
      {serviceLists.map((service, i) => (
        <ServiceListItem service={service} position={i} key={i} />
      ))}
    </section>
  )
}
