import * as React from 'react'
import * as workService from './work-service'
import Image from 'next/image'
import { MDXRemoteContent } from '@shared/components/common/content'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@shared/components/ui/tooltip'

interface WorkDetailContentProps {
  slug: string
}

export async function WorkDetailContent({
  slug,
}: WorkDetailContentProps): Promise<React.ReactElement> {
  const { meta, content } = await workService.getWork(slug)

  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <div className="flex border border-border bg-ambient rounded-2xl p-2 h-[200px] tablet:h-[400px]">
          <picture className="relative overflow-hidden border box-border bg-ambient h-full w-full rounded-xl">
            <Image
              src={meta.image}
              alt={meta.title}
              fill
              className="object-cover"
            />
          </picture>
        </div>

        <h1 className="text-2xl tablet:text-3xl font-medium !leading-tight text-pretty mt-10">
          {meta.title}
        </h1>

        <div className="flex items-center mt-5 gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className="text-sm font-medium text-foreground/60 transition-all duration-300 hover:-translate-y-1 hover:text-foreground cursor-pointer">
                  {meta.client}
                </span>
              </TooltipTrigger>
              <TooltipContent>The client that collaborate with</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <span className="text-sm font-medium text-foreground/60 transition-all duration-300 hover:-translate-y-1 hover:text-foreground cursor-pointer">
                  {meta.date}
                </span>
              </TooltipTrigger>
              <TooltipContent>The date that projects working on</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <span className="text-sm font-medium text-foreground/60 transition-all duration-300 hover:-translate-y-1 hover:text-foreground cursor-pointer">
                  {meta.duration}
                </span>
              </TooltipTrigger>
              <TooltipContent>
                The amazing timeline for the project
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex bg-ambient border border-border rounded-2xl p-1 mt-10 transition-all duration-300 hover:-translate-y-1">
          <div className="bg-ambient border border-border rounded-xl flex w-full p-4 pb-6">
            <div className="grid grid-cols-1 tablet:grid-cols-3 w-full gap-6">
              <div className="flex flex-col gap-3">
                <span className="font-medium">Roles:</span>

                <ul className="flex flex-col gap-3">
                  {meta.roles.map((role, index) => (
                    <li
                      className="flex items-center text-sm text-foreground/60 transition-all duration-300 hover:text-foreground cursor-pointer"
                      key={index}
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-medium">Responsibilities:</h3>

                <ul className="flex flex-col gap-3">
                  {meta.responsibilities.map((respon, index) => (
                    <li
                      className="flex items-center text-sm text-foreground/60 transition-all duration-300 hover:text-foreground cursor-pointer"
                      key={index}
                    >
                      {respon}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-medium">Teams:</h3>

                <ul className="flex flex-col gap-3">
                  {meta.teams.map((team, index) => (
                    <li
                      className="flex items-center text-sm text-foreground/60 transition-all duration-300 hover:text-foreground cursor-pointer"
                      key={index}
                    >
                      {team}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex bg-ambient border border-border rounded-2xl p-1 mt-3 transition-all duration-300 hover:-translate-y-1">
          <div className="bg-ambient border border-border rounded-xl flex w-full p-4 pb-6">
            <div className="grid grid-cols-1 tablet:grid-cols-2 w-full gap-6">
              <div className="flex flex-col gap-3">
                <span className="font-medium">Results:</span>

                <ul className="flex flex-col gap-3">
                  {meta.outcomes.map((outcome, index) => (
                    <li
                      className="flex items-center text-sm text-foreground/60 transition-all duration-300 hover:text-foreground cursor-pointer gap-2"
                      key={index}
                    >
                      <i className="fi fi-sr-check text-green-600 text-xs" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-medium">Responsibilities:</h3>

                <ul className="flex flex-col gap-3">
                  {meta.responsibilities.map((respon, index) => (
                    <li
                      className="flex items-center text-sm text-foreground/60 transition-all duration-300 hover:text-foreground cursor-pointer"
                      key={index}
                    >
                      {respon}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-16 w-full">
        <MDXRemoteContent content={content} />
      </div>
    </section>
  )
}
