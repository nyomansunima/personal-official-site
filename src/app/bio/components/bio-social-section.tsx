import { Button } from '~/app/components/ui/button'
import Link from 'next/link'
import { socials } from '~/constants/social'

export default async function BioSocialSection() {
  return (
    <section className="flex flex-wrap items-center mt-16 gap-3 justify-center">
      {socials.map((social, i) => (
        <Button
          asChild
          key={i}
          size={'icon'}
          variant={'outline'}
          className="h-14 w-14 text-lg transition-all duration-700 hover:scale-95"
        >
          <Link href={social.url} target="_blank">
            <i className={`${social.icon}`} />
          </Link>
        </Button>
      ))}
    </section>
  )
}
