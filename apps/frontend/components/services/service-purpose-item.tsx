import { FunctionComponent } from 'react'
import styles from '@styles/components/services/service-purpose-item.module.scss'

interface ServicePurposeItemProps {
  data: {
    iconCode: string
    name: string
  }
}

/**
 * # ServicePurposeItem
 *
 * the item of service purpose
 * @returns JSX.Element
 */
const ServicePurposeItem: FunctionComponent<ServicePurposeItemProps> = ({
  data,
}): JSX.Element => {
  return (
    <div className={`${styles.item} item`} data-cursor-stick>
      <i className={data.iconCode}></i>
      <span>{data.name}</span>
    </div>
  )
}

export default ServicePurposeItem
