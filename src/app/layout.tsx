import * as React from 'react'
import type { Metadata } from 'next'
import '@shared/styles/globals.css'
import config from '@shared/libs/config'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { AnimationProvider } from '@shared/providers/animation-provider'
import { ThemeProvider } from '@shared/providers/theme-provider'
import Header from '@shared/components/common/header'
import Footer from '@shared/components/common/footer'
import { Toaster } from '@shared/components/ui/toast'
import { CenteredLayout } from '@shared/components/common/centered-layout'
import { PosthogProvider } from '@shared/providers/posthog-provider'
import { QueryProvider } from '@shared/providers/query-provider'

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
    google: config.verification.google,
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
      <PosthogProvider>
        <body suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange
          >
            <QueryProvider>
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
            </QueryProvider>
          </ThemeProvider>

          <VercelAnalytics />
        </body>
      </PosthogProvider>
    </html>
  )
}
