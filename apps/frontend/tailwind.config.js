const forms = require('@tailwindcss/forms')
const aspectRatio = require('@tailwindcss/aspect-ratio')
const typography = require('@tailwindcss/typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: [`var(--font-sans)`],
      mono: [`var(--font-mono)`],
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {
      borderRadius: {
        '4xl': '32px',
      },
    },
  },
  plugins: [forms, aspectRatio, typography],
}
