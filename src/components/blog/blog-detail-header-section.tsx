import { Button } from '@components/ui/button'
import Link from 'next/link'

export default function BlogDetailHeaderSection() {
  return (
    <section className="flex items-center">
      <Button
        asChild
        variant={'outline'}
        className="transition-all duration-700 hover:scale-95"
      >
        <Link href={'/blog'}>
          <i className="fi fi-rr-arrow-left" />
          Back to overview
        </Link>
      </Button>
    </section>
  )
}
