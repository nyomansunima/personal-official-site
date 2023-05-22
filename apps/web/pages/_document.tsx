import { Html, Head, Main, NextScript } from 'next/document'

/**
 * # Document
 *
 * the root document
 * that wrap the application
 *
 * @returns Document
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
