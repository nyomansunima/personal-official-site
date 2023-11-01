import { MarkdownContent } from '~/app/components/common/markdown-content'
import Image from 'next/image'
import { blogService } from '~/services/blog-service'

type Props = {
  slug: string
}

type BlogTagProps = {
  tag: string
}

function BlogTag({ tag }: BlogTagProps) {
  return (
    <span className="flex items-center justify-center px-4 py-3 bg-background border border-border rounded-full">
      {tag}
    </span>
  )
}

export default async function BlogDetailArticleSection({ slug }: Props) {
  const post = await blogService.getPostDetail(slug)

  return (
    <section className="flex flex-col mt-16">
      <article className="flex flex-col">
        <h1 className="text-5xl !leading-tight">{post.title}</h1>

        <picture className="relative h-[400px] overflow-hidden rounded-2xl mt-16">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </picture>

        <div className="flex items-center gap-3 mt-10">
          {post.tags.map((tag, i) => (
            <BlogTag tag={tag} key={i} />
          ))}
        </div>

        <MarkdownContent content={post.content} className="mt-10" />
      </article>
    </section>
  )
}
