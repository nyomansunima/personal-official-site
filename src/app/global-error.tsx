'use client'

import '@shared/styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Button } from '@shared/components/ui/button'
import { CenteredLayout } from '@shared/components/centered-layout'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body suppressHydrationWarning>
        <CenteredLayout>
          <main className="min-h-screen py-20 tablet:pb-56">
            <h1 className="!leading-tight text-3xl tablet:text-4xl text-center font-medium">
              Something wrong!
            </h1>

            <div className="mt-16 flex justify-center">
              <Button variant={'text'} size={'lg'} onClick={() => reset()}>
                Try again
              </Button>
            </div>
          </main>
        </CenteredLayout>
      </body>
    </html>
  )
}
