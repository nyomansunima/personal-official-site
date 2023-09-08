import { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'
const animate = require('tailwindcss-animate')

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Gilroy', 'sans-serif'],
      mono: ['DM Mono', 'monospace'],
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {
      colors: {
        accent: '#B1FF74',
        light: '#FFFFFF',
        dark: '#070410',
      },
      borderRadius: {
        '4xl': '32px',
      },
    },
  },
  plugins: [forms, aspectRatio, typography, animate],
}
