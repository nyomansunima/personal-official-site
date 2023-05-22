import { useRouter } from 'next/router'
import { FunctionComponent, ReactNode } from 'react'
import styles from '@styles/components/buttons/text-button.module.scss'

type TextButtonProps = {
  children?: ReactNode
  onClick?: () => void
  link?: string
  disabled?: boolean
  showUnderline?: boolean
  className?: string
}

const TextButton: FunctionComponent<TextButtonProps> = ({
  children,
  onClick,
  link,
  disabled,
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
      onClick={link ? viewLink : onClick}
      disabled={disabled}
      className={styles.button}
    >
      <span className={styles.content}>{children}</span>
    </button>
  )
}

export default TextButton
