'use client'

import '@shared/styles/globals.css'
import { Button, CenteredLayout } from '@shared/components'
import { fonts } from '@shared/fonts'

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
      className={`${fonts.inter.variable}`}
    >
      <body suppressHydrationWarning>
        <CenteredLayout>
          <main className="min-h-screen py-20 tablet:py-36 tablet:pb-56">
            <h1 className="!leading-tight text-3xl tablet:text-4xl text-center font-medium">
              Something wrong!
            </h1>

            <p className="mt-7 !leading-relaxed laptop:w-10/12 text-center text-foreground">
              Opps, something happen, don't panic. This can be happen when the
              url is invalid or deleted, this mean your pages is not found.
              Start explore another one, we help you find better way to navigate
              through header and footer. “I’am your designer & developer”.
            </p>

            <div className="mt-16 flex justify-center">
              <Button variant={'text'} size={'lg'} onClick={() => reset()}>
                Try again
                <i className="fi fi-rr-spinner" />
              </Button>
            </div>
          </main>
        </CenteredLayout>
      </body>
    </html>
  )
}
