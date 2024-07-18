import type { Metadata } from 'next'
import { satoshi, cabinetGrotesk } from '~/fonts'
import './globals.css'
import { config } from '~/config/setting'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import Header from './header'
import Footer from './footer'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${satoshi.variable} ${cabinetGrotesk.variable}`}
    >
      <body className="">
        {/* Google trackings and tags scripts */}
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

        {/* Main layout */}
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />

        {/* Vercel analytics */}
        <Analytics />
      </body>
    </html>
  )
}
