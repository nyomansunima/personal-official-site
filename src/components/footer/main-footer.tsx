import { Button } from '@components/ui/button'
import Link from 'next/link'
import { socials } from '~/constants/social'

const currentYear = new Date().getFullYear()

/**
 * Render main footer
 * that used to the main layout
 *
 * @returns {ReactElement}
 */
export default function MainFooter() {
  return (
    <footer className="flex flex-col border-t border-t-neutral-100 dark:border-t-neutral-900 font-medium">
      <div className="flex justify-center mt-5">
        <div className="flex items-center laptop:mr-20 justify-center px-5">
          <ul className="flex items-center list-none gap-3 flex-wrap justify-center">
            {socials.map((social, i) => (
              <Button
                size="icon"
                variant={'outline'}
                className="text-lg transition-all duration-700 hover:-translate-y-1"
                data-cursor-size="48"
                data-cursor-stick
                data-cursor-exclusion
                asChild
                key={i}
              >
                <Link target="_blank" href={social.url}>
                  <i className={`${social.icon}`} />
                </Link>
              </Button>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col tablet:flex-row items-center laptop:px-10 py-6 border-t border-t-neutral-100 dark:border-t-neutral-900 mt-5">
        <span
          className="flex items-center"
          data-cursor-size="40"
          data-cursor-exclusion
        >
          Copyright &copy; {currentYear}
        </span>

        <div className="flex laptop:flex-1"></div>
        <div className="flex items-center laptop:mr-20">
          <ul className="flex items-center gap-5">
            <li
              className="flex items-center"
              data-cursor-exclusion
              data-cursor-size="40"
            >
              <Link href="/privacy">Privacy</Link>
            </li>
            <li
              className="flex items-center"
              data-cursor-exclusion
              data-cursor-size="40"
            >
              <Link href="/terms">Terms</Link>
            </li>
            <li
              className="flex items-center"
              data-cursor-exclusion
              data-cursor-size="40"
            >
              <Link href="/faq">FAQs</Link>
            </li>
          </ul>
        </div>

        <span className="flex items-center gap-2">
          Created with <i className="fi fi-rr-heart"></i>
        </span>
      </div>
    </footer>
  )
}
