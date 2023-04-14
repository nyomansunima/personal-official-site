import { FunctionComponent } from 'react'
import styles from '@styles/components/inspiration/inspiration-card.module.scss'
import Image from 'next/image'
import { Inspiration } from '~/types/inspiration'

interface InspirationCardProps {
  data: Inspiration
  className?: string
}

/**
 * # InspirationCard
 *
 * card to showing the inspiration
 * in the list and showing some information inside
 *
 * @returns JSX.Element
 */
const InspirationCard: FunctionComponent<InspirationCardProps> = ({
  data,
  className,
}): JSX.Element => {
  const openLink = () => {
    window.open(data.url)
  }

  return (
    <div onClick={openLink} className={`${styles.card} ${className}`}>
      <div className={styles.wrapper}>
        <div
          data-cursor-size="80"
          data-cursor-text="View"
          className={styles.thumbnail}
        >
          <Image src={data.image} fill alt={data.title} />
        </div>
        <div className={styles.source}>
          <i className="fi fi-brands-dribbble"></i>
          <span>nyomansunima</span>
        </div>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export default InspirationCard
