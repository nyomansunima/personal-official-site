import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx,json}',
    './data/**/*.{js,ts,jsx,tsx,mdx,json}',
  ],
  darkMode: ['selector'],
  theme: {
    fontFamily: {
      sans: ['var(--font-geist-sans)'],
      mono: ['var(--font-geist-mono)'],
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {
      fontSize: {
        base: '.935rem',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        ambient: 'hsl(var(--ambient))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
      },
      typography: {
        DEFAULT: {
          css: {},
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
