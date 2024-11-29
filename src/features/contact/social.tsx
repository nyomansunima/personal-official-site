'use client'

import * as React from 'react'
import { SocialItem } from './social-item'
import { useQuery } from '@tanstack/react-query'
import * as contactService from './contact-service'

export function SocialMediaList(): React.ReactElement {
  const { data, isSuccess } = useQuery({
    queryKey: ['socials'],
    queryFn: contactService.getSocials,
  })

  return (
    <div className="flex mt-4 tablet:mt-6">
      <ul className="flex flex-wrap items-center gap-2">
        {isSuccess &&
          data &&
          data.map((soc, index) => <SocialItem social={soc} key={index} />)}
      </ul>
    </div>
  )
}
