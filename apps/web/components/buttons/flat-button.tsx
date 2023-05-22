import { useRouter } from 'next/router'
import { FunctionComponent, ReactNode } from 'react'

interface FlatButtonProps {
  children?: ReactNode | ReactNode[]
  onClick?: () => void
  link?: string
  disabled?: boolean
  showUnderline?: boolean
  className?: string
}

/**
 * # FlatButton
 *
 * button with flat type of style
 * @returns JSX.Element
 */
const FlatButton: FunctionComponent<FlatButtonProps> = ({
  children,
  onClick,
  link,
  disabled,
  className,
}): JSX.Element => {
  const router = useRouter()

  const viewLink = () => {
    if (link!.includes('http://') || link!.includes('https://')) {
      window.open(link)
    } else {
      router.push(link!)
    }
  }

  return (
    <button
      className={`${className} flex justify-center items-center px-8 h-12 bg-black text-slate-100 rounded-2xl gap-3 font-semibold`}
      onClick={link ? viewLink : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default FlatButton
