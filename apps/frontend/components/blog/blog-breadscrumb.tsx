import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'

/**
 * # Blogbreadscrumb
 *
 * the navigation breadscrumb for blog detail
 * page
 * @returns JSX.Element
 */
const BlogBreadscrumb: FunctionComponent = (): JSX.Element => {
  const router = useRouter()
  const params = router.query.slug as string[]

  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border bg-white border-gray-100">
      <span className="flex font-medium text-gray-600">Blog</span>

      <i className="fi fi-br-angle-small-right"></i>

      {params.map((path) => (
        <span className="flex font-medium" key={path}>
          {path}
        </span>
      ))}
    </div>
  )
}

export default BlogBreadscrumb
