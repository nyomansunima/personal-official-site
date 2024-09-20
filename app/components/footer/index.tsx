import * as React from 'react'
import { FooterMenuList } from './menu'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'

export default function Footer(): React.ReactElement {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col text-foreground/60 gap-1">
        <p>
          Design in{' '}
          <span className="font-medium text-foreground">Bali, Indonesia</span>{' '}
          for global audiences
        </p>
        <p>
          Connect with me{' '}
          <Link href={'/contact'} className="font-medium text-foreground">
            @nyomansunima
          </Link>
        </p>
        <p>
          Support by feedback,{' '}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={'https://ko-fi.com/nyomansunima'}
                  target="_blank"
                  className="font-medium text-foreground"
                >
                  buy a coffee 💖
                </Link>
              </TooltipTrigger>
              <TooltipContent>Get something free</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </p>
      </div>

      <div className="flex flex-col tablet:flex-row laptop:items-center py-7 laptop:justify-between mt-8">
        <span className="text-sm">
          Copyright &copy; 2024 - Alright Reserved
        </span>
        <FooterMenuList />
      </div>
    </footer>
  )
}
