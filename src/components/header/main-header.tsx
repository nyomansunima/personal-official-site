'use client'

import { DynamicBrand } from '@components/common/dynamic-logo'
import { NavigationMenu } from '@components/common/navigation-menu'
import { Button } from '@components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@components/ui/tooltip'
import { useTheme } from 'next-themes'

export default function MainHeader() {
  const { theme, setTheme } = useTheme()

  function switchTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <header className="flex items-center fixed top-0 inset-x-0 px-10 py-3 z-50">
      <DynamicBrand />
      <div className="flex flex-grow"></div>
      <div className="flex items-center gap-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size={'icon'} variant={'outline'} onClick={switchTheme}>
                <i
                  className={`${
                    theme === 'light'
                      ? 'fi fi-rr-moon-stars'
                      : 'fi fi-rr-brightness'
                  }`}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Switch theme</TooltipContent>
          </Tooltip>
          <NavigationMenu />
        </TooltipProvider>
      </div>
    </header>
  )
}
