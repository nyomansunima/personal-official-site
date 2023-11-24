import { Timeline } from '~/types'

type Props = {
  timeline: Timeline
}

export function AboutTimelineItem({ timeline }: Props) {
  return (
    <div className="block col-span-1 dark:border-gray-800 py-16 px-5">
      <span className="text-lg">{timeline.date}</span>

      <h3 className="text-xl mt-3 block">{timeline.title}</h3>
    </div>
  )
}
