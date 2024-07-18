import localFont from 'next/font/local'

export const cabinetGrotesk = localFont({
  src: './cabinet-grotesk/cabinet-grotesk-variable.woff2',
  display: 'swap',
  variable: '--font-cabinet-grotesk',
})

export const satoshi = localFont({
  src: [
    { path: './satoshi/satoshi-variable.woff2', style: 'normal' },
    { path: './satoshi/satoshi-variable-italic.woff2', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-satoshi',
})
