import * as React from 'react'
import { SocialData, SocialItem } from './social-item'
import contactData from './contact-data.json'

const socials = contactData.socials as SocialData[]

export function SocialMediaList(): React.ReactElement {
  return (
    <div className="flex mt-4 tablet:mt-6">
      <ul className="flex flex-wrap items-center gap-2">
        {socials.map((soc, index) => (
          <SocialItem social={soc} key={index} />
        ))}
      </ul>
    </div>
  )
}
