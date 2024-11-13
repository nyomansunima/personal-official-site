import * as React from 'react'
import { ContentImage } from '@shared/components/content'

export function SharingSection(): React.ReactElement {
  return (
    <div>
      <h2>Read, write, and share the toughts</h2>

      <p>
        I'm passionate about sharing my knowledge and experiences with others.
        Whether it's through blog posts, podcasts, or social media, I believe
        that sharing is a powerful tool for personal growth and professional
        development. By sharing my insights and expertise, I can inspire and
        empower others to achieve their goals.
      </p>

      <ContentImage
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1729709291876/a59a6504-a98b-4818-955f-efba3364d5b6.jpeg"
        alt="Read, write and share"
      />

      <p>
        I'm dedicated to continuous learning and staying up-to-date with the
        latest trends and technologies. I believe that knowledge is power, and
        by sharing it, I can help others unlock their full potential.
      </p>

      <p>
        I'm committed to being a positive influence and a role model for others.
        By sharing my journey and experiences, I can inspire and motivate others
        to pursue their dreams and make a difference in the world.
      </p>
    </div>
  )
}
