import type { Metadata } from 'next'
import { dmMono, gilroy } from '~/fonts'
import ThemeProvider from '~/providers/theme-provider'
import './globals.css'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/lib/shared-metadata'
import QueryProvider from '~/providers/query-provider'
import MainHeader from '@components/header/main-header'
import MainFooter from '@components/footer/main-footer'
import AnimationProvider from '~/providers/animation-provider'
import CursorFollower from '@components/common/cursor-follower'

export const metadata: Metadata = {
  title:
    'Product Designer & Fullstack developer focused on crafting app | Nyoman Sunima',
  description:
    'Product Designer with fullstack developer experience. Focused on building app from scratch and indie hacker',
  applicationName: 'Nyoman Sunima',
  keywords: [
    'Nyoman',
    'Sunima',
    'Developer',
    'Designer',
    'Fullstack',
    'UI UX',
    'Indie Hacker',
    'Content Creator',
  ],
  authors: [{ name: 'Nyoman Sunima' }],
  publisher: 'Nyoman Sunima',
  creator: 'Nyoman Sunima',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title:
      'Product Designer & Fullstack developer focused on crafting app | Nyoman Sunima',
    description:
      'Product Designer with fullstack developer experience. Focused on building app from scratch and indie hacker',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title:
      'Product Designer & Fullstack developer focused on crafting app | Nyoman Sunima',
    description:
      'Product Designer with fullstack developer experience. Focused on building app from scratch and indie hacker',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ colorScheme: 'dark' }}
      className={'dark'}
    >
      <ThemeProvider>
        <QueryProvider>
          <AnimationProvider>
            <body className={`${gilroy.variable} ${dmMono.variable}`}>
              <MainHeader />
              <div className="py-20">{children}</div>
              <MainFooter />
              <CursorFollower isGelly />
            </body>
          </AnimationProvider>
        </QueryProvider>
      </ThemeProvider>
    </html>
  )
}
