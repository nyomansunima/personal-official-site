import { FancyCursor, Transition } from '@components/common'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import localFont from 'next/font/local'
import { DM_Mono } from 'next/font/google'
import { AppPropsWithLayout } from '~/types/app'
import '@styles/globals.scss'
import '@styles/globals.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

// define the custom font
// from local and google
const dmMonoFont = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

const gilroyFont = localFont({
  src: [
    {
      path: '../public/fonts/gilroy/Gilroy-Light.woff2',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../public/fonts/gilroy/Gilroy-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../public/fonts/gilroy/Gilroy-Medium.woff2',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../public/fonts/gilroy/Gilroy-Semibold.woff2',
      style: 'normal',
      weight: '600',
    },
    {
      path: '../public/fonts/gilroy/Gilroy-Bold.woff2',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../public/fonts/gilroy/Gilroy-Extrabold.woff2',
      style: 'normal',
      weight: '800',
    },
    {
      path: '../public/fonts/gilroy/Gilroy-Black.woff2',
      style: 'normal',
      weight: '900',
    },
  ],
  display: 'swap',
})

// register the gsap
// plugin
gsap.registerPlugin(ScrollTrigger)

/**
 * # App
 *
 * the application bootstrap
 * to get all components and all resources
 *
 * @returns JSX.Element
 */
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient())

  // get the app layout
  // if not return the actual pages
  const layout = Component.layout ?? ((page) => page)

  const animationInit = () => {
    // smooth scroll plugin register
    const lenis = new Lenis({
      duration: 1.4,
    })
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }

  useEffect(() => {
    animationInit()
  }, [])

  return (
    <>
      {/* 
        define the global variables of the font
        using css variables
      */}
      <style jsx global>{`
        :root {
          --font-sans: ${gilroyFont.style.fontFamily};
          --font-mono: ${dmMonoFont.style.fontFamily};
        }
      `}</style>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Transition>
            {layout(
              <>
                <Component {...pageProps} />

                {/* add the top level component */}
                <FancyCursor />
              </>
            )}
          </Transition>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}
