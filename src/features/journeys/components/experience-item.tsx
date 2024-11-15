import Link from 'next/link'
import * as React from 'react'

export interface ExperienceItemData {
  team: string
  position: string
  timeline: string
  teamUrl: string
}

interface ExperienceItemProps {
  experience: ExperienceItemData
}

export function ExperienceItem({
  experience,
}: ExperienceItemProps): React.ReactElement {
  const { team, position, timeline, teamUrl } = experience

  return (
    <div className="flex flex-col tablet:flex-row items-start tablet:items-center text-sm gap-2 py-2 group">
      <Link
        href={teamUrl}
        target="_blank"
        className="flex items-center font-medium flex-grow"
      >
        {team}
      </Link>
      <div className="flex items-center gap-2">
        <span className="text-foreground/40 transition-all duration-300 group-hover:text-foreground group-hover:font-medium">
          {position}
        </span>
        <span className="text-foreground/40 transition-all duration-300 group-hover:text-foreground group-hover:font-medium">
          {timeline}
        </span>
      </div>
    </div>
  )
}
