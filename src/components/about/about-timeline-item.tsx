import { Timeline } from '~/types'

type Props = {
  timeline: Timeline
}

export function AboutTimelineItem({ timeline }: Props) {
  return (
    <div className="block col-span-1 border-l border-gray-200 dark:border-gray-800 py-16 px-5">
      <span className="text-lg text-neutral-400">{timeline.date}</span>

      <h3 className="text-xl mt-3 block">{timeline.title}</h3>
    </div>
  )
}
