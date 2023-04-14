import Image from 'next/image'
import { FunctionComponent } from 'react'
import styles from '@styles/components/services/service-platform-item.module.scss'

interface ServicePlatformItemProps {
  data: {
    image: string
    name: string
  }
}

/**
 * # servicePlatfromItem
 *
 * the item list of service platform
 *
 * @returns JSX.Element
 */
const ServicePlatformItem: FunctionComponent<ServicePlatformItemProps> = ({
  data,
}): JSX.Element => {
  return (
    <div className={styles.item}>
      <picture>
        <Image src={data.image} fill alt={data.name} />
      </picture>

      <span>{data.name}</span>
    </div>
  )
}

export default ServicePlatformItem
