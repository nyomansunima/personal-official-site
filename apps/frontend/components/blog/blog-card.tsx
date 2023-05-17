import { FunctionComponent } from 'react'
import styles from '@styles/components/blog/blog-card.module.scss'
import Image from 'next/image'
import { BlogPostItem } from '~/types/content'
import Link from 'next/link'

interface BlogCardProps {
  view?: 'grid' | 'full' | 'slide'
  randomLayout?: boolean
  className?: string
  data: BlogPostItem
}

/**
 * # BlogCard
 *
 * card to showing the blog article
 * including the list, grid, and the slide
 *
 * @returns JSX.Element
 */
const BlogCard: FunctionComponent<BlogCardProps> = ({
  view = 'grid',
  className,
  randomLayout,
  data,
}): JSX.Element => {
  return (
    <Link
      href={`/blog/${data.slug}`}
      className={`${styles.card} ${className} ${styles[view]} ${
        randomLayout ? styles.random_layout : ''
      }`}
    >
      <div className={styles.wrapper}>
        <button type="button">
          <i className="fi fi-bs-arrow-up-right"></i>
        </button>
        <div
          data-cursor-text="Read"
          data-cursor-size="80"
          className={styles.thumbnail}
        >
          <Image src={data.thumbnail} fill alt={data.title} />
        </div>
        <div className={styles.category}>
          <span className={styles.indicator}></span>
          <span className={styles.label}>{data.tag}</span>
        </div>
        <span className={styles.title}>{data.title}</span>
      </div>
    </Link>
  )
}

export default BlogCard
