import { DM_Mono } from 'next/font/google'
import localFont from 'next/font/local'

/** DM Mono from google */
export const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-mono',
})

/** Local fonts using gilroy */
export const gilroy = localFont({
  src: [
    {
      path: './gilroy/regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: './gilroy/medium.woff2',
      style: 'normal',
      weight: '500',
    },
    {
      path: './gilroy/semibold.woff2',
      style: 'normal',
      weight: '600',
    },
    {
      path: './gilroy/bold.woff2',
      style: 'normal',
      weight: '700',
    },
    {
      path: './gilroy/extrabold.woff2',
      style: 'normal',
      weight: '800',
    },
    {
      path: './gilroy/black.woff2',
      style: 'normal',
      weight: '900',
    },
  ],
  display: 'swap',
  variable: '--font-gilroy',
})
