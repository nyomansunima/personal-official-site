import * as DateUtil from 'date-fns'

export function formatReadableDate(
  stringDate: string,
  format?: string,
): string {
  const defaultFormat = 'MMMM, yyyy'
  const date = new Date(stringDate)
  const formattedDate = DateUtil.format(date, format ?? defaultFormat)

  return formattedDate || ''
}
