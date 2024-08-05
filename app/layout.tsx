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
          disableTransitionOnChange
        >
          <AnimationProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </AnimationProvider>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}
