import { Button } from '~/components/ui/button'
import Link from 'next/link'
import { socials } from '~/constants/social'

export default function ContactSocialSection() {
  return (
    <section
      className="flex container mx-auto laptop:px-20 px-5"
      data-animation="slide-up"
      data-animation-delay=".4"
    >
      <div
        className="flex flex-wrap gap-4 items-center mt-16 w-7/12"
        data-animation-target
      >
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
        <Button asChild size={'md'} variant={'primary'}>
          <Link
            href={'https://www.upwork.com/freelancers/~0173a3d4a34995e572'}
            target="_blank"
          >
            Find me on Upwork
          </Link>
        </Button>
      </div>
    </section>
  )
}
