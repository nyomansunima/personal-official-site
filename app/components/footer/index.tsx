import * as React from 'react'
import { FooterMenuList, MenuList } from './menu'
import { SocialMediaList } from './social'

export default function Footer(): React.ReactElement {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col border-t border-border">
        <MenuList />
        <SocialMediaList />
      </div>

      <div className="flex flex-col tablet:flex-row items-center px-5 tablet:px-10 border-t border-border py-7 justify-between">
        <span className="text-sm">
          Copyright &copy; 2024 - Alright Reserved
        </span>
        <FooterMenuList />
      </div>
    </footer>
  )
}
