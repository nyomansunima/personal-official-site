'use client'

import { useQuery } from '@tanstack/react-query'
import { commonService } from '~/services/common-service'
import { AboutCareerItem } from './about-career-item'

export default function AboutCareerSection() {
  const careers = useQuery({
    queryKey: ['careers'],
    queryFn: commonService.getAllCareers,
  })

  return (
    <section
      className="flex flex-col container mx-auto laptop:px-20 px-5"
      data-animation="body-background-transition"
    >
      <h2
        className="text-5xl laptop:text-8xl !leading-tight"
        data-animation="text-char-slide-down"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        <span className="laptop:pl-20"></span>
        My career is about dedication and hard work.
      </h2>

      <div
        className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-10 mt-36 w-full"
        data-animation="item-slide-up-scrub"
      >
        {careers.data &&
          careers.data.map((career, i) => (
            <AboutCareerItem key={i} career={career} />
          ))}
      </div>
    </section>
  )
}
