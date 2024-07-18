import { DM_Mono } from 'next/font/google'
import localFont from 'next/font/local'

/** DM Mono from google */
export const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-mono',
})
