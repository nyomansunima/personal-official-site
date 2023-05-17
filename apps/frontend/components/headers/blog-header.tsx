import { IconButton } from '@components/buttons'
import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'

interface Menu {
  label: string
  path: string
}

const menuList: Menu[] = [
  {
    label: 'Tips',
    path: 'tips',
  },
  {
    label: 'Journey',
    path: 'journey',
  },
  {
    label: 'Process',
    path: 'process',
  },
  {
    label: 'Design',
    path: 'design',
  },
  {
    label: 'Development',
    path: 'development',
  },
]

/**
 * # BlogHeader
 *
 * Header for blog
 *
 * @returns JSX.Element
 */
const BlogHeader: FunctionComponent = (): JSX.Element => {
  const navigatePath = (path: string) => {}

  return (
    <header className="flex fixed z-10 top-0 inset-x-0 bg-white border-b border-b-gray-100 px-10 py-4 items-center">
      {/* brand */}
      <div className="flex items-center text-xl font-medium gap-3">
        <Link href={'/'}>
          <Image src={'/images/logo.png'} height={40} width={40} alt="Logo" />
        </Link>
        <Link href={'/blog'} className="font-semibold">
          Blog
        </Link>
      </div>

      {/* navigations */}
      <div className="flex flex-1"></div>
      <div className="flex flex-1 gap-5 items-center">
        {menuList.map((menu, index) => (
          <button
            className="flex items-center justify-center px-2 py-1 rounded-md font-semibold"
            key={index}
            onClick={() => navigatePath(menu.path)}
          >
            {menu.label}
          </button>
        ))}
      </div>

      {/* the full menu */}
      <IconButton>
        <i className="fi fi-rr-search"></i>
      </IconButton>
    </header>
  )
}

export default BlogHeader
