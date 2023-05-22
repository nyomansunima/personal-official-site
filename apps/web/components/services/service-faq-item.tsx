import { FunctionComponent, useState } from 'react'
import styles from '@styles/components/services/service-faq-item.module.scss'
import { FAQ } from '~/types/faq'

interface ServiceFAQItemProps {
  data: FAQ
}

/**
 * # ServiceFAQItem
 *
 * item of service question
 * and it's answer
 *
 * @returns JSX.Element
 */
const ServiceFAQItem: FunctionComponent<ServiceFAQItemProps> = ({
  data,
}): JSX.Element => {
  const [isShowAnswer, setShowAnswer] = useState<boolean>(false)

  return (
    <li className={styles.faq_item}>
      <div
        className={styles.question}
        onClick={() => setShowAnswer((state) => !state)}
      >
        <h5>{data.question}</h5>
        <button type="button">
          <i className="fi fi-rr-add"></i>
        </button>
      </div>
      {isShowAnswer && <p className={styles.answer}>{data.answer}</p>}
    </li>
  )
}

export default ServiceFAQItem
