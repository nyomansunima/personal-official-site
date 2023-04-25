import Image from 'next/image'
import { FunctionComponent } from 'react'
import styles from '@styles/components/explore/explore-stack-item.module.scss'

interface ExploreStackItemProps {
  url: string
  image: string
  title: string
}

/**
 * # ExploreStackItem
 *
 * the explore item to showing
 * the stack
 * @returns JSX.Element
 */
const ExploreStackItem: FunctionComponent<ExploreStackItemProps> = ({
  image,
  url,
  title,
}): JSX.Element => {
  return (
    <div
      data-cursor-magnetic
      className={styles.chip}
      onClick={() => window.open(url)}
    >
      <Image src={image} alt={title} height={56} width={56} />

      <span>{title}</span>
    </div>
  )
}

export default ExploreStackItem
