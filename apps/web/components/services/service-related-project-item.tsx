import Image from 'next/image'
import { FunctionComponent } from 'react'
import styles from '@styles/components/services/service-related-project-item.module.scss'

interface ServiceRelatedProjectItemProps {
  data: {
    slug: string
    overview: {
      title: string
      headline: string
      thumbnail: string
    }
    tags: string[]
  }
}

/**
 * # ServiceRelatedProjectItem
 *
 * the item of related project
 * in service
 *
 * @returns JSX.Element
 */
const ServiceRelatedProjectItem: FunctionComponent<
  ServiceRelatedProjectItemProps
> = ({ data }): JSX.Element => {
  return (
    <div className={`${styles.item} slider-item-anim`}>
      <picture data-cursor-size="80" data-cursor-text="Explore">
        <Image src={data.overview.thumbnail} fill alt="Image" />
      </picture>

      <h3>{data.overview.title}</h3>
      <span>{data.overview.headline}</span>
    </div>
  )
}

export default ServiceRelatedProjectItem
