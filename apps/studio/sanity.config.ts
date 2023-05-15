import { defineConfig, isDev } from 'sanity'
import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial'
import { media } from 'sanity-plugin-media'
import { colorInput } from '@sanity/color-input'
import { codeInput } from '@sanity/code-input'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'personal-portfolio',
  projectId: '5vg8abbe',
  dataset: 'production',
  plugins: [
    deskTool(),
    visionTool(),
    media(),
    colorInput(),
    codeInput(),
    ...(isDev ? devOnlyPlugins : []),
  ],
  schema: {
    types: schemaTypes,
  },
})
