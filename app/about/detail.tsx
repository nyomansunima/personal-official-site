import Link from 'next/link'
import * as React from 'react'
import { ContentImage, GalleryListImage } from '~/components/content'

const images = [
  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1561969310-fa2e856250ba?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1540776398900-46755652c969?q=80&w=2914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

export function DetailSection(): React.ReactElement {
  return (
    <div>
      <h1>Hello, nice to meet you</h1>

      <p>
        Hello, my name is Nyoman Sunima, a product designer, software engineer &
        creator with a passion for solving problems. Located in Bali, Indonesia
        and work with remotely teams around the world. I loved to shipping
        products, apps, sites and also exploring the technology.
      </p>

      <p>
        It's all start when i'am in a vocational high school (2016) at{' '}
        <Link href="https://smknbalimandara.sch.id" className="font-medium">
          Bali Mandara
        </Link>
        , i'am had a lot of interest of design, especially in website. I take
        the computer and networking class, but also learning design &
        development alone with the tutorials. It's bring me a big impact and
        also guide my life into tech industries.
      </p>

      <ContentImage
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1729709241070/2aa95ebc-0bfd-4362-90cb-3b238cc4ef46.jpeg"
        alt="Activity"
      />

      <p>
        My journey as a designer has been driven by the desire to create
        innovative solutions that address real-world challenges. As a product
        designer & software engineer, I meticulously blend form and seamless
        experiences.
      </p>

      <p>
        I believe that design should not only meet users' needs but also exceed
        their expectations. By putting myself in the users' shoes and
        prioritizing their perspectives, I ensure that every decision I make is
        rooted in empathy and usability. The result? Intuitive and delightful
        user experiences that leave a lasting impression.
      </p>

      <GalleryListImage images={images} />

      <p>
        But my expertise doesn't stop at design. I'm also a software engineer
        equipped with technical skills to bring ideas to life. Through my
        knowledge of programming languages and cutting-edge technologies, I turn
        design concepts into fully functional and interactive digital
        experiences. By combining design and development,
      </p>

      <p>
        I create immersive solutions that captivate and engage audiences. What
        truly sets me apart is my insatiable thirst for knowledge and growth.
        I'm constantly exploring new frontiers and staying at the forefront of
        emerging trends and technologies. This curiosity fuels my ability to
        think outside the box and deliver forward-thinking solutions that
        resonate with audiences.
      </p>
    </div>
  )
}
