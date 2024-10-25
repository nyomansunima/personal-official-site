import * as React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { config } from '~/lib/config'
import { Analytics } from '@vercel/analytics/react'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { AnimationProvider } from '~/components/animation-provider'
import { ThemeProvider } from '~/components/theme-provider'
import Header from '~/components/header'
import Footer from '~/components/footer'
import { Toaster } from './components/ui/toast'
import { CenteredLayout } from './components/centered-layout'
import { GoogleAnalyticsScript } from './components/script-tag'

// default metadata for the site
export const metadata: Metadata = {
  applicationName: 'Nyoman Sunima',
  keywords: [
    'Product Designer',
    'UI UX Designer',
    'Web Designer',
    'Shopify Developer',
    'Web Developer',
    'Webflow Expert',
    'Framer Expert',
    'Squarespace',
    'Wix Developer',
    'Fullstack',
    'Mobile Developer',
    'Indie Hacker',
  ],
  authors: [{ name: 'Nyoman Sunima' }],
  publisher: 'Nyoman Sunima',
  creator: 'Nyoman Sunima',
  metadataBase: new URL(config.app.host),
  verification: {
    google: 'fTZZv4lCZ2_i8jo8FFKuXc6Acuy8jMClhwDzRX64NgE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body suppressHydrationWarning>
        <GoogleAnalyticsScript />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <AnimationProvider>
            <CenteredLayout>
              <Header />
              <main className="min-h-screen py-20 tablet:pb-56">
                {children}
              </main>
              <Footer />
            </CenteredLayout>

            <Toaster />
          </AnimationProvider>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}
