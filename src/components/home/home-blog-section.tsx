import { BlogPostItemCard } from '@components/blog/blog-post-item'
import { Button } from '@components/ui/button'
import Link from 'next/link'
import { blogService } from '~/services/blog-service'

export default async function HomeBlogSection() {
  const posts = await blogService.getInitialBlogPost()

  return (
    <section
      v-show="posts.length > 0"
      className="flex flex-col container mx-auto px-5 laptop:px-20 blog"
    >
      <h2
        className="text-5xl laptop:text-8xl !leading-tight laptop:w-11/12"
        data-cursor-size="200"
        data-cursor-exclusion
        data-animation="text-word-slide-up"
      >
        I share my experience and educate other people.
      </h2>

      <div className="flex mt-16 actions">
        <Button asChild className="transition-all duration-700 hover:scale-95">
          <Link href={'/blog'}>
            Learn from blog <i className="fi fi-rr-arrow-right"></i>
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 laptop:grid-cols-3 gap-6 mt-20 list laptop:mt-36">
        {posts.map((post, i) => (
          <BlogPostItemCard post={post} key={i} />
        ))}
      </div>
    </section>
  )
}
