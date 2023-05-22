import { FloatingContactButton } from '@components/buttons'
import { MainFooter } from '@components/footers'
import { MainHeader } from '@components/headers'
import { FunctionComponent, ReactNode } from 'react'

type GeneralLayoutProps = {
  children?: ReactNode | ReactNode[]
}

const GeneralLayout: FunctionComponent<GeneralLayoutProps> = ({
  children,
}): JSX.Element => {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
      <FloatingContactButton />
    </>
  )
}

export default GeneralLayout