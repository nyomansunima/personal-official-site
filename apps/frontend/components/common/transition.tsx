import { useRouter } from 'next/router'
import { FunctionComponent, ReactNode, useEffect } from 'react'

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

  const startTransition = () => {}

  const stopTransition = () => {}

  useEffect(() => {
    // track every router changes
    // use to trigger the animation, and transitions
    router.events.on('routeChangeStart', startTransition)
    router.events.on('routeChangeComplete', stopTransition)

    return () => {
      router.events.off('routeChangeStart', startTransition)
      router.events.off('routeChangeComplete', stopTransition)
    }
  }, [router])

  return <>{children}</>
}

export default Transition
