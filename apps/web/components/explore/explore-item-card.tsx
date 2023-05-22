import Image from 'next/image'
import { FunctionComponent } from 'react'
import styles from '@styles/components/explore/explore-item-card.module.scss'
import { useRouter } from 'next/router'

interface ExploreItemCardProps {
  data: {
    thumbnail: string
    slug: string
    title: string
    summary: string
  }
}

/**
 * # ExploreItemCard
 *
 * the card to showing the
 * explore list
 *
 * @returns JSX.Element
 */
const ExploreItemCard: FunctionComponent<ExploreItemCardProps> = ({
  data,
}): JSX.Element => {
  const router = useRouter()

  return (
    <div
      className={styles.item}
      onClick={() => router.push(`/explore/${data.slug}`)}
    >
      <picture data-cursor-size="100" data-cursor-text="View Detail">
        <Image src={data.thumbnail} fill alt={data.title} sizes="auto" />
      </picture>
      <div className={styles.detail}>
        <h4>{data.title}</h4>
        <span>{data.summary && data.summary.substring(0, 90)}</span>
      </div>
    </div>
  )
}

export default ExploreItemCard
