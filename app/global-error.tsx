'use client'

import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Button } from './components/ui/button'

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
          <main className="min-h-screen">
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
