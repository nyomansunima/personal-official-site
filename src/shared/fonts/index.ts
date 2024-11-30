import { Inter, DM_Mono } from 'next/font/google'

export const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
})

export const dmMono = DM_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['300', '400', '500'],
})
