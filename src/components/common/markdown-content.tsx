import * as React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { mergeClass } from '~/utils/helpers'

type Props = {
  content: string
  className?: string
}

/**
 * Seriealized the markdown content to match with the
 * new style approved markdown format.
 *
 * @param content the string markdown content
 * @returns {string}
 */
function serializedContent(content: string): string {
  const imgTagRegex = /!\[(.*?)\]\((.*?)(\s+align="(.*?)")?\)/g

  const parsedContent = content.replace(
    imgTagRegex,
    (match, altText, imageUrl) => {
      return `![${altText}](${imageUrl})`
    },
  )

  return parsedContent
}

export function MarkdownContent({ content, className }: Props) {
  const plugins = [remarkGfm]

  return (
    <div
      className={mergeClass(
        'text-foreground prose prose-lg dark:prose-invert prose-headings:font-medium dark:prose-headings:text-foreground laptop:prose-h1:text-6xl prose-h1:text-5xl prose-a:no-underline prose-img:rounded-xl',
        className,
      )}
    >
      <Markdown remarkPlugins={plugins}>{serializedContent(content)}</Markdown>
    </div>
  )
}
