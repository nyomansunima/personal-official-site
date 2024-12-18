import * as React from 'react'
import type { Metadata } from 'next'
import '@shared/styles/globals.css'
import { config } from '@shared/libs'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import {
  ThemeProvider,
  AnimationProvider,
  PosthogProvider,
} from '@shared/providers'
import { Footer, Header, Toaster, CenteredLayout } from '@shared/components'
import { fonts } from '@shared/fonts'

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
      className={`${fonts.inter.variable}`}
    >
      <PosthogProvider>
        <body suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange
          >
            <AnimationProvider>
              <CenteredLayout>
                <Header />
                <main className="min-h-screen pb-28 tablet:pb-56">
                  {children}
                </main>
                <Footer />
              </CenteredLayout>

              <Toaster />
            </AnimationProvider>
          </ThemeProvider>

          <VercelAnalytics />
        </body>
      </PosthogProvider>
    </html>
  )
}
