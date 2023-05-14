import { GeneralLayout } from '@components/layouts'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import { NextPageWithLayout } from '~/types/app'
import styles from '@styles/pages/projects/project.detail.module.scss'
import { useRouter } from 'next/router'
import useCursor from '@lib/hooks/use-cursor'
import { gsap } from 'gsap'

/**
 * # ProjectDetailPage
 *
 * showing detail information about the project
 * inlcuding the process and the ideas
 *
 * @returns JSX.Element
 */
const ProjectDetailPage: NextPageWithLayout = (): JSX.Element => {
  const router = useRouter()
  const cursor = useCursor()
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    cursor.reload()
    const ctx = gsap.context(() => {}, mainRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Doen | Nyoman Sunima</title>
        <meta
          name="description"
          content="Doen todo list application for productivity"
        />
      </Head>

      <main ref={mainRef} className={styles.main}></main>
    </>
  )
}

ProjectDetailPage.layout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>
}

export default ProjectDetailPage
