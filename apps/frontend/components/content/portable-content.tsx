import { PortableText } from '@portabletext/react'
import { FunctionComponent } from 'react'
import styles from '@styles/components/content/content-portable.module.scss'
import Image from 'next/image'
import urlBuilder from '@sanity/image-url'
import sanityClient from '@lib/connection/sanity-connection'

interface ContentPortableProps {
  content: any
}

interface ImageComponentProps {
  value: any
}

/**
 * # ImageComponent
 *
 * the component
 * to showing the image in portable content
 *
 * @returns JSX.Element
 */
const ImageComponent: FunctionComponent<ImageComponentProps> = ({
  value,
}): JSX.Element => {
  return (
    <picture>
      <Image
        src={urlBuilder(sanityClient).image(value).url()}
        fill
        sizes="auto"
        alt={value.alt || ''}
      />
    </picture>
  )
}

/**
 * # ContentPortable
 *
 * the portable content
 * that parse the content form sanity
 * @returns JSX.Element
 */
const ContentPortable: FunctionComponent<ContentPortableProps> = ({
  content,
}): JSX.Element => {
  // define the specific components
  const Components = {
    types: {
      image: ImageComponent,
    },
  }

  return (
    <div className={styles.content}>
      <PortableText value={content} components={Components} />
    </div>
  )
}

export default ContentPortable
