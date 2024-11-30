'use client'

import '@shared/styles/globals.css'
import { Button } from '@shared/components/ui/button'
import { CenteredLayout } from '@shared/components//common/centered-layout'
import * as fonts from '@shared/fonts'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fonts.inter.variable} ${fonts.dmMono.variable}`}
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
