import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import * as DateUtil from 'date-fns'

/**
 * Merge the class to combine without
 * conflicts and avoid the bad code structure
 *
 * @param inputs the class input
 * @returns {string}
 */
export function mergeClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format the date become more readbale version
 * allow to read and modification the string date into more usable
 *
 * @param stringDate date want to prase
 * @param format the date format using `date-fns` guidelines
 * @returns {string}
 */
export function parseReadableDate(stringDate: string, format?: string): string {
  const defaultFormat = 'MMMM, yyyy'
  const date = new Date(stringDate)
  const formattedDate = DateUtil.format(date, format ?? defaultFormat)

  return formattedDate || ''
}
