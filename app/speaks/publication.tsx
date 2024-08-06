import Link from 'next/link'
import { ReactElement } from 'react'

interface Publication {
  title: string
  description: string
  publisher: string
  url: string
  image: string
}

interface PublicationItemProps {
  publication: Publication
}

// Predefined publication
// can be modified to update the content
const publications: Publication[] = [
  {
    title: 'Personal talks',
    description:
      'Find development tips and tricks, vlog, videos around business, life styles, entrepreneur',
    image: '👾',
    publisher: 'youtube.com',
    url: 'https://youtube.com/@nyomansunima',
  },
]

function PublicationItem({ publication }: PublicationItemProps): ReactElement {
  const { title, description, publisher, image, url } = publication

  return (
    <Link
      href={url}
      target="_blank"
      className="flex bg-ambient border border-border p-3 rounded-2xl col-span-1 gap-3 transition-all duration-300 hover:scale-95 group relative"
    >
      <div className="flex justify-center items-center h-12 w-12 rounded-xl bg-secondary/35">
        {image}
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="text-sm font-medium">{title}</h3>
        <span className="text-sm text-foreground/90 text-clip">
          {publisher}
        </span>

        <p className="text-sm text-foreground/60 mt-3">{description}</p>
      </div>

      <div className="hidden w-7 h-7 rounded-lg bg-secondary/30 border border-border group-hover:flex justify-center items-center absolute top-3 right-3">
        <i className="fi fi-rr-arrow-small-right -rotate-45" />
      </div>
    </Link>
  )
}

export function PublicationSection(): ReactElement {
  return (
    <div className="flex flex-col pb-20 laptop:pb-36">
      <div className="flex laptop:w-10/12 mx-auto">
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-3 w-full">
          {publications.map((pub, index) => (
            <PublicationItem publication={pub} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
