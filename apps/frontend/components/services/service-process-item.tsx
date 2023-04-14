import { FunctionComponent } from 'react'
import styles from '@styles/components/services/service-process-item.module.scss'

interface ServiceProcessItemProps {
  position: number
  data: { title: string; desc: string }
}

/**
 * # ServiceProcessItem
 *
 * the item of service process
 * showing in the list
 * @returns JSX.Element
 */
const ServiceProcessItem: FunctionComponent<ServiceProcessItemProps> = ({
  position,
  data,
}): JSX.Element => {
  return (
    <li
      className={styles.item}
      data-cursor-size="80"
      data-cursor-text="It's work"
    >
      <span className={styles.position}>{position}</span>
      <h4 className={styles.heading}>{data.title}</h4>
      <p>{data.desc}</p>
    </li>
  )
}

export default ServiceProcessItem
