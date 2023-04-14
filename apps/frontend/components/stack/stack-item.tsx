import Image from 'next/image'
import { FunctionComponent } from 'react'
import styles from '@styles/components/stack/stack-item.module.scss'

interface StackItemProps {
  data: {
    image: string
    title: string
    description: string
    tags: string[]
    url: string
  }
}

/**
 * # StackItem
 *
 * the item list of stack
 * for service and works
 *
 * @returns JSX.Element
 */
const StackItem: FunctionComponent<StackItemProps> = ({
  data,
}): JSX.Element => {
  const openLink = () => {
    window.open(data.url)
  }

  return (
    <div
      className={`${styles.item} item-anim`}
      data-cursor-size="80"
      data-cursor-text="Go!"
      onClick={openLink}
    >
      <picture>
        <Image src={data.image} height={60} width={60} alt="Image" />
      </picture>

      <h5>{data.title}</h5>
      <p>{data.description}</p>

      <div className={styles.tags}>
        {data.tags.map((tag, index) => (
          <span className={styles.tag_item} key={index}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default StackItem
