import { Career } from '~/types'

type Props = {
  career: Career
}

export function AboutCareerItem({ career }: Props) {
  return (
    <div className="flex flex-col">
      <span className="text-lg">{career.timeline}</span>
      <h4 className="text-2xl mt-4">{career.company}</h4>
      <p className="mt-1 text-lg">{career.role}</p>
      <div className="flex mt-5">
        <p className="rounded-full px-3 py-2 border-2 border-gray-100 dark:border-gray-900 leading-none">
          {career.type}
        </p>
      </div>
    </div>
  )
}
