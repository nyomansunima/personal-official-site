import * as React from 'react'
import { ExperienceItem, ExperienceItemData } from './experience-item'
import jsonData from '../data.json'

const experiences = jsonData.experiences as ExperienceItemData[]
const sortedExperiences = [...experiences].reverse()

export function ExperienceSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col w-full laptop:w-10/12 mx-auto gap-4">
        <h3 className="text-lg font-medium flex-grow tablet:flex-grow-0">
          Experiences: Career & contributions
        </h3>

        <div className="flex flex-col gap-1 bg-ambient p-3 border border-border rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          {sortedExperiences.map((exp, i) => (
            <ExperienceItem experience={exp} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
