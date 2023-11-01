type Process = {
  title: string
  desc: string
}

type Props = {
  position: number
  process: Process
}

export function ServiceProcessItem({ position, process }: Props) {
  return (
    <div
      className="flex flex-col p-6 rounded-2xl border border-gray-100 dark:border-gray-800 gap-6"
      data-cursor-size="80"
      data-cursor-exclusion
    >
      <h3 className="text-2xl font-medium leading-tight">
        {position + 1}. {process.title}
      </h3>
      <p className="text-lg leading-relaxed">{process.desc}</p>
    </div>
  )
}
