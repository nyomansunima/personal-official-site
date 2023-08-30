import { defineConfig, isDev } from 'sanity'
import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { media } from 'sanity-plugin-media'
import { colorInput } from '@sanity/color-input'
import { codeInput } from '@sanity/code-input'
import { markdownSchema } from 'sanity-plugin-markdown'

const devOnlyPlugins = []

export default defineConfig({
  name: process.env.SANITY_STUDIO_NAME,
  title: process.env.SANITY_STUDIO_TITLE,
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  plugins: [
    deskTool(),
    visionTool(),
    media(),
    colorInput(),
    codeInput(),
    markdownSchema(),
    ...(isDev ? devOnlyPlugins : []),
  ],
  schema: {
    types: schemaTypes,
  },
})
