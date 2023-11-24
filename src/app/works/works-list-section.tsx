'use client'

import { Button } from '~/components/ui/button'
import { WorkListItemCard } from './work-list-item'
import { useInfiniteQuery } from '@tanstack/react-query'
import { workService } from '~/services/work-service'
import * as React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const types = ['Project', 'Exploration', 'Playground']

function WorksFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const typeParam = searchParams.get('type')

  function filteringByType(type: string) {
    const newParams = new URLSearchParams(searchParams.toString())
    if (newParams.get('type') === type) {
      newParams.delete('type')
    } else {
      newParams.set('type', type)
    }

    const newURL = `/works?${newParams.toString()}`

    router.push(newURL)
  }

  return (
    <div className="flex flex-col mt-28">
      <div className="flex items-center gap-3">
        {types.map((type, i) => (
          <Button
            size={'md'}
            variant={typeParam === type ? 'secondary' : 'outline'}
            key={i}
            className="trall duration-700 hover:scale-95"
            onClick={() => filteringByType(type)}
          >
            {type}
          </Button>
        ))}
      </div>
    </div>
  )
}

function WorksList() {
  const searchParams = useSearchParams()
  const { data, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['works', 'list', { ...searchParams }],
      initialPageParam: null,
      queryFn: workService.getAllWorks,
      getNextPageParam: (lastPage, allPages) => lastPage.pageInfo.endCursor,
    })

  return (
    <div className="flex flex-col mt-28">
      <div className="grid w-full laptop:grid-cols-2 grid-cols-1 gap-x-20 laptop:gap-y-24 gap-14">
        {isSuccess &&
          data.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.works.map((work, i) => (
                <WorkListItemCard work={work} key={i} />
              ))}
            </React.Fragment>
          ))}
      </div>

      <div className="flex justify-center mt-32">
        {hasNextPage && data && (
          <Button
            disabled={isFetchingNextPage || !hasNextPage}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? <>Load More</> : <>Loading more</>}
          </Button>
        )}
      </div>
    </div>
  )
}

export default function WorksListSection() {
  return (
    <section className="flex container mx-auto">
      <div className="flex flex-col laptop:w-9/12 mx-auto px-5">
        <WorksFilter />
        <WorksList />
      </div>
    </section>
  )
}
