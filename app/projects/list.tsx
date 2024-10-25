import * as React from 'react'
import { ProjectData, ProjectItem } from './item'
import jsonData from './data.json'

const projects = jsonData.projects as ProjectData[]

export function ProjectsListSection(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 tablet:grid-cols-2 w-full gap-2 tablet:gap-3">
        {projects.map((project, i) => (
          <ProjectItem project={project} key={i} />
        ))}
      </div>
    </div>
  )
}
