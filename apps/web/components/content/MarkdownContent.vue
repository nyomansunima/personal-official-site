<template>
  <div
    class="flex flex-col prose prose-xl prose-headings:font-semibold marker:text-black mt-16 prose-img:w-full prose-img:rounded-3xl prose-img:overflow-hidden prose-pre:border prose-pre:rounded-2xl content prose-pre:font-mono text-black prose-li:my-0 prose-p:mt-1 mb-0"
    v-html="parsedMarkdown"
  ></div>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import MarkdownAttrs from 'markdown-it-attrs'
import highlightJs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

interface MarkdownContentProps {
  data: string
}

const { data } = defineProps<MarkdownContentProps>()

const parsedMarkdown = computed(() => {
  // parse the string markdown
  // intro rendered html including add tags, code highligh and more
  const md = new MarkdownIt({
    html: true,
    xhtmlOut: true,
    breaks: true,
    linkify: true,
    typographer: true,
    highlight: (str, lang, attrs) => {
      if (lang && highlightJs.getLanguage(lang)) {
        try {
          return (
            '<pre class="hljs relative pt-6"><code>' +
            '<div class="flex items-center gap-1 absolute top-3 left-3"> <span class="flex h-3 w-3 rounded-full bg-red-500"></span> <span class="flex h-3 w-3 rounded-full bg-yellow-500"></span> <span class="flex h-3 w-3 rounded-full bg-green-500"></span></div>' +
            highlightJs.highlight(str, {
              language: lang,
              ignoreIllegals: true
            }).value +
            '</code></pre>'
          )
        } catch (__) {}
      }

      return (
        '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
      )
    }
  })
  md.use(MarkdownAttrs)
  return md.render(data)
})
</script>
