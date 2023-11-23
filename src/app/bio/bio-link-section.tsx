import { Button } from '~/components/ui/button'
import Link from 'next/link'
import { commonService } from '~/services/common-service'

export default async function BioLinkSection() {
  const links = await commonService.getAllLinks()

  return (
    <section className="flex flex-col mt-10">
      <div className="flex flex-wrap gap-4 justify-center">
        {links.map((link, i) => (
          <Button
            key={i}
            size={'base'}
            variant={'outline'}
            asChild
            className="transition-all duration-700 hover:-translate-y-1"
          >
            <Link href={link.url} target="_blank">
              {link.title}
            </Link>
          </Button>
        ))}
      </div>
    </section>
  )
}
