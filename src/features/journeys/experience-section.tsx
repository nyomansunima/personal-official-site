import * as React from 'react'
import { ExperienceItem, ExperienceItemData } from './experience-item'
import journeysData from './journeys-data.json'

const experiences = [
  ...journeysData.experiences,
].reverse() as ExperienceItemData[]

export function ExperienceSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col w-full tablet:w-11/12 mx-auto gap-4">
        <h3 className="text-lg font-medium flex-grow tablet:flex-grow-0">
          Experiences: Career & contributions
        </h3>

        <div className="flex flex-col gap-1 bg-surface p-3 border border-border rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          {experiences.map((exp, index) => (
            <ExperienceItem experience={exp} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
