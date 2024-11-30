import * as React from 'react'
import { SocialItem } from './social-item'
import * as contactService from './contact-service'

const socials = await contactService.getSocials()

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
