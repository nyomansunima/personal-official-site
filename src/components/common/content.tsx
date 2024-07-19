export default function ArticleContent({ children }) {
  return (
    <article className="prose prose-h2:text-5xl prose-xl prose-p:text-lg prose-li:text-lg max-w-none prose-headings:font-heading prose-headings:font-medium prose-li:my-2">
      {children}
    </article>
  )
}
