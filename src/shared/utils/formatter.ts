import * as DateUtil from 'date-fns'

/**
 * Format the date become more readbale version
 * allow to read and modification the string date into more usable
 *
 * @param stringDate date want to prase
 * @param format the date format using `date-fns` guidelines
 * @returns {string}
 */
export function formatReadableDate(
  stringDate: string,
  format?: string,
): string {
  const defaultFormat = 'MMMM, yyyy'
  const date = new Date(stringDate)
  const formattedDate = DateUtil.format(date, format ?? defaultFormat)

  return formattedDate || ''
}
