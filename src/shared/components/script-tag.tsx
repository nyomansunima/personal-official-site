import Script from 'next/script'
import * as React from 'react'
import { config } from '@shared/lib/config'

export function GoogleAnalyticsScript(): React.ReactElement {
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
