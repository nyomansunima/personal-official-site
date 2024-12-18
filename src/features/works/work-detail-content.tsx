import { ArticleContent } from '@shared/components'
import * as React from 'react'
import { getWorkDetail, WorkFrontMatter } from './work-service'
import Link from 'next/link'
import { parseReadableDate } from '@shared/utils'

type WorkDetailContentProps = {
  slug: string
}

type OverviewProps = {
  meta: WorkFrontMatter
}

function Overview({ meta }: OverviewProps): React.ReactElement {
  const { roles, responsibilities, teams } = meta

  return (
    <div className="flex bg-surface border border-border rounded-2xl p-1 mt-8">
      <div className="flex border border-border rounded-xl p-6 w-full">
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-3 gap-y-12 w-full">
          <div className="flex flex-col gap-3 col-span-1">
            <h3 className="text-foreground/60 font-medium text-sm">ROLES</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {roles.map((role, index) => (
                <li
                  className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  key={index}
                >
                  <i className="fi fi-sr-circle-small text-xs" />
                  {role}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 col-span-1">
            <h3 className="text-foreground/60 font-medium text-sm">
              RESPONSIBILITIES
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {responsibilities.map((responsibility, index) => (
                <li
                  className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  key={index}
                >
                  <i className="fi fi-sr-circle-small text-xs" />
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 col-span-1">
            <h3 className="text-foreground/60 font-medium text-sm">TEAMS</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {teams.map((team, index) => (
                <li
                  className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  key={index}
                >
                  <Link
                    href={team.url}
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <i className="fi fi-sr-circle-small text-xs" />
                    {team.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function WorkDetailContent({
  slug,
}: WorkDetailContentProps): Promise<React.ReactElement> {
  const { content, meta } = await getWorkDetail(slug)
  const date = parseReadableDate(meta.date)

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-medium !leading-tight text-balance">
        {meta.title}
      </h1>

      <div className="flex items-center gap-4 mt-8">
        <Link
          href={meta.client.url}
          target="_blank"
          className="!leading-none transition-all duration-300 hover:-translate-y-1 text-sm"
        >
          {meta.client.name}
        </Link>

        <span className="!leading-none cursor-pointer transition-all duration-300 hover:-translate-y-1 text-sm">
          {date}
        </span>
      </div>

      <Overview meta={meta} />

      <ArticleContent className="mt-16">{content}</ArticleContent>
    </div>
  )
}
