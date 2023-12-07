import { Button } from '~/components/ui/button'
import Link from 'next/link'
import { workService } from '~/services/work-service'
import { WorkListItemCard } from '../works/work-list-item'

export default async function HomeProjectSection() {
  const featuredWorks = await workService.getFeaturedWorks()

  return (
    <section
      v-show="projects.length > 0"
      className="flex flex-col container mx-auto px-5 laptop:px-20 projects"
    >
      <h2
        className="text-5xl laptop:text-8xl !leading-tight laptop:w-11/12"
        data-cursor-size="200"
        data-cursor-exclusion
        data-animation="text-line-mask-opacity-scrub"
      >
        Top & featured projects.
      </h2>

      <div className="flex mt-16">
        <Button asChild variant="primary">
          <Link href={'/works'}>
            More projects <i className="fi fi-rr-arrow-right" />
          </Link>
        </Button>
      </div>

      <div className="grid laptop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 mt-24 gap-6">
        {featuredWorks.map((work, i) => (
          <WorkListItemCard work={work} key={i} display="home" />
        ))}
      </div>
    </section>
  )
}
