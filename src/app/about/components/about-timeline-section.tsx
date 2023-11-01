'use client'

import { useQuery } from '@tanstack/react-query'
import { commonService } from '~/services/common-service'
import { AboutTimelineItem } from './about-timeline-item'

export default function AboutTimelineSection() {
  const timelines = useQuery({
    queryKey: ['timelines'],
    queryFn: commonService.getAllTimelines,
  })

  return (
    <section className="flex flex-col container mx-auto laptop:px-20 px-5">
      <h2
        className="text-5xl laptop:text-8xl !leading-tight"
        data-animation="text-line-mask-opacity-scrub"
        data-cursor-size="200"
        data-cursor-exclusion
      >
        <span className="laptop:pl-20"></span>
        Everything goes according to timeline
      </h2>
      <div className="grid w-full grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 mt-36">
        {timelines.data &&
          timelines.data.map((timeline, i) => (
            <AboutTimelineItem key={i} timeline={timeline} />
          ))}
      </div>
    </section>
  )
}
