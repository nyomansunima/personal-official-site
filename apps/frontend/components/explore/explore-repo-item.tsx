import Image from 'next/image'
import { FunctionComponent } from 'react'
import styles from '@styles/components/explore/explore-repo-item.module.scss'
import { ExplorationRepo } from '~/types/content'

interface ExploreRepoItemProps {
  data: ExplorationRepo
}

/**
 * # ExploreRepoItem
 *
 * the repo item to show in the
 * explore stages
 *
 * @returns JSX.Element
 */
const ExploreRepoItem: FunctionComponent<ExploreRepoItemProps> = ({
  data,
}): JSX.Element => {
  return (
    <div
      data-cursor-size="80"
      data-cursor-icon="fi fi-rr-code-commit"
      className={`${styles.item} item`}
      onClick={() => window.open(data.url)}
    >
      <picture>
        <Image src={data.image} fill sizes="auto" alt={data.title} />
      </picture>
      <i
        className={`${
          data.source == 'github'
            ? 'fi fi-brands-github'
            : 'fi fi-brands-gitlab'
        } ${styles.source}`}
      ></i>
      <div className={styles.detail}>
        <h4>{data.title}</h4>
        <p>{data.desc.substring(0, 70)}</p>
      </div>
    </div>
  )
}

export default ExploreRepoItem
