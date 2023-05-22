import { FunctionComponent, ReactNode } from 'react'

interface IconButtonProps {
  children?: ReactNode | ReactNode[]
}

/**
 * # IconButton
 *
 * the button fro icon purpose
 * @returns JSX.Element
 */
const IconButton: FunctionComponent<IconButtonProps> = ({
  children,
}): JSX.Element => {
  return (
    <button className="flex justify-center items-center">{children}</button>
  )
}

export default IconButton
