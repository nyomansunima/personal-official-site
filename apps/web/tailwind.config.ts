import { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ['Gilroy', 'sans-serif'],
      mono: ['DM Mono', 'monospace']
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px'
    },
    extend: {}
  },
  plugins: [forms, aspectRatio, typography]
}
