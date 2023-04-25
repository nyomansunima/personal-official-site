import { GeneralLayout } from '@components/layouts'
import Head from 'next/head'
import { NextPageWithLayout } from '~/types/app'

/**
 * # ExplorePage
 *
 * the page to explore all of
 * the exploration project and works
 *
 * @returns JSX.Element
 */
const ExplorePage: NextPageWithLayout = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Explorations | Nyoman Sunima</title>
        <meta
          name="description"
          content="All of my work and what i build for exploring are placed in here"
        />
      </Head>
      <main></main>
    </>
  )
}

ExplorePage.layout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>
}

export default ExplorePage
