import { FunctionComponent } from 'react'
import styles from '@styles/components/services/service-req-item.module.scss'

interface ServiceReqItemProps {
  data: {
    iconCode: string
    title: string
    desc: string
  }
}

/**
 * # ServiceReqItem
 *
 * the item list of requrement of
 * service
 * @returns JSX.Element
 */
const ServiceReqItem: FunctionComponent<ServiceReqItemProps> = ({
  data,
}): JSX.Element => {
  return (
    <div
      className={styles.item}
      data-cursor-text="Remember"
      data-cursor-size="120"
    >
      <div className={styles.head}>
        <i className={data.iconCode}></i>
        <h4>{data.title}</h4>
      </div>

      <span>{data.desc}</span>
    </div>
  )
}

export default ServiceReqItem
