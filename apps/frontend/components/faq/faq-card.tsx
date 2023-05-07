import { FunctionComponent, useState } from 'react'
import styles from '@styles/components/faq/faq-card.module.scss'
import { FAQ } from '~/types/faq'

interface FAQCardProps {
  faq: FAQ
}

/**
 * # FAQCard
 *
 * item list of
 * question asked
 *
 * @returns JSX.Element
 */
const FAQCard: FunctionComponent<FAQCardProps> = ({ faq }): JSX.Element => {
  const [isShowDesc, setShowDesc] = useState<boolean>(false)

  return (
    <li className={styles.item}>
      <div
        className={styles.head}
        onClick={() => setShowDesc((state) => !state)}
      >
        <h5>{faq.question}</h5>
        <button type="button">
          <i className="fi fi-rr-angle-circle-down"></i>
        </button>
      </div>
      {isShowDesc && <p>{faq.answer}</p>}
    </li>
  )
}

export default FAQCard
