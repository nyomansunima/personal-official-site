import type { Config } from 'tailwindcss'
import form from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import animation from 'tailwindcss-animate'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx,json}',
    './data/**/*.{js,ts,jsx,tsx,mdx,json}',
  ],
  darkMode: ['selector'],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)'],
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {
      fontSize: {
        sm: '.84375rem',
        base: '.9350rem',
        lg: '1.0625rem',
        xl: '1.1875rem',
      },
      colors: {
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
        surface: 'hsl(var(--color-surface))',
        border: 'hsl(var(--color-border))',
        input: 'hsl(var(--color-input))',
        primary: {
          DEFAULT: 'hsl(var(--color-primary))',
          foreground: 'hsl(var(--color-primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--color-secondary))',
          foreground: 'hsl(var(--color-secondary-foreground))',
        },
      },
      typography: {
        DEFAULT: {
          css: {},
        },
      },
    },
  },
  plugins: [typography, form, animation],
}

export default config
