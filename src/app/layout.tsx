import type { Metadata } from 'next'
import { dmMono, gilroy } from '~/fonts'
import ThemeProvider from '~/providers/theme-provider'
import './globals.css'
import QueryProvider from '~/providers/query-provider'
import MainHeader from '@components/header/main-header'
import MainFooter from '@components/footer/main-footer'
import AnimationProvider from '~/providers/animation-provider'
import CursorFollower from '@components/common/cursor-follower'
import { configuration } from '~/config/setting'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
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
  metadataBase: new URL(configuration.app.host),
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
              <div className="py-20 min-h-screen">{children}</div>
              <MainFooter />
              <CursorFollower isGelly />
              <Analytics />
            </body>
          </AnimationProvider>
        </QueryProvider>
      </ThemeProvider>
    </html>
  )
}
