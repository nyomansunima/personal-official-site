'use client'

import { DynamicBrand } from '~/components/common/dynamic-logo'
import { NavigationMenu } from '~/components/common/navigation-menu'
import { TooltipProvider } from '~/components/ui/tooltip'

export default function MainHeader() {
  return (
    <header className="flex items-center fixed top-0 inset-x-0 px-10 py-3 z-50">
      <DynamicBrand />
      <div className="flex flex-grow"></div>
      <div className="flex items-center gap-3">
        <TooltipProvider>
          <NavigationMenu />
        </TooltipProvider>
      </div>
    </header>
  )
}
