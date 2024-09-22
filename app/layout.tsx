import * as React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { config } from '~/lib/config'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { AnimationProvider } from '~/components/animation-provider'
import { ThemeProvider } from '~/components/theme-provider'
import Header from '~/components/header'
import Footer from '~/components/footer'
import { Toaster } from './components/ui/toast'

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

// Set the google analytics tracking code and script
function GoogleAnalyticsScript(): React.ReactElement {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${config.google.analytics.id}`}
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${config.google.analytics.id}');
    `}
      </Script>
    </>
  )
}

// allow to centering the layout and
// make all of the pages, components, and sections align with the styles
function CenteredLayout({ children }): React.ReactElement {
  return (
    <div className="px-5 laptop:px-0 container mx-auto">
      <div className="mx-auto w-full tablet:w-11/12 laptop:w-9/12 desktop:w-7/12 laptop:px-10">
        {children}
      </div>
    </div>
  )
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
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AnimationProvider>
            <CenteredLayout>
              <Header />
              <main className="min-h-screen">{children}</main>
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
