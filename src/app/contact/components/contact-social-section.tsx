import { Button } from '~/app/components/ui/button'
import Link from 'next/link'
import { socials } from '~/constants/social'

export default function ContactSocialSection() {
  return (
    <section className="flex container mx-auto laptop:px-20 px-5">
      <div className="flex flex-wrap gap-4 items-center mt-16 w-7/12">
        {socials.map((soc, i) => (
          <Button
            key={i}
            asChild
            size={'md'}
            variant={'outline'}
            className="transition-all duration-500 hover:scale-95"
          >
            <Link href={soc.url} target="_blank">
              {soc.label}
            </Link>
          </Button>
        ))}
      </div>
    </section>
  )
}
