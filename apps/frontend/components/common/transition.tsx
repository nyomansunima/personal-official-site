import { FunctionComponent, ReactNode, useEffect } from 'react'
import styles from '@styles/components/common/transition.module.scss'
import { useRouter } from 'next/router'

interface TransitionProps {
  children?: ReactNode | ReactNode[]
}

/**
 * # Transition
 *
 * adding transition, and loading animation
 * each pages, also enable to customize in each pages
 * @returns JSX.Element
 */
const Transition: FunctionComponent<TransitionProps> = ({
  children,
}): JSX.Element => {
  const router = useRouter()

  useEffect(() => {}, [router.pathname])

  return (
    <>
      {children}
      <div className={`${styles.overlay} overlay`}></div>
    </>
  )
}

export default Transition
