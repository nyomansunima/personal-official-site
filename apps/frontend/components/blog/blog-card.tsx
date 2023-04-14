import { FunctionComponent } from 'react'
import styles from '@styles/components/blog/blog-card.module.scss'
import Image from 'next/image'
import { ArticlePost } from '~/types/content'

interface BlogCardProps {
  view?: 'grid' | 'full' | 'slide'
  randomLayout?: boolean
  className?: string
  data: ArticlePost
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
  const openLink = () => {
    window.open(`${process.env.NEXT_PUBLIC_HASHNODE_BLOG_URL}/${data.slug}`)
  }

  return (
    <div
      onClick={openLink}
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
          <Image src={data.coverImage} fill alt={data.title} />
        </div>
        <div className={styles.category}>
          <span className={styles.indicator}></span>
          <span className={styles.label}>{data.type}</span>
        </div>
        <span className={styles.title}>{data.title}</span>
      </div>
    </div>
  )
}

export default BlogCard
