import type { Metadata } from 'next'
import { dmMono, gilroy } from '~/fonts'
import './globals.css'
import { configuration } from '~/config/setting'
import { Analytics } from '@vercel/analytics/react'
import QueryProvider from '../components/provider/query-provider'
import AnimationProvider from '../components/provider/animation-provider'
import MainHeader from '../components/main-header'
import MainFooter from '../components/main-footer'
import CursorFollower from '../components/common/cursor-follower'
import Script from 'next/script'

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
    <html lang="en" suppressHydrationWarning>
      <QueryProvider>
        <AnimationProvider>
          <body className={`${gilroy.variable} ${dmMono.variable}`}>
            {/* Google analytics tags */}
            <Script
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${configuration.google.analytics.id}`}
            />
            <Script strategy="lazyOnload" id="google-analytics">
              {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
        
                  gtag('config', '${configuration.google.analytics.id}');
              `}
            </Script>

            <MainHeader />
            <div className="min-h-screen">{children}</div>
            <MainFooter />
            <CursorFollower isGelly />
            <Analytics />
          </body>
        </AnimationProvider>
      </QueryProvider>
    </html>
  )
}
